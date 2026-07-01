import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import FilterSidebar from "../Collection1/FilterSidebar";
import ProductGrid from "../Collection1/ProductGrid";
import products from "../../data/products";

const Collection = () => {
  const [filters, setFilters] = useState({
    craft: [],
    color: [],
    size: [],
    price: [],
  });

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Craft
      const craftMatch =
        filters.craft.length === 0 ||
        filters.craft.includes(product.craft);

      // Color
      const colorMatch =
        filters.color.length === 0 ||
        filters.color.includes(product.color);

      // Size
      const sizeMatch =
        filters.size.length === 0 ||
        product.sizes.some((size) => filters.size.includes(size));

      // Price
      const priceMatch =
        filters.price.length === 0 ||
        filters.price.some((range) => {
          if (range === "Under2000") return product.price < 2000;

          if (range === "2000-3000")
            return product.price >= 2000 && product.price <= 3000;

          if (range === "Above3000") return product.price > 3000;

          return false;
        });

      return (
        craftMatch &&
        colorMatch &&
        sizeMatch &&
        priceMatch
      );
    });
  }, [filters]);

  return (
    <>
      <section className="max-w-8xl mx-auto px-5 py-10 mt-20">

        {/* Heading */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="hidden lg:bloack text-xl  font-semibold">
              Discover New Arrivals
            </h2>

            <p className="text-gray-500 mt-1">
              {filteredProducts.length} Products
            </p>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowMobileFilter(true)}
            className="lg:hidden flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

        </div>

        <div className="grid grid-cols-12 gap-10">

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              filters={filters}
              handleFilter={handleFilter}
            />
          </div>

          {/* Products */}
          <div className="col-span-12 lg:col-span-9">
            <ProductGrid products={filteredProducts} />
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
          <div className="fixed top-0 left-0 h-screen w-80 bg-white z-50 shadow-xl overflow-y-auto">

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

export default Collection;