const navItems = [
  {
    label: "Search",
    active: false,
    icon: (
      <>
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </>
    ),
  },
  {
    label: "Sale",
    active: true,
    icon: (
      <>
        <line x1="19" y1="5" x2="5" y2="19"></line>
        <circle cx="6.5" cy="6.5" r="2"></circle>
        <circle cx="17.5" cy="17.5" r="2"></circle>
      </>
    ),
  },
  {
    label: "New Arrivals",
    active: false,
    icon: <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"></polygon>,
  },
  {
    label: "Exhibitions",
    active: false,
    icon: (
      <>
        <path d="M3 9h18v11H3z"></path>
        <path d="M7 9V5h10v4"></path>
      </>
    ),
  },
  {
    label: "Bag",
    active: false,
    icon: (
      <>
        <path d="M6 7h12l-1 13H7L6 7z"></path>
        <path d="M9 7V5a3 3 0 016 0v2"></path>
      </>
    ),
  },
];

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg sm:hidden">
      <div className="grid grid-cols-5 h-12">
        {navItems.map((item) => (
          <a
            href="#"
            key={item.label}
            className={`flex flex-col items-center justify-center ${
              item.active ? "text-[#7B1D2A]" : "text-gray-600 hover:text-[#7B1D2A]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {item.icon}
            </svg>
            <span className="text-[11px]">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
