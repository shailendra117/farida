import { useState } from "react";
import OTPLogin from "./OTPLogin";
import OTPVerification from "./OTPVarification";

export default function LoginModal({ open, onClose }) {
  const [step, setStep] = useState("login");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("phone");

  if (!open) return null;

  const handleClose = () => {
    setStep("login");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className="
    relative 
    bg-white 
    rounded-2xl 
    shadow-2xl 
    w-full 
    max-w-md 
    p-5 
    sm:p-6 
    md:p-8
    max-h-[90vh]
    overflow-y-auto
  "
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          ×
        </button>

        {step === "login" ? (
          <OTPLogin
            setStep={setStep}
            phone={phone}
            setPhone={setPhone}
            setType={setType}
          />
        ) : (
          <OTPVerification
            phone={phone}
            type={type}
            setStep={setStep}
            type={type}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
