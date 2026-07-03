import { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-25 mt-20">
        {/* Left Side */}
        <div>
          <h2 className="text-lg text-center text-[#7B1D2A] font-serif mb-10 uppercase">
            Send Us A Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#7B1D2A]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#7B1D2A]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#7B1D2A]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-3xl px-4 py-2 outline-none resize-none focus:border-[#7B1D2A]"
            />

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