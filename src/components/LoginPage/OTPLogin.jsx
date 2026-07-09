import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function OTPLogin({
  setStep,
  phone,
  setPhone,
  setType,
}) {
  const [loginType, setLoginType] = useState("phone");

  // const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validatePhone = (number) => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const validateEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length > 10) return;

    setPhone(value);

    if (value.length === 0) {
      setPhoneError("");
      return;
    }

    if (value.length < 10) {
      setPhoneError("Enter a valid 10-digit mobile number.");
      return;
    }

    if (!validatePhone(value)) {
      setPhoneError(
        "Mobile number should start with 6, 7, 8 or 9."
      );
      return;
    }

    setPhoneError("");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (value === "") {
      setEmailError("");
      return;
    }

    if (!validateEmail(value)) {
      setEmailError("Enter a valid email address.");
      return;
    }

    setEmailError("");
  };


const handleRequestOTP = () => {

  if (loginType === "phone") {
    if (!validatePhone(phone)) return;

    setType("phone");

  } else {
    if (!validateEmail(email)) return;

    setType("email");
  }

  setStep("otp");
};
    return (
    <div className="flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-semibold text-center">
          Login With OTP
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Login using your phone number or email
        </p>

        {/* Tabs */}

        <div className="mt-8 grid grid-cols-2 rounded-xl bg-gray-100 p-1">

          <button
            onClick={() => setLoginType("phone")}
            className={`flex items-center justify-center gap-2 rounded-lg py-3 font-medium transition
            ${
              loginType === "phone"
                ? "bg-[#7A1F2A] text-white"
                : "text-gray-600"
            }`}
          >
            <FaPhoneAlt />
            Phone
          </button>

          <button
            onClick={() => setLoginType("email")}
            className={`flex items-center justify-center gap-2 rounded-lg py-3 font-medium transition
            ${
              loginType === "email"
                ? "bg-[#7A1F2A] text-white"
                : "text-gray-600"
            }`}
          >
            <FaEnvelope />
            Email
          </button>

        </div>

        {/* Phone */}

        {loginType === "phone" ? (
          <>
            <div className="mt-6 flex overflow-hidden rounded-xl border">

              <div className="flex w-24 items-center justify-center border-r bg-gray-50">
                🇮🇳 +91
              </div>

              <input
                type="tel"
                inputMode="numeric"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-4 outline-none"
              />

            </div>

            {phoneError && (
              <p className="mt-2 text-sm text-red-500">
                {phoneError}
              </p>
            )}
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmailChange}
              className="mt-6 w-full rounded-xl border px-4 py-4 outline-none"
            />

            {emailError && (
              <p className="mt-2 text-sm text-red-500">
                {emailError}
              </p>
            )}
          </>
        )}

        <button
          onClick={handleRequestOTP}
          disabled={
            loginType === "phone"
              ? !validatePhone(phone)
              : !validateEmail(email)
          }
          className={`mt-6 w-full rounded-xl py-4 font-semibold text-white transition
          ${
            (loginType === "phone" && validatePhone(phone)) ||
            (loginType === "email" && validateEmail(email))
              ? "bg-[#7A1F2A] hover:bg-[#651a25]"
              : "cursor-not-allowed bg-gray-400"
          }`}
        >
          {loginType === "phone"
            ? "Request OTP"
            : "Send OTP"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          OTP will be sent to your{" "}
          {loginType === "phone"
            ? "mobile number"
            : "email address"}
        </p>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t"></div>

          <span className="mx-4 text-gray-400 text-sm">
            Or continue with
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] py-3 text-white hover:opacity-90">
            <FaFacebookF />
            Facebook
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border py-3 hover:bg-gray-50">
            <FaGoogle className="text-red-500" />
            Google
          </button>

        </div>

      </div>
    </div>
  );
}