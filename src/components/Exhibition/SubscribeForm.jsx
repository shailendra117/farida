import { useEffect, useRef, useState } from "react";

const SubscribeForm = ({ selectedCity }) => {
  const [city, setCity] = useState("");

  const nameRef = useRef(null);

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);

      // Name input par cursor le aao
      setTimeout(() => {
        nameRef.current?.focus();
      }, 500);
    }
  }, [selectedCity]);


  return (
    <div className="bg-white p-8 shadow-sm  rounded-md sticky top-8">
      {/* Heading */}
      <h2 className="text-center text-sm text-gray-700 font-semibold uppercase mb-8">
        Subscribe to Exhibition Updates for Other Cities
      </h2>

      <form className="space-y-3">
        {/* Full Name */}
        <div>
          <label className="block text-xs mb-2 text-gray-500">Full Name</label>

          <input
         ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="w-full h-10 text-xs border border-gray-300 rounded-full px-5 outline-none focus:border-[#7d1d28]"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-xs mb-2 text-gray-500">Mobile</label>

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full h-10  text-xs border border-gray-300 rounded-full px-5 outline-none focus:border-[#7d1d28]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs mb-2 text-gray-500">Email address</label>

          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 text-xs border border-gray-300 rounded-full px-5 outline-none focus:border-[#7d1d28]"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-xs mb-2 text-gray-500">City</label>

          <select value={city}
        onChange={(e) => setCity(e.target.value)}
            className="w-full text-xs h-10  border border-gray-300 rounded-full px-5 outline-none bg-white text-gray-500"
          >
            <option value="">Search cities...</option>
            <option>Ahmedabad</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Jaipur</option>
            <option>Bengaluru</option>
            <option>Hyderabad</option>
            <option>Chandigarh</option>
            <option>Pune</option>
          </select>
        </div>

        {/* Button */}
        <button
          className="w-full h-8 bg-[#7d1d28] hover:bg-[#6b1722] text-white rounded-full text-xs font-medium transition"
        >
          Subscribe
        </button>

        {/* Footer Text */}
        <p className="text-xs text-center text-gray-500 italic leading-5">
          By clicking subscribe, I agree to Farida Gupta's Terms of Use and
          Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default SubscribeForm;

