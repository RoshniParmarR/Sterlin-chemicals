import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
}



class Media {
    constructor({
        geometry,
        gl,
        data,
        index,
        length,
        renderer,
        scene,
        screen,
        viewport,
        bend,
        borderRadius = 0,
    }) {
        this.extra = 0;
        this.geometry = geometry;
        this.gl = gl;
        this.data = data;
        this.index = index;
        this.length = length;
        this.renderer = renderer;
        this.scene = scene;
        this.screen = screen;
        this.viewport = viewport;
        this.bend = bend;
        this.borderRadius = borderRadius;
        this.createShader();
        this.createMesh();
        this.onResize();
    }

    createShader() {
        const texture = new Texture(this.gl, {
            generateMipmaps: true
        });

        this.program = new Program(this.gl, {
            depthTest: false,
            depthWrite: false,
            vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = 0.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          gl_FragColor = color;
        }
      `,
            uniforms: {
                tMap: { value: texture },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [600, 400] },
                uSpeed: { value: 0 },
                uTime: { value: 100 * Math.random() },
                uBorderRadius: { value: this.borderRadius }
            },
            transparent: true
        });

        // Initialize empty canvas
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 400;
        texture.image = canvas;

        // Load image once and update texture
        const img = new Image();
        img.src = this.data.src;
        img.onload = () => {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Ensure clean transparent start

            const aspect = img.width / img.height;
            let dw = canvas.width * 0.98;
            let dh = dw / aspect;
            if (dh > canvas.height * 0.98) {
                dh = canvas.height * 0.98;
                dw = dh * aspect;
            }
            const dx = (canvas.width - dw) / 2;
            const dy = (canvas.height - dh) / 2;
            ctx.drawImage(img, dx, dy, dw, dh);
            texture.needsUpdate = true; // One clear update
        };
    }

    createMesh() {
        this.plane = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.plane.setParent(this.scene);
    }

    update(scroll, direction) {
        this.plane.position.x = this.x - scroll.current - this.extra;

        const x = this.plane.position.x;
        const H = this.viewport.width / 2;

        if (this.bend === 0) {
            this.plane.position.y = 0;
            this.plane.rotation.z = 0;
        } else {
            const B_abs = Math.abs(this.bend);
            const R = (H * H + B_abs * B_abs) / (2 * B_abs);
            const effectiveX = Math.min(Math.abs(x), H);

            const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
            if (this.bend > 0) {
                this.plane.position.y = -arc;
                this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
            } else {
                this.plane.position.y = arc;
                this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
            }
        }

        this.speed = scroll.current - scroll.last;
        this.program.uniforms.uTime.value += 0.04;
        this.program.uniforms.uSpeed.value = this.speed;

        const planeOffset = this.plane.scale.x / 2;
        const viewportOffset = this.viewport.width / 2;
        this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
        this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
        if (direction === 'right' && this.isBefore) {
            this.extra -= this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
        if (direction === 'left' && this.isAfter) {
            this.extra += this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
    }

    onResize({ screen, viewport } = {}) {
        if (screen) this.screen = screen;
        if (viewport) {
            this.viewport = viewport;
            if (this.plane.program.uniforms.uViewportSizes) {
                this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
            }
        }
        this.scale = this.screen.height / 1500;
        this.plane.scale.y = (this.viewport.height * (650 * this.scale)) / this.screen.height;
        this.plane.scale.x = (this.viewport.width * (1000 * this.scale)) / this.screen.width;
        this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
        this.padding = 5.0; // Further increased gap for a more spacious look
        this.width = this.plane.scale.x + this.padding;
        this.widthTotal = this.width * this.length;
        this.x = this.width * this.index;
    }
}

class App {
    constructor(
        container,
        {
            items,
            bend,
            borderRadius = 0.05,
            scrollSpeed = 0.05,
            scrollEase = 0.05,
            autoSpeed = 0.05
        } = {}
    ) {
        this.container = container;
        this.scrollSpeed = scrollSpeed;
        this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
        this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
        this.initialShiftSet = false;

        // Auto-scroll config
        this.autoSpeed = autoSpeed;
        this.isPaused = false;
        this.isDown = false;

        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.onResize();
        this.createGeometry();
        this.createMedias(items, bend, borderRadius);
        this.update();
        this.addEventListeners();
    }
    createRenderer() {
        this.renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0, 0, 0, 0);
        this.container.appendChild(this.gl.canvas);
    }
    createCamera() {
        this.camera = new Camera(this.gl);
        this.camera.fov = 45;
        this.camera.position.z = 20;
    }
    createScene() {
        this.scene = new Transform();
    }
    createGeometry() {
        this.planeGeometry = new Plane(this.gl, {
            heightSegments: 50,
            widthSegments: 100
        });
    }
    createMedias(items, bend = 1, borderRadius) {
        const galleryItems = items;
        // Each logo appears only once. 11 logos is sufficient width for the loop.
        this.mediasItems = galleryItems;
        this.medias = this.mediasItems.map((data, index) => {
            return new Media({
                geometry: this.planeGeometry,
                gl: this.gl,
                data,
                index,
                length: this.mediasItems.length,
                renderer: this.renderer,
                scene: this.scene,
                screen: this.screen,
                viewport: this.viewport,
                bend,
                borderRadius,
            });
        });
    }

    isEventInBand(e) {
        if (!this.container) return false;
        const rect = this.container.getBoundingClientRect();
        let y = 0;
        if (e.touches && e.touches.length > 0) {
            y = e.touches[0].clientY;
        } else if (e.clientY !== undefined) {
            y = e.clientY;
        } else {
            return false;
        }
        const relativeY = y - rect.top;
        const h = rect.height;
        return (relativeY > h * 0.25 && relativeY < h * 0.75);
    }

    onTouchDown(e) {
        if (!this.isEventInBand(e)) return;
        this.isDown = true;
        this.isPaused = false; // Dragging resumes the loop if it was paused
        this.scroll.position = this.scroll.current;
        this.start = e.touches ? e.touches[0].clientX : e.clientX;
    }
    onTouchMove(e) {
        if (!this.isDown) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const distance = (this.start - x) * (this.scrollSpeed * 0.025);
        this.scroll.target = this.scroll.position + distance;
    }
    onTouchUp() {
        if (!this.isDown) return;
        this.isDown = false;
        this.onCheck();
    }
    onMouseLeave() {
        this.isPaused = false; // Auto-resume when mouse leaves
    }
    onClick(e) {
        if (!this.isEventInBand(e)) return;
        this.isPaused = true;
        this.onCheck(); // Snap when pausing
    }
    onCheck() {
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
        const item = width * itemIndex;
        this.scroll.target = this.scroll.target < 0 ? -item : item;
    }

    handleNext() {
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        this.scroll.target += width;
        this.isPaused = true;
        this.onCheck();
    }

    handlePrev() {
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        this.scroll.target -= width;
        this.isPaused = true;
        this.onCheck();
    }


    onResize() {
        if (!this.container) return;
        this.screen = {
            width: this.container.clientWidth,
            height: this.container.clientHeight
        };
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.camera.perspective({
            aspect: this.screen.width / this.screen.height
        });
        const fov = (this.camera.fov * Math.PI) / 180;
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const width = height * this.camera.aspect;
        this.viewport = { width, height };
        if (this.medias) {
            this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
        }
    }
    update() {
        // Set a random starting position once on the first update
        if (!this.initialShiftSet && this.medias && this.medias.length > 0) {
            const randomShift = Math.random() * this.medias[0].widthTotal;
            this.scroll.target = randomShift;
            this.scroll.current = randomShift;
            this.scroll.last = randomShift;
            this.initialShiftSet = true;
        }

        // Constant loop motion - Only stop when actively clicking/dragging OR toggled paused
        if (!this.isDown && !this.isPaused) {
            this.scroll.target += this.autoSpeed;
        }

        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
        if (this.medias) {
            this.medias.forEach(media => media.update(this.scroll, direction));
        }
        this.renderer.render({ scene: this.scene, camera: this.camera });
        this.scroll.last = this.scroll.current;
        this.raf = window.requestAnimationFrame(this.update.bind(this));
    }
    addEventListeners() {
        this.boundOnResize = this.onResize.bind(this);
        this.boundOnTouchUp = this.onTouchUp.bind(this);
        this.boundOnClick = this.onClick.bind(this);
        this.boundOnMouseLeave = this.onMouseLeave.bind(this);
        this.boundOnTouchDown = this.onTouchDown.bind(this);
        this.boundOnTouchMove = this.onTouchMove.bind(this);
        window.addEventListener('resize', this.boundOnResize);
        this.container.addEventListener('mouseleave', this.boundOnMouseLeave);
        this.container.addEventListener('mousedown', this.boundOnTouchDown);
        window.addEventListener('mousemove', this.boundOnTouchMove);
        window.addEventListener('mouseup', this.boundOnTouchUp);
        this.container.addEventListener('touchstart', this.boundOnTouchDown);
        window.addEventListener('touchmove', this.boundOnTouchMove);
        window.addEventListener('touchend', this.boundOnTouchUp);
        this.container.addEventListener('click', this.boundOnClick);
    }
    destroy() {
        window.cancelAnimationFrame(this.raf);
        window.removeEventListener('resize', this.boundOnResize);
        window.removeEventListener('mouseup', this.boundOnTouchUp);
        window.removeEventListener('mousemove', this.boundOnTouchMove);
        window.removeEventListener('touchend', this.boundOnTouchUp);

        if (this.container) {
            this.container.removeEventListener('mouseleave', this.boundOnMouseLeave);
            this.container.removeEventListener('mousedown', this.boundOnTouchDown);
            this.container.removeEventListener('touchstart', this.boundOnTouchDown);
            this.container.removeEventListener('touchmove', this.boundOnTouchMove);
            this.container.removeEventListener('click', this.boundOnClick);
        }

        if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
            this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
        }
    }
}

const LogoCircularGallery = forwardRef(({
    items,
    bend = 1.5,
    borderRadius = 0.05,
    scrollSpeed = 2,
    scrollEase = 0.05,
    autoSpeed = 0.05
}, ref) => {
    const containerRef = useRef(null);
    const appRef = useRef(null);

    useImperativeHandle(ref, () => ({
        next: () => appRef.current?.handleNext(),
        prev: () => appRef.current?.handlePrev()
    }));

    useEffect(() => {
        if (!containerRef.current) return;
        const app = new App(containerRef.current, { items, bend, borderRadius, scrollSpeed, scrollEase, autoSpeed });
        appRef.current = app;
        return () => {
            app.destroy();
        };
    }, [items, bend, borderRadius, scrollSpeed, scrollEase, autoSpeed]);

    return <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />;
});

export default LogoCircularGallery;
