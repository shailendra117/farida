import { useEffect, useRef, useState } from "react";
// import toast from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function OTPVerification({
  type,
  phone,
  setStep,
  onClose
})  {
    const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);


  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) return;

    const newOTP = [...otp];
    newOTP[index] = value[0];

    setOtp(newOTP);

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "Backspace") {
      const newOTP = [...otp];
      newOTP[index] = "";
      setOtp(newOTP);
    }
  };

const handleVerify = () => {
  const code = otp.join("");

  if (code.length !== 6) {
    toast.error("Please enter complete OTP");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ phone }));

  toast.success("Login Successful");

  setTimeout(() => {
    onClose();
    navigate("/", { replace: true });
  }, 1000);
};

  const handleResend = () => {
    setTimer(30);

    console.log("Resend OTP");
  };

    return (
    <div className="flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">

        <button
  onClick={onClose} 
  className="mb-6 text-sm font-medium text-[#7A1F2A]"
>
  ← Back
</button>

        <h1 className="text-3xl font-semibold text-center">
          Verify OTP
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Enter the 6-digit OTP sent to 
        </p>

        <p className="mt-1 text-center font-semibold">
  {type === "phone" ? `+91 ${phone}` : phone}
</p>
       

        {/* OTP Inputs */}

        <div className="mt-8 flex justify-center gap-3">

          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="h-9 w-9 rounded-xl border text-center text-xl  outline-none focus:border-[#7A1F2A]"
            />
          ))}

        </div>

        {/* Verify */}

        <button
          onClick={handleVerify}
          className="mt-8 w-full rounded-xl bg-[#7A1F2A] py-4 font-semibold text-white hover:bg-[#651a25]"
        >
          Verify OTP
        </button>

        {/* Resend */}

        <div className="mt-6 text-center">

          {timer > 0 ? (
            <p className="text-gray-500">
              Resend OTP in
              <span className="ml-1 font-semibold">
                {timer}s
              </span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="font-semibold text-[#7A1F2A] hover:underline"
            >
              Resend OTP
            </button>
          )}

        </div>

      </div>
    </div>
  );
}