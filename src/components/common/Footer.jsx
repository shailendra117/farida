import { Link } from "react-router-dom";
import FooterAccordionItem from "./FooterAccordionItem";
import { helpLinks } from "../../data/FooterHelpData";
const discoverLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Newsletter", to: "/news-letter" },
  { label: "Exhibitions", to: "/exhibitions" },
  { label: "Blog", to: "/blog" },
  { label: "Media", to: "/media" },
];

const footerColumns = [
  {
    title: "Discover Farida Gupta",
    links: discoverLinks,
  },
  
  {
    title: "Follow Us",
    links: ["Facebook", "Instagram", "Pinterest", "X", "Youtube"].map((label) => ({
      label,
      to: "#",
    })),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 my-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Mobile Accordion */}
        <div className="block lg:hidden">
          {footerColumns.map((col) => (
            <FooterAccordionItem title={col.title} key={col.title}>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to === "#" ? (
                      <a href="#">{link.label}</a>
                    ) : (
                      <Link to={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </FooterAccordionItem>
          ))}

          <FooterAccordionItem title="Get In Touch">
            <div className="text-sm">
              <p>Phone: +91 8287-567-567</p>
              <p>Email: care@faridagupta.com</p>
              <p>Mon-Sat : 9:30 AM - 6 PM</p>
            </div>
          </FooterAccordionItem>
        </div>

        {/* Desktop Footer */}
        <div className="hidden lg:grid grid-cols-4 ">
          {/* Column 1 */}
          <div>
            <h4 className=" sm:text-sm  text-[#6b2931] font-bold tracking-[0.1em] uppercase mb-6">
              Discover Farida Gupta
            </h4>
            <ul >
              {discoverLinks.map((link) => (
                <li key={link.label}>
                  {link.to === "#" ? (
                    <a href="#" className="  hover:text-[#7B1D2A]">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="sm:text-md text-gray-700 hover:text-[#7B1D2A]">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
         <div>
  <h4 className="sm:text-sm font-bold tracking-[0.1em] uppercase text-[#6b2931] mb-6">
    Let Us Help You
  </h4>

  <ul className="space-y-2">
    {helpLinks.map((link) => (
      <li key={link.to}>
        <Link
          to={link.to}
          className="sm:text-md text-gray-700 hover:text-[#7B1D2A] transition-colors"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Column 3 */}
          <div>
            <h4 className=" sm:text-sm font-bold tracking-[0.1em] uppercase text-[#6b2931] mb-6">
              Follow Us
            </h4>
            <ul className="space-y-2 sm:text-md text-gray-700">
              <li>
                <a href="#" className="flex items-center gap-3   hover:text-[#7B1D2A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3  hover:text-[#7B1D2A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3  hover:text-[#7B1D2A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" fill="white" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3  hover:text-[#7B1D2A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.2 2h3.3l-7.2 8.3 8.5 11.2h-6.7L11 15 5 22H1.7l7.7-8.8L1.3 2h6.8l4.7 6.2z" />
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3  hover:text-[#7B1D2A]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4S5.1 4 3.5 4.4a2.8 2.8 0 0 0-2 2A28 28 0 0 0 1 12a28 28 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A28 28 0 0 0 23 12a28 28 0 0 0-.5-5.6z" />
                    <polygon points="9.5,15 16,12 9.5,9" fill="white" />
                  </svg>
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className=" sm:text-sm font-bold tracking-[0.1em] uppercase text-[#6b2931] mb-6">
              Get In Touch
            </h4>
            <div className="space-y-6 text-sm sm:text-base break-words">
              <div className="space-y-1">
                <p className=" text-sm font-semibold mb-2">For Product Queries:</p>
                <p className="text-sm text-gray-700">
                  Phone: <a href="tel:+918287567567" className="hover:underline">+91 8287-567-567</a>
                </p>
                <p className="text-sm text-gray-700">
                  Email: <a href="mailto:care@faridagupta.com" className="hover:underline">care@faridagupta.com</a>
                </p>
                <p className="text-sm text-gray-700">Timing: 9:30 AM – 6:00 PM (IST)</p>
                <p className="text-sm text-gray-700">Monday – Saturday</p>
              </div>
              <div>
                <p className="  text-sm font-semibold mb-2">For Careers & HR Related Queries:</p>
                <p className="text-sm text-gray-700">
                  Email: <a href="mailto:people@faridagupta.com" className="hover:underline">people@faridagupta.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm sm:text-sm text-gray-700 tracking-wide py-4  shadow-lg">
        &copy; 2026 FARIDA GUPTA INDIA
      </p>
    </footer>
  );
}
