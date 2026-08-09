import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import SuccessModal from '../components/SuccessModal';

const INDUSTRY_OPTIONS = [
    'Construction',
    'Latex',
    'Paper',
    'Paints/Coatings',
    'Oil and Gas',
    'Fertilizer',
];

const COUNTRY_OPTIONS = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'Albania', code: '+355' },
    { name: 'Algeria', code: '+213' },
    { name: 'Andorra', code: '+376' },
    { name: 'Angola', code: '+244' },
    { name: 'Antigua and Barbuda', code: '+1' },
    { name: 'Argentina', code: '+54' },
    { name: 'Armenia', code: '+374' },
    { name: 'Australia', code: '+61' },
    { name: 'Austria', code: '+43' },
    { name: 'Azerbaijan', code: '+994' },
    { name: 'Bahamas', code: '+1' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Barbados', code: '+1' },
    { name: 'Belarus', code: '+375' },
    { name: 'Belgium', code: '+32' },
    { name: 'Belize', code: '+501' },
    { name: 'Benin', code: '+229' },
    { name: 'Bhutan', code: '+975' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Bosnia and Herzegovina', code: '+387' },
    { name: 'Botswana', code: '+267' },
    { name: 'Brazil', code: '+55' },
    { name: 'Brunei', code: '+673' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Burundi', code: '+257' },
    { name: 'Cabo Verde', code: '+238' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' },
    { name: 'Chile', code: '+56' },
    { name: 'China', code: '+86' },
    { name: 'Colombia', code: '+57' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo (Brazzaville)', code: '+242' },
    { name: 'Congo (Kinshasa)', code: '+243' },
    { name: 'Costa Rica', code: '+506' },
    { name: 'Cote d\'Ivoire', code: '+225' },
    { name: 'Croatia', code: '+385' },
    { name: 'Cuba', code: '+53' },
    { name: 'Cyprus', code: '+357' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Denmark', code: '+45' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Dominica', code: '+1' },
    { name: 'Dominican Republic', code: '+1' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' },
    { name: 'El Salvador', code: '+503' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Estonia', code: '+372' },
    { name: 'Eswatini', code: '+268' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Fiji', code: '+679' },
    { name: 'Finland', code: '+358' },
    { name: 'France', code: '+33' },
    { name: 'Gabon', code: '+241' },
    { name: 'Gambia', code: '+220' },
    { name: 'Georgia', code: '+995' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'Greece', code: '+30' },
    { name: 'Grenada', code: '+1' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Guinea', code: '+224' },
    { name: 'Guinea-Bissau', code: '+245' },
    { name: 'Guyana', code: '+592' },
    { name: 'Haiti', code: '+509' },
    { name: 'Honduras', code: '+504' },
    { name: 'Hungary', code: '+36' },
    { name: 'Iceland', code: '+354' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Iran', code: '+98' },
    { name: 'Iraq', code: '+964' },
    { name: 'Ireland', code: '+353' },
    { name: 'Israel', code: '+972' },
    { name: 'Italy', code: '+39' },
    { name: 'Jamaica', code: '+1' },
    { name: 'Japan', code: '+81' },
    { name: 'Jordan', code: '+962' },
    { name: 'Kazakhstan', code: '+7' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kiribati', code: '+686' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Laos', code: '+856' },
    { name: 'Latvia', code: '+371' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' },
    { name: 'Libya', code: '+218' },
    { name: 'Liechtenstein', code: '+423' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Malawi', code: '+265' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mali', code: '+223' },
    { name: 'Malta', code: '+356' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Mauritania', code: '+222' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Mexico', code: '+52' },
    { name: 'Micronesia', code: '+691' },
    { name: 'Moldova', code: '+373' },
    { name: 'Monaco', code: '+377' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Montenegro', code: '+382' },
    { name: 'Morocco', code: '+212' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Namibia', code: '+264' },
    { name: 'Nauru', code: '+674' },
    { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' },
    { name: 'Nigeria', code: '+234' },
    { name: 'North Korea', code: '+850' },
    { name: 'North Macedonia', code: '+389' },
    { name: 'Norway', code: '+47' },
    { name: 'Oman', code: '+968' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Palau', code: '+680' },
    { name: 'Palestine', code: '+970' },
    { name: 'Panama', code: '+507' },
    { name: 'Papua New Guinea', code: '+675' },
    { name: 'Paraguay', code: '+595' },
    { name: 'Peru', code: '+51' },
    { name: 'Philippines', code: '+63' },
    { name: 'Poland', code: '+48' },
    { name: 'Portugal', code: '+351' },
    { name: 'Qatar', code: '+974' },
    { name: 'Romania', code: '+40' },
    { name: 'Russia', code: '+7' },
    { name: 'Rwanda', code: '+250' },
    { name: 'Saint Kitts and Nevis', code: '+1' },
    { name: 'Saint Lucia', code: '+1' },
    { name: 'Saint Vincent and the Grenadines', code: '+1' },
    { name: 'Samoa', code: '+685' },
    { name: 'San Marino', code: '+378' },
    { name: 'Sao Tome and Principe', code: '+239' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Senegal', code: '+221' },
    { name: 'Serbia', code: '+381' },
    { name: 'Seychelles', code: '+248' },
    { name: 'Sierra Leone', code: '+232' },
    { name: 'Singapore', code: '+65' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Slovenia', code: '+386' },
    { name: 'Solomon Islands', code: '+677' },
    { name: 'Somalia', code: '+252' },
    { name: 'South Africa', code: '+27' },
    { name: 'South Korea', code: '+82' },
    { name: 'South Sudan', code: '+211' },
    { name: 'Spain', code: '+34' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Sudan', code: '+249' },
    { name: 'Suriname', code: '+597' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Syria', code: '+963' },
    { name: 'Taiwan', code: '+886' },
    { name: 'Tajikistan', code: '+992' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Thailand', code: '+66' },
    { name: 'Timor-Leste', code: '+670' },
    { name: 'Togo', code: '+228' },
    { name: 'Tonga', code: '+676' },
    { name: 'Trinidad and Tobago', code: '+1' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Turkey', code: '+90' },
    { name: 'Turkmenistan', code: '+993' },
    { name: 'Tuvalu', code: '+688' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ukraine', code: '+380' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United States', code: '+1' },
    { name: 'Uruguay', code: '+598' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'Vanuatu', code: '+678' },
    { name: 'Vatican City', code: '+379' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Yemen', code: '+967' },
    { name: 'Zambia', code: '+260' },
    { name: 'Zimbabwe', code: '+263' },
];

const FormWithValidation = () => {
    const [form, setForm] = useState({
        fullName: '',
        companyName: '',
        countryName: 'India',
        countryCode: '+91',
        phone: '',
        email: '',
        industry: '',
        otherIndustry: '',
        product: '',
        otherProduct: '',
        message: '',
    });
    const [touched, setTouched] = useState({});
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [isIndustryOpen, setIsIndustryOpen] = useState(false);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const industryRef = useRef(null);
    const countryRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (industryRef.current && !industryRef.current.contains(event.target)) {
                setIsIndustryOpen(false);
            }
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setIsCountryOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'phone') {
            // Keep phone input numeric and compatible with international lengths.
            const digits = value.replace(/\D/g, '').slice(0, 15);
            setForm((prev) => ({ ...prev, [id]: digits }));
        } else if (id === 'industry') {
            setForm((prev) => ({
                ...prev,
                industry: value,
                otherIndustry: value === 'Other' ? prev.otherIndustry : '',
            }));
        } else {
            setForm((prev) => ({ ...prev, [id]: value }));
        }
    };

    const handleBlur = (e) => {
        setTouched((prev) => ({ ...prev, [e.target.id || e.target.name]: true }));
    };

    const handleCountrySelect = (country) => {
        setForm((prev) => ({
            ...prev,
            countryName: country.name,
            countryCode: country.code,
        }));
        setIsCountryOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            fullName: true,
            companyName: true,
            email: true,
            industry: true,
            otherIndustry: form.industry === 'Other',
            product: true,
            message: true,
        });
        let errors = {};
        if (!form.fullName.trim()) errors.fullName = 'Full Name is required';
        if (!form.companyName.trim()) errors.companyName = 'Company Name is required';
        if (form.phone.trim() && (form.phone.length < 7 || form.phone.length > 15)) {
            errors.phone = 'Phone number must be between 7 and 15 digits';
        }
        if (!form.email.trim()) errors.email = 'Email is required';
        if (!form.industry.trim()) errors.industry = 'Industry is required';
        if (form.industry === 'Other' && !form.otherIndustry.trim()) errors.otherIndustry = 'Please specify your industry';
        if (!form.product.trim()) errors.product = 'Product is required';
        if (!form.message.trim()) errors.message = 'Message is required';
        setFieldErrors(errors);
        if (Object.keys(errors).length > 0) {
            setError('Please fill all required fields.');
            return;
        }
        setError('');
        setFieldErrors({});

        // Reset form
        setForm({
            fullName: '',
            companyName: '',
            countryName: 'India',
            countryCode: '+91',
            phone: '',
            email: '',
            industry: '',
            otherIndustry: '',
            product: '',
            otherProduct: '',
            message: '',
        });
        setTouched({});

        // Show Success Modal
        setShowSuccess(true);
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="fullName" className="block text-[16px] font-medium text-secondary-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="fullName"
                        className={`w-full px-4 py-3 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-secondary-50 ${touched.fullName && !form.fullName.trim() ? 'border-red-500' : ''}`}
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.fullName && fieldErrors.fullName && (
                        <span className="text-xs text-red-500">{fieldErrors.fullName}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="companyName" className="block text-[16px] font-medium text-secondary-700 mb-2">Company Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="companyName"
                        className={`w-full px-4 py-3 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.companyName && !form.companyName.trim() ? 'border-red-500' : ''}`}
                        placeholder="Your Company"
                        value={form.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.companyName && fieldErrors.companyName && (
                        <span className="text-xs text-red-500">{fieldErrors.companyName}</span>
                    )}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="phone" className="block text-[16px] font-medium text-secondary-700 mb-2">Phone Number</label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1.5fr]">
                        <div className="relative" ref={countryRef}>
                            <button
                                type="button"
                                id="countryCode"
                                className="w-full px-3 py-3 overflow-hidden text-left transition-all border outline-none text-ellipsis whitespace-nowrap rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50"
                                onClick={() => setIsCountryOpen((prev) => !prev)}
                                aria-haspopup="listbox"
                                aria-expanded={isCountryOpen}
                            >
                                {form.countryCode} {form.countryName}
                            </button>
                            {isCountryOpen && (
                                <div className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border shadow-lg top-full max-h-64 border-secondary-200 rounded-xl ring-1 ring-black/5">
                                    {COUNTRY_OPTIONS.map((country) => (
                                        <button
                                            type="button"
                                            key={`${country.name}-${country.code}`}
                                            className={`w-full px-3 py-2 overflow-hidden text-left text-[15px] text-ellipsis whitespace-nowrap transition-colors hover:bg-primary-500 hover:text-white ${form.countryName === country.name ? 'bg-secondary-50 font-medium' : ''}`}
                                            onClick={() => handleCountrySelect(country)}
                                            role="option"
                                            aria-selected={form.countryName === country.name}
                                        >
                                            {country.code} {country.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input
                            type="tel"
                            id="phone"
                            maxLength={15}
                            className={`w-full px-4 py-3 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.phone && form.phone.trim() && (form.phone.length < 7 || form.phone.length > 15) ? 'border-red-500' : ''}`}
                            placeholder="e.g. 9876543210"
                            value={form.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {touched.phone && fieldErrors.phone && (
                        <span className="text-xs text-red-500">{fieldErrors.phone}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block text-[16px] font-medium text-secondary-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.email && !form.email.trim() ? 'border-red-500' : ''}`}
                        placeholder="Name@example.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && fieldErrors.email && (
                        <span className="text-xs text-red-500">{fieldErrors.email}</span>
                    )}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="industry" className="block text-[16px] font-medium text-secondary-700 mb-2">Industry <span className="text-red-500">*</span></label>
                    <div className="relative" ref={industryRef}>
                        <div className="relative">
                            <input
                                type="text"
                                id="industry"
                                autoComplete="off"
                                className={`w-full px-4 py-3 pr-10 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.industry && !form.industry.trim() ? 'border-red-500' : ''} ${INDUSTRY_OPTIONS.includes(form.industry) ? 'cursor-pointer' : 'cursor-text'}`}
                                placeholder="Select or type Industry"
                                value={form.industry}
                                onChange={handleChange}
                                onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                                onBlur={handleBlur}
                                readOnly={INDUSTRY_OPTIONS.includes(form.industry)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-secondary-500">
                                <ChevronDown size={20} className={`transition-transform duration-200 ${isIndustryOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isIndustryOpen && (
                                <div className="absolute left-0 z-50 w-full mt-1 overflow-hidden bg-white border shadow-lg top-full border-secondary-200 rounded-xl ring-1 ring-black/5">
                                    <div className="py-1">
                                        {[...INDUSTRY_OPTIONS, 'Other'].map((option) => (
                                            <div
                                                key={option}
                                                className={`px-4 py-2 text-[15px] cursor-pointer transition-colors hover:bg-primary-500 hover:text-white ${form.industry === option ? 'bg-secondary-50 font-medium' : ''}`}
                                                onClick={() => {
                                                    if (option === 'Other') {
                                                        setForm(prev => ({ ...prev, industry: 'Other' }));
                                                        setTimeout(() => document.getElementById('otherIndustry')?.focus(), 0);
                                                    } else {
                                                        setForm(prev => ({ ...prev, industry: option, otherIndustry: '' }));
                                                    }
                                                    setIsIndustryOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {form.industry === 'Other' && (
                            <div className="mt-3">
                                <input
                                    type="text"
                                    id="otherIndustry"
                                    className={`w-full px-4 py-3 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.otherIndustry && !form.otherIndustry.trim() ? 'border-red-500' : ''}`}
                                    placeholder="Please specify your industry"
                                    value={form.otherIndustry}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.otherIndustry && fieldErrors.otherIndustry && (
                                    <span className="block mt-1 text-xs text-red-500">{fieldErrors.otherIndustry}</span>
                                )}
                            </div>
                        )}
                        {touched.industry && fieldErrors.industry && (
                            <span className="block mt-1 text-xs text-red-500">{fieldErrors.industry}</span>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor="product" className="block text-[16px] font-medium text-secondary-700 mb-2">Product of Interest <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select
                            id="product"
                            className={`w-full px-4 py-3 pr-10 transition-all cursor-pointer border outline-none appearance-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.product && !form.product.trim() ? 'border-red-500' : ''}`}
                            value={form.product}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="">Select Product needed</option>
                            <option value="Diamond - Calcium Nitrate">Diamond - Calcium Nitrate</option>
                            <option value="Microtec - Colloidal Silica">Microtec - Colloidal Silica</option>
                        </select>
                        {touched.product && fieldErrors.product && (
                            <span className="text-xs text-red-500">{fieldErrors.product}</span>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-[16px] font-medium text-secondary-700 mb-2">Message / Target Specs <span className="text-red-500">*</span></label>
                <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 transition-all border outline-none rounded-xl border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50 ${touched.message && !form.message.trim() ? 'border-red-500' : ''}`}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.message && fieldErrors.message && (
                    <span className="text-xs text-red-500">{fieldErrors.message}</span>
                )}
            </div>

            {error && <div className="font-semibold text-center text-red-500">{error}</div>}

            <button
                type="submit"
                className="w-full group relative py-2.5 px-8 bg-primary hover:bg-primary-600 rounded-full text-black text-[15px] font-bold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
                Send Message
            </button>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
            />
        </form>
    );
};

export default FormWithValidation;
