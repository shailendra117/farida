import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-12 rounded-full border border-gray-300 bg-white pl-12 pr-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7b1e2b] focus:border-[#7b1e2b] transition lg:h-14 lg:pl-16"
      />
    </div>
  );
};

export default SearchBar;