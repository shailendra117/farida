import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OrderSuccess({ onClose }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("order"));

    setOrder(data);
  }, []);

  if (!order) return null;

  return (
    <div
      className="
            bg-white
            w-full
            max-w-md
            rounded-3xl
            shadow-2xl
            overflow-hidden
            animate-[scale-in_0.3s_ease]
            "
    >
      {/* Top Section */}

      <div
        className="
                bg-[#7B1D2A]
                text-white
                p-8
                text-center
                "
      >
        <div
          className="
                    mx-auto
                    w-20
                    h-20
                    rounded-full
                    bg-green-600
                    flex
                    items-center
                    justify-center
                    text-5xl
                    mb-4
                    "
        >
          ✓
        </div>

        <h1
          className="
                    text-2xl
                    font-bold
                    "
        >
          Order Confirmed
        </h1>

        <p
          className="
                    text-sm
                    opacity-90
                    mt-2
                    "
        >
          Thank you for shopping with us ❤️
        </p>
      </div>

      {/* Content */}

      <div className="p-6">
        <div
          className="
                    bg-gray-50
                    rounded-xl
                    p-4
                    flex
                    justify-between
                    "
        >
          <div>
            <p className="text-xs text-gray-500">Order Date</p>

            <p className="font-medium">{order.date}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Total</p>

            <p
              className="
                            text-xl
                            font-bold
                            text-[#7B1D2A]
                            "
            >
              ₹{order.amount}
            </p>
          </div>
        </div>

        <h2
          className="
                    font-semibold
                    mt-6
                    mb-3
                    "
        >
          Your Items
        </h2>

        <div
          className="
                    max-h-48
                    overflow-y-auto
                    space-y-3
                    "
        >
          {order.items.map((item) => (
            <div
              key={`${item.id}-${item.name}`}
              className="
                    flex
                    items-center
                    gap-3
                    border
                    rounded-xl
                    p-3
                    "
            >
              {item.image && (
                <img
                  src={item.image}
                  className="
                    w-14
                    h-14
                    rounded-lg
                    object-cover
                    "
                />
              )}

              <div className="flex-1">
                <h3
                  className="
                    font-medium
                    text-sm
                    "
                >
                  {item.name || item.title}
                </h3>

                <p className="text-xs text-gray-500">
                  Qty {item.quantity || 1}
                </p>
              </div>

              <p
                className="
                    font-semibold
                    "
              >
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/new-arrivals"
          className="
                block
                mt-6
                text-center
                bg-[#7B1D2A]
                text-white
                py-3
                rounded-xl
                font-medium
                hover:bg-[#5b151f]
                transition
                "
        >
          Continue Shopping
        </Link>

        <button
          onClick={onClose}
          className="
                w-full
                mt-3
                py-3
                rounded-xl
                border
                text-gray-600
                hover:bg-gray-100
                "
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
