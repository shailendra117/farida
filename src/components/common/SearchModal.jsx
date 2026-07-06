import { useEffect, useState } from "react";

export default function SearchModal({ onClose, onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") onSearch(query);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onSearch, query]);

  useEffect(() => {
    const open = () => {};
    window.addEventListener("openSearch", open);
    return () => window.removeEventListener("openSearch", open);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl p-4">
        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="flex items-center gap-3">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
              placeholder="Search products..."
              className="w-full h-12 px-4 rounded-full border border-gray-200"
            />
            <button onClick={() => onSearch(query)} className="rounded-full bg-[#7B1D2A] text-white px-4 py-2">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
