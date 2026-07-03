import { useState } from "react";

export default function FooterAccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="footer-btn flex justify-between text-gray-800 items-center w-full py-4 font-semibold uppercase tracking-wider"
      >
        <span>{title}</span>
        <span className="arrow">{open ? "\u2212" : "+"}</span>
      </button>

      <div className={`footer-content ${open ? "" : "hidden"} pb-4`}>
        {children}
      </div>
    </div>
  );
}
