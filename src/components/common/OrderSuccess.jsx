import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="max-w-4xl mx-auto mt-35 px-5 py-20">
      <div className="rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-8 flex h-15 w-15 items-center justify-center rounded-full text-[#eef2f4] text-2xl font-bold bg-[#0af00d]">
          ✓
        </div>
        <h1 className="text-3xl font-semibold text-[#3c2a21] mb-4">Order placed successfully!</h1>
        <p className="mx-auto max-w-xl text-sm leading-7 text-gray-600">
          Thank you for your purchase. Your order is being processed and you will receive a confirmation email shortly. You can continue shopping or review your bag details.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#7B1D2A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5b151f] transition sm:w-auto"
          >
            Continue Shopping
          </Link>
          <Link
            to="/bag"
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#3c2a21] hover:bg-gray-50 transition sm:w-auto"
          >
            View Bag
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
