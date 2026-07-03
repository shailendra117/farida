import PolicyTable from "../Policies/PolicyTable";
import { onlinePolicy } from "../../data/onlinePolicy";
import { exhibitionPolicy } from "../../data/exhibitionPolicy";
import { useEffect } from "react";
const RefundPolicy = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="max-w-7xl mx-auto px-5 py-10 mt-20">

      {/* Breadcrumb */}
     
        <p className="text-xs text-gray-500 mb-2"><a href="/">Home/ </a><span>Refund Policy</span></p>

      {/* Heading */}
      <h1 className="text-xl font-semibold mb-2 text-gray-800">
        Returns / Exchange / Cancellation / Shipping Costs Policy
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-8 mb-8">
        The table below describes the return/exchange/cancellation policy,
        subject to the Terms & Conditions.
      </p>

      {/* ONLINE TABLE */}
      <PolicyTable
        heading="FOR ONLINE ORDERS"
        data={onlinePolicy}
      />

      {/* Space */}
      <div className="h-14"></div>

      {/* EXHIBITION TABLE */}
      <PolicyTable
        heading="FOR EXHIBITIONS"
        data={exhibitionPolicy}
      />

    </section>
  );
};

export default RefundPolicy;