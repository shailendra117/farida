
import { useEffect } from "react";
import { useState } from "react";





const NewsLetter = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    // Mobile
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);

      alert("Subscribed Successfully!");

      setFormData({
        fullName: "",
        mobile: "",
        email: "",
      });

      setErrors({});
    }
  };
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f5f5f5] min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-serif text-[#4a2d24] mb-12 mt-8 uppercase tracking-wide">
          FG Subscription, Never Miss An Update!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-[#4a2d24]">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full rounded-full px-6 py-4 border outline-none transition
              ${
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#7b1e2b]"
              }`}
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 text-[#4a2d24]">
              Mobile
            </label>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full rounded-full px-6 py-4 border outline-none transition
              ${
                errors.mobile
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#7b1e2b]"
              }`}
            />

            {errors.mobile && (
              <p className="text-red-500 text-sm mt-2">
                {errors.mobile}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-[#4a2d24]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-full px-6 py-4 border outline-none transition
              ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#7b1e2b]"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#7b1e2b] hover:bg-[#651723] text-white text-xl py-4 rounded-full transition duration-300"
          >
            Subscribe
          </button>

          {/* Terms */}
          <p className="text-center text-sm italic text-[#4a2d24]">
            By clicking subscribe, I agree to Farida Gupta's Terms of Use and
            Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;