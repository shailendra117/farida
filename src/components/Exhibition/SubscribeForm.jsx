import { useEffect, useRef, useState } from "react";

const SubscribeForm = ({ selectedCity }) => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const nameRef = useRef(null);

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
      setTimeout(() => nameRef.current?.focus(), 250);
    }
  }, [selectedCity]);

  const validate = () => {
    const nextErrors = {};

    if (!name.trim()) nextErrors.name = "Please enter your full name.";

    const mobileDigits = mobile.replace(/\D/g, "");
    if (!mobileDigits) nextErrors.mobile = "Please enter your mobile number.";
    else if (!/^\d{10}$/.test(mobileDigits)) nextErrors.mobile = "Mobile number must be 10 digits.";

    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email address.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: wire up submission (API call or analytics)
    console.log("Subscribe payload", { name, mobile, email, city });

    // reset form
    setErrors({});
    setName("");
    setMobile("");
    setEmail("");
    setCity(selectedCity || "");
  };

  return (
    <div className="bg-white p-8 shadow-sm rounded-md sticky top-8">
      <h2 className="text-center text-sm text-gray-700 font-semibold uppercase mb-8">
        Subscribe to Exhibition Updates for Other Cities
      </h2>

      <form className="space-y-3" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block text-xs mb-2 text-gray-500">Full Name</label>
          <input
            ref={nameRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className={`w-full h-10 text-xs rounded-full px-5 outline-none focus:border-[#7d1d28] ${errors.name ? "border-red-500" : "border border-gray-300"}`}
          />
          {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs mb-2 text-gray-500">Mobile</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Number"
            className={`w-full h-10 text-xs rounded-full px-5 outline-none focus:border-[#7d1d28] ${errors.mobile ? "border-red-500" : "border border-gray-300"}`}
          />
          {errors.mobile && <p className="text-[11px] text-red-600 mt-1">{errors.mobile}</p>}
        </div>

        <div>
          <label className="block text-xs mb-2 text-gray-500">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`w-full h-10 text-xs rounded-full px-5 outline-none focus:border-[#7d1d28] ${errors.email ? "border-red-500" : "border border-gray-300"}`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs mb-2 text-gray-500">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full text-xs h-10 border border-gray-300 rounded-full px-5 outline-none bg-white text-gray-500"
          >
            <option value="">Search cities...</option>
            <option>Dehradun</option>
            <option>Delhi</option>
            <option>Gurugram</option>
            <option>Jaipur</option>
            <option>Ludhiana</option>
            <option>Jalandhar</option>
            <option>Chandigarh</option>
            <option>Ghaziabad</option>
            <option>Noida</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#7d1d28] hover:bg-[#6b1722] text-white rounded-full text-sm transition cursor-pointer"
        >
          Subscribe
        </button>
        

        <p className="text-xs text-center text-gray-500 italic leading-5">
          By clicking subscribe, I agree to Farida Gupta's Terms of Use and
          Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default SubscribeForm;
