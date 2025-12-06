import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../../styling/modalStyling.css';
import { X } from 'lucide-react';

const Modal = ({ open, onClose, selectedService }) => {
    if (!open) return null;
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+92',
        service: selectedService || '',
        budget: '',
        message: '',
        hearedFrom: '',
        agree: false,
    });

    const [status, setStatus] = useState(null);

    // Update service field when selectedService prop changes
    useEffect(() => {
        if (selectedService) {
            setForm(prev => ({ ...prev, service: selectedService }))
        }
    }, [selectedService, open])

    const phoneLimits = {
        '+1': 10, '+44': 10, '+61': 9, '+81': 10, '+49': 11, '+33': 9, '+39': 10,
        '+86': 11, '+971': 9, '+966': 9, '+880': 10, '+20': 10, '+234': 10, '+91': 10,
        '+92': 10, '+55': 10, '+34': 9, '+52': 10, '+62': 10, '+60': 10, '+63': 10,
        '+64': 8, '+65': 8, '+66': 9, '+82': 10, '+98': 10, '+972': 9, '+973': 8,
        '+974': 8, '+975': 8, '+976': 8, '+977': 10, '+212': 9, '+213': 9, '+216': 8,
        '+218': 9, '+220': 8, '+221': 8, '+222': 8, '+223': 8, '+224': 8, '+225': 8,
        '+226': 8, '+227': 8, '+228': 8, '+229': 8, '+230': 8, '+231': 8, '+232': 8,
        '+233': 8, '+235': 8, '+236': 8, '+237': 8, '+238': 8, '+239': 8, '+240': 8,
        '+241': 8, '+242': 8, '+243': 8, '+244': 8, '+245': 8, '+246': 8, '+247': 8,
        '+248': 8, '+249': 8, '+250': 8, '+251': 8, '+252': 8, '+253': 8, '+254': 8,
        '+255': 8, '+256': 8, '+257': 8, '+258': 8, '+260': 8, '+261': 8, '+262': 8,
        '+263': 8, '+264': 8, '+265': 8, '+266': 8, '+267': 8, '+268': 8, '+269': 8,
        '+290': 8, '+291': 8, '+297': 8, '+298': 8, '+299': 8,
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            fullName: form.fullName,
            email: form.email,
            phone: `${form.countryCode}${form.phone}`,
            service: form.service,
            budget: form.budget,
            message: form.message,
            hearedFrom: form.hearedFrom,
        };

        try {
            const res = await fetch('https://formspree.io/f/xpwdjlwq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (data.ok) {
                setStatus('SUCCESS');
                alert('Thanks! Your message was sent.');
                setForm({
                    fullName: '',
                    email: '',
                    phone: '',
                    countryCode: '+92',
                    service: '',
                    budget: '',
                    message: '',
                    hearedFrom: '',
                    agree: false,
                });
                onClose();
            } else {
                setStatus('ERROR');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('ERROR');
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <div className="header">
                    <div className="left">
                        <h2>Kickstart Your Project Today!</h2>
                        <p>We're here to turn your ideas into reality. Let’s create something amazing together!</p>
                    </div>
                    <div className="right">
                        <button onClick={onClose}>
                            <i><X size={20} /></i>
                        </button>
                    </div>
                </div>

                <form className="modalForm" onSubmit={handleSubmit}>
                    <div className="flexBox">
                        <input type="text" name="fullName" placeholder="Full Name" required value={form.fullName} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
                    </div>

                    <div className="phoneRow">
                        <select name="countryCode" value={form.countryCode} onChange={handleChange}>
                            <option value="" hidden disabled>-- Select Country Code --</option>
                            <option value="+1">+1 (USA/Canada)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+61">+61 (Australia)</option>
                            <option value="+81">+81 (Japan)</option>
                            <option value="+49">+49 (Germany)</option>
                            <option value="+33">+33 (France)</option>
                            <option value="+39">+39 (Italy)</option>
                            <option value="+86">+86 (China)</option>
                            <option value="+971">+971 (UAE)</option>
                            <option value="+966">+966 (Saudi Arabia)</option>
                            <option value="+880">+880 (Bangladesh)</option>
                            <option value="+20">+20 (Egypt)</option>
                            <option value="+234">+234 (Nigeria)</option>
                            <option value="+91">+91 (India)</option>
                            <option value="+92">+92 (Pakistan)</option>
                            <option value="+55">+55 (Brazil)</option>
                            <option value="+34">+34 (Spain)</option>
                            <option value="+52">+52 (Mexico)</option>
                            <option value="+62">+62 (Indonesia)</option>
                            <option value="+60">+60 (Malaysia)</option>
                            <option value="+63">+63 (Philippines)</option>
                            <option value="+64">+64 (New Zealand)</option>
                            <option value="+65">+65 (Singapore)</option>
                            <option value="+66">+66 (Thailand)</option>
                            <option value="+82">+82 (South Korea)</option>
                            <option value="+98">+98 (Iran)</option>
                            <option value="+972">+972 (Israel)</option>
                            <option value="+973">+973 (Bahrain)</option>
                            <option value="+974">+974 (Qatar)</option>
                            <option value="+975">+975 (Bhutan)</option>
                            <option value="+976">+976 (Mongolia)</option>
                            <option value="+977">+977 (Nepal)</option>
                            <option value="+212">+212 (Morocco)</option>
                            <option value="+213">+213 (Algeria)</option>
                            <option value="+216">+216 (Tunisia)</option>
                            <option value="+218">+218 (Libya)</option>
                            <option value="+220">+220 (Gambia)</option>
                            <option value="+221">+221 (Senegal)</option>
                            <option value="+222">+222 (Mauritania)</option>
                            <option value="+223">+223 (Mali)</option>
                            <option value="+224">+224 (Guinea)</option>
                            <option value="+225">+225 (Ivory Coast)</option>
                            <option value="+226">+226 (Burkina Faso)</option>
                            <option value="+227">+227 (Niger)</option>
                            <option value="+228">+228 (Togo)</option>
                            <option value="+229">+229 (Benin)</option>
                            <option value="+230">+230 (Mauritius)</option>
                            <option value="+231">+231 (Liberia)</option>
                            <option value="+232">+232 (Sierra Leone)</option>
                            <option value="+233">+233 (Ghana)</option>
                            {/* Add more as needed */}
                        </select>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={form.phone}
                            maxLength={phoneLimits[form.countryCode] || 10}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                    setForm({ ...form, phone: value });
                                }
                            }}
                        />
                    </div>

                    <div className="flexBox">
                        <select name="service" required value={form.service} onChange={handleChange}>
                            <option value="" hidden disabled>-- Please select a service --</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Branding & Identity">Branding & Identity</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="SEO & Site Optimization">SEO & Site Optimization</option>
                            <option value="Ad Creative Design">Ad Creative Design</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Landing Page Design">Landing Page Design</option>
                            <option value="Free Website Audit">Free Website Audit</option>
                            <option value="Website Maintenance">Website Maintenance</option>
                            <option value="Email Marketing Setup">Email Marketing Setup</option>
                            <option value="Blog Writing & Content">Blog Writing & Content</option>
                            <option value="Resume & Portfolio Building">Resume & Portfolio Building</option>
                            <option value="Social Media Content Creation">Social Media Content Creation</option>
                            <option value="Personal Branding Services">Personal Branding Services</option>
                            <option value="Portfolio Website Development">Portfolio Website Development</option>
                            <option value="Website Hosting & Setup">Website Hosting & Setup</option>
                        </select>

                        <select name="budget" required value={form.budget} onChange={handleChange}>
                            <option value="" hidden disabled>-- Select Budget --</option>
                            <option value="Under $500">Under $500</option>
                            <option value="$500 - $1000">$500 - $1000</option>
                            <option value="$1000 - $5000">$1000 - $5000</option>
                            <option value="Above $5000">Above $5000</option>
                        </select>
                    </div>

                    <select name="hearedFrom" required value={form.hearedFrom} onChange={handleChange}>
                        <option value="" hidden disabled>How did you hear about us?</option>
                        <option value="facebook">Facebook</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="instagram">Instagram</option>
                        <option value="search">Search</option>
                        <option value="friend">From a Friend</option>
                        <option value="other">Other</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Describe your project, goals, timeline, and any specific features or services you need..."
                        rows="5"
                        required
                        value={form.message}
                        onChange={handleChange}
                    />

                    <label className="checkbox">
                        <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} required />
                        I accept the <Link to="/our-privacy-policy" target='_blank'>Privacy Policy</Link>
                    </label>

                    <button type="submit" className="submitBtn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
