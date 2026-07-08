import { useEffect } from "react";
import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import FilterSidebar from "../Collection1/FilterSidebar";
import ProductGrid from "../Collection1/ProductGrid";
import SearchBar from "../Collection1/SearchBar";
import products from "../../data/basicsData";

const Basics = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filters, setFilters] = useState({
    craft: [],
    color: [],
    size: [],
    price: [],
  });

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const handleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const searchMatch =
        searchTerm.trim() === "" ||
        `${product.name} ${product.craft} ${product.color} ${product.category}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const craftMatch =
        filters.craft.length === 0 ||
        filters.craft.includes(product.craft);

      const colorMatch =
        filters.color.length === 0 ||
        filters.color.includes(product.color);

      const sizeMatch =
        filters.size.length === 0 ||
        product.sizes.some((size) => filters.size.includes(size));

      const priceMatch =
        filters.price.length === 0 ||
        filters.price.some((range) => {
          if (range === "Under2000") return product.price < 2000;

          if (range === "2000-3000")
            return product.price >= 2000 && product.price <= 3000;

          if (range === "Above3000") return product.price > 3000;

          return false;
        });

      return searchMatch && craftMatch && colorMatch && sizeMatch && priceMatch;
    });

    const sorted = [...filtered];

    if (sortBy === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [filters, searchTerm, sortBy]);

  return (
    <>
      <section className="max-w-8xl mx-auto px-4 sm:px-5 py-10 mt-24 lg:mt-28">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3c2a21]">
              Discover FG Basics
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {filteredProducts.length} products available
            </p>
          </div>

          <button
            onClick={() => setShowMobileFilter(true)}
            className="block lg:hidden w-full max-w-md mx-auto flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:border-[#7b1e2b] hover:text-[#7b1e2b] transition"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              filters={filters}
              handleFilter={handleFilter}
            />
          </div>

          {/* Products */}
          <div className="col-span-12 lg:col-span-9">
            <ProductGrid products={filteredProducts} collection={products}/>
          </div>

        </div>

      </section>

      {/* Mobile Filter Drawer */}
      {showMobileFilter && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setShowMobileFilter(false)}
            className="fixed inset-0 bg-black/50 z-40"
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-screen w-full max-w-[90vw] sm:max-w-[420px] bg-white z-50 shadow-xl overflow-y-auto">

            <div className="flex justify-between items-center p-5 border-b">

              <h2 className="text-xl font-semibold">
                Filters
              </h2>

              <button
                onClick={() => setShowMobileFilter(false)}
              >
                <X size={28} />
              </button>

            </div>

            <div className="p-5">

              <FilterSidebar
                filters={filters}
                handleFilter={handleFilter}
              />

            </div>

          </div>
        </>
      )}
    </>
  );
};

export default Basics;