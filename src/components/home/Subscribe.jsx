import { useState } from "react";

export default function SubscribeForm() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.replace(/[^0-9]/g, ""));
  };

  const subscribe = () => {
    console.log("You Subscribed :" , phone);
    // yahan apna API call ya backend logic daalna
  };

  return (
    <div className="max-w-lg w-full p-6 md:items-center">
      <div className="flex gap-1 w-full">
        <div className="w-32">
          <button className="flex items-center gap-2 h-12 border border-gray-300 rounded-md px-3 py-2 bg-white hover:border-gray-400 transition w-full sm:w-auto">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="flag"
              className="w-3 h-2 object-cover rounded-sm"
            />
            <span className="text-xs text-gray-600">+91</span>
            <span className="text-xs text-gray-400">▼</span>
          </button>
        </div>

        <input
          id="phone"
          type="tel"
          maxLength={10}
          inputMode="numeric"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter phone number"
          className="flex-1 h-12 border border-gray-300 rounded-md px-4"
        />
      </div>

      <button
        onClick={subscribe}
        className="mt-4 w-full h-12 bg-[#7B1D2A] text-white rounded-md tracking-[0.2em]"
      >
        SUBSCRIBE
      </button>
    </div>
  );
}
