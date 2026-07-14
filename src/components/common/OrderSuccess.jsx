import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {

    const [order, setOrder] = useState(null);
    const [tracking, setTracking] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("order"));
        setOrder(data);
    }, []);

        useEffect(() => {
            let timer;
            const poll = async () => {
                if (!order) return;
                if (!order.shipmentId && !order.shiprocketOrderId) return;

                try {
                    const params = new URLSearchParams();
                    if (order.shipmentId) params.append("shipmentId", order.shipmentId);
                    if (order.shiprocketOrderId) params.append("orderId", order.shiprocketOrderId);

                    const resp = await fetch(`http://localhost:5000/shiprocket/track?${params.toString()}`);
                    const data = await resp.json();
                    if (data.success) {
                        setTracking(data.data || data);
                        // stop polling if AWB present
                        const awb = data.data?.awb_code || data.data?.awb || data.data?.awb_number;
                        if (awb) return;
                    }
                } catch (err) {
                    // ignore and continue polling
                }

                timer = setTimeout(poll, 10000);
            };

            poll();

            return () => clearTimeout(timer);
        }, [order]);


    if (!order) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h2 className="text-xl font-semibold">
                    No Order Found
                </h2>
            </div>
        )
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">

                {/* Success Icon */}
                <div className="text-6xl mb-4">
                    ✅
                </div>


                <h1 className="text-3xl font-bold text-green-600">
                    Payment Successful!
                </h1>


                <p className="text-gray-500 mt-2">
                    Thank you for your order
                </p>


                {/* Order Details */}
                <div className="mt-6 text-left bg-gray-50 rounded-xl p-5">

                    <h2 className="font-bold text-lg mb-3">
                        Order Details
                    </h2>


                                                    <p className="text-sm">
                                                            Payment ID:
                                                    </p>

                                                    <p className="font-medium break-all">
                                                            {order.paymentId}
                                                    </p>

                                                    {order.shiprocketOrderId && (
                                                        <>
                                                            <p className="text-sm mt-3">Shiprocket Order ID:</p>
                                                            <p className="font-medium">{order.shiprocketOrderId}</p>

                                                            <p className="text-sm mt-2">Shipment ID:</p>
                                                            <p className="font-medium">{order.shipmentId}</p>
                                                        </>
                                                    )}


                    <p className="text-sm mt-3">
                        Total Amount:
                    </p>

                    <p className="font-bold text-xl">
                        ₹{order.amount}
                    </p>

                </div>


                {/* Shipping Error */}
                {order.shippingError && (
                  <div className="mt-5 text-left bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                    <p className="font-semibold">Shipping issue detected</p>
                    <p>{order.shippingError}</p>
                    <p className="mt-2 text-gray-600">Your order payment completed successfully; shipping will be retried by support.</p>
                  </div>
                )}

                {/* Items */}
                <div className="mt-5 text-left">

                    <h2 className="font-bold mb-3">
                        Purchased Items
                    </h2>

                    {Array.isArray(order.items) && order.items.length > 0 ? (
                      order.items.map((item) => (
                        <div
                          key={`${item.id}-${item.name}`}
                          className="flex items-center gap-3 mb-3 border-b pb-3"
                        >
                          {item.image && (
                            <img
                              src={item.image}
                              className="w-14 h-14 object-cover rounded"
                            />
                          )}

                          <div>
                            <h3 className="font-medium">
                              {item.name || item.title}
                            </h3>
                            <p>Qty {item.quantity || 1}</p>
                            <p>₹{item.price}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">Order items are not available.</p>
                    )}

                </div>


                <Link
                  to="/new-arrivals"
                  className="block mt-6 bg-[#7B1D2A] text-white py-3 rounded-lg hover:bg-gray-800"
                >
                    Continue Shopping
                </Link>
                <Link
                  to="/bag"
                  className="block mt-6 bg-[#7B1D2A] text-white py-3 rounded-lg hover:bg-gray-800"
                >
                    Back To Bag
                </Link>


            </div>

        </div>
    )
}

export default OrderSuccess;