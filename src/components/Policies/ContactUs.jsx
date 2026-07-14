import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "Enter a valid email";
    if (!formData.message.trim()) nextErrors.message = "Message is required";

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-25 mt-8">
        {/* Left Side */}
        <div>
          <h2 className="text-lg text-center text-[#7B1D2A] font-serif mb-10 uppercase">
            Send Us A Message
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {submitted && (
              <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                <CheckCircle2 size={16} />
                Your message has been received. We will get back to you soon.
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#7B1D2A]"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#7B1D2A]"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#7B1D2A]"
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-3xl px-4 py-2 outline-none resize-none focus:border-[#7B1D2A]"
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}

            <button
              type="submit"
              className="w-full bg-[#7B1D2A] text-white py-2 rounded-full text-lg hover:bg-[#651621] transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-lg text-center text-[#7B1D2A] font-serif mb-10 uppercase">
            Get In Touch
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4 mb-10">
            <MapPin
              size={28}
              className="text-black mt-1 flex-shrink-0"
            />

            <div className="space-y-3">
              <h3 className="text-lg font-serif font-semibold">
                Headquarters
              </h3>

              <p className="text-gray-800">
                Farida Gupta Retail Pvt. Ltd.
              </p>

              <p className="text-gray-800">
                138/2/9 1st Floor Kishan Garh Village,
              </p>

              <p className="text-gray-800">
                New Delhi - 110070, India (Office Only)
              </p>

              <a
                href="https://www.faridagupta.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#7B1D2A] hover:underline"
              >
                www.faridagupta.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-10">
            <Phone
              size={28}
              className="text-black mt-1 flex-shrink-0"
            />

            <div>
              <a
                href="tel:+918287567567"
                className="text-lg font-serif hover:text-[#7B1D2A]"
              >
                +91 8287567567
              </a>

              <p className="mt-3 text-gray-800">
                9:30 AM - 6:00 PM (IST), MON - SAT
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail
              size={28}
              className="text-black mt-1 flex-shrink-0"
            />

            <a
              href="mailto:care@faridagupta.com"
              className="text-lg  font-serif hover:text-[#7B1D2A]"
            >
              care@faridagupta.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;