import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const crafts = ["Akola", "Bagru", "Sanganeri", "Dabu"];

const colors = [
  "Blue",
  "Gray",
  "White",
  "Yellow",
  "Green",
  "Red",
  "Black",
  "Orange",
  "Sky Blue",
  "Pink"

];

const sizes = ["XS", "S", "M", "L", "XL"];

const prices = [
  { label: "Under ₹2000", value: "Under2000" },
  { label: "₹2000 - ₹3000", value: "2000-3000" },
  { label: "Above ₹3000", value: "Above3000" },
];

const FilterSidebar = ({ filters, handleFilter }) => {
  const [open, setOpen] = useState({
    craft: false,
    color: false,
    size: false,
    price: false,
  });

  const toggle = (key) => {
    setOpen({
      ...open,
      [key]: !open[key],
    });
  };

  return (
    <aside className="sticky top-30 pl-5 ">

      <h2 className="text-2xl  text-gray-600 mb-8 :hidden">
        Filters
      </h2>

      {/* Craft */}

      <div className="border-b border-gray-300  py-5 text-sm">

        <button
          onClick={() => toggle("craft")}
          className="flex justify-between w-full "
        >
          Craft

          {open.craft ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.craft && (
          <div className="space-y-3 mt-4 ">

            {crafts.map((item) => (
              <label
                key={item}
                className="flex gap-3"
              >
                <input
                  type="checkbox"
                  checked={filters.craft.includes(item)}
                  onChange={() =>
                    handleFilter("craft", item)
                  }
                />

                {item}
              </label>
            ))}

          </div>
        )}

      </div>

      {/* Color */}

      <div className="border-b border-gray-300 py-5 text-sm">

        <button
          onClick={() => toggle("color")}
          className="flex justify-between w-full"
        >
          Color

          {open.color ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.color && (
          <div className="space-y-3 mt-4">

            {colors.map((item) => (
              <label key={item} className="flex gap-3">

                <input
                  type="checkbox"
                  checked={filters.color.includes(item)}
                  onChange={() =>
                    handleFilter("color", item)
                  }
                />

                {item}

              </label>
            ))}

          </div>
        )}

      </div>

      {/* Size */}

      <div className="border-b border-gray-300 py-5 text-sm">

        <button
          onClick={() => toggle("size")}
          className="flex justify-between w-full"
        >
          Size

          {open.size ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.size && (
          <div className="space-y-3 mt-4">

            {sizes.map((item) => (
              <label key={item} className="flex gap-3">

                <input
                  type="checkbox"
                  checked={filters.size.includes(item)}
                  onChange={() =>
                    handleFilter("size", item)
                  }
                />

                {item}

              </label>
            ))}

          </div>
        )}

      </div>

      {/* Price */}

      <div className="border-b border-gray-300 py-5 text-sm">

        <button
          onClick={() => toggle("price")}
          className="flex justify-between w-full"
        >
          Price

          {open.price ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.price && (
          <div className="space-y-3 mt-4">

            {prices.map((item) => (
              <label
                key={item.value}
                className="flex gap-3"
              >
                <input
                  type="checkbox"
                  checked={filters.price.includes(item.value)}
                  onChange={() =>
                    handleFilter("price", item.value)
                  }
                />

                {item.label}

              </label>
            ))}

          </div>
        )}

      </div>

      {/* Category */}
       <div className="border-b border-gray-300 py-5 text-sm">
        <button
          
          className="flex justify-between w-full"
        >
          Category
           {open.price ? <ChevronUp /> : <ChevronDown />}
          </button>
         
       </div>

      {/* Availability */}
       <div className="border-b border-gray-300 py-5 text-sm">
        <button
          
          className="flex justify-between w-full"
        >
          Availability
           {open.price ? <ChevronUp /> : <ChevronDown />}
          </button>
       </div>

      {/* Print */}
       <div className="border-b border-gray-300 py-5 text-sm">
        <button
          
          className="flex justify-between w-full"
        >
          Print
           {open.price ? <ChevronUp /> : <ChevronDown />}
          </button>
       </div>

      {/* Wear type */}
       <div className="border-b border-gray-300 py-5 text-sm">
        <button
          
          className="flex justify-between w-full"
        >
          Wear Type
           {open.price ? <ChevronUp /> : <ChevronDown />}
          </button>
       </div>

    </aside>
  );
};

export default FilterSidebar;