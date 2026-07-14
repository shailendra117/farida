import { useEffect } from "react";
const ShippingPolicy = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="max-w-7xl mx-auto mt-8 px-5 py-10">

      {/* Breadcrumb */}
      
        <p className="text-xs text-gray-500 mb-4"><a href="/">Home/ </a><span>Shipping & Delivery Policy</span></p>

      <h1 className="text-lg font-semibold text-gray-800 mb-2 ">
        Shipping & Delivery Policy
      </h1>

      <p className="mb-2 text-xs leading-6 text-gray-700">
        The terms of Delivery Policy must be understood. If you do not agree to
        the terms contained in this Delivery Policy, you are advised not to
        accept the Terms of Use and the Delivery Policy. The terms contained in
        this Delivery Policy shall be accepted without modification and
        accordingly, to be bound by the terms contained herein.
      </p>

      <p className="mb-8 text-xs leading-6 text-gray-700">
        Team FG is committed to deliver all orders with good quality packaging
        within a span of 5 working days (excluding Sundays & Public holidays)
        under normal circumstances. Farida Gupta Retail Pvt. Ltd. ("FG") makes
        all commercially reasonable endeavors to ensure that the Product(s) are
        delivered to end users in a timely fashion. To ensure that the order
        reaches in a good condition, in the shortest span of time, we ship
        through reputed logistics companies.
      </p>

      {/* Delivery Charge */}

      <h2 className="text-lg text-gray-800 font-semibold mb-4">
        Delivery Charge
      </h2>

      <p className="mb-2 leading-6 text-xs text-gray-700">
        The shipping fee charged on the order is non-refundable. Refunds will be
        processed only for the product value, excluding any shipping charges
        paid at the time of purchase.
      </p>

      <p className="mb-2 leading-6 text-xs text-gray-700">
        The prices are all inclusive of taxes. FG partners with third party
        logistic service providers separate and distinct from FG, to effectuate
        Product(s) delivery to end users. Details of the Logistic Partner who
        will be processing the delivery of the order will be provided to the end
        user through Email & SMS along with the tracking number. The user will
        also be provided with an approximate date of delivery of the purchased
        Product(s) on the order confirmation page. The approximate date of
        delivery is merely an approximation based on the reputation of the third
        party Logistic Partner. FG shall not be liable for delay in delivery by
        third party Logistic Partners. FG may, in its sole discretion,
        effectuate delivery to customers on their own without engaging logistic
        partners.
      </p>

      <p className="mb-8 leading-6 text-xs text-gray-700">
        Prior to making payments for the purchase of Product(s), the user will
        be prompted to provide a shipping address. While entering shipping
        address details, the user should ensure to provide correct, complete and
        accurate information along with landmarks if any to aid delivery. FG
        shall not, under any circumstance, be liable for any failure in delivery
        of the purchased Product(s) arising out of the user's failure to provide
        correct, complete and/or accurate information.
      </p>

      {/* COD */}

      <h2 className="text-lg text-gray-800 font-semibold mb-4">
        COD / Prepaid
      </h2>

      <p className="mb-8 leading-6 text-xs text-gray-700">
        While FG aims to provide its services through online orders and ensure
        the delivery of its Product(s) all across India, currently, FG has a
        select list of areas where delivery can be undertaken. At the time of
        placing an order for purchase of Product(s), customers are required to
        enter their pin-code details to verify if deliveries can be carried out
        in their area. If the area where the user wishes that the purchased
        Product(s) be delivered is not within delivery network recognized by the
        Logistics Partner(s) of FG, FG will not be able to process the order
        further.
      </p>

      {/* Delivery Timeline */}

      <h2 className="text-lg text-gray-800 font-semibold mb-4">
        Order Delivery Timelines
      </h2>

      <p className="mb-2 leading-6 text-xs text-gray-700">
        Usually, orders are dispatched within 5 days of the customer placing the
        order. However, in line with Govt. Guidelines for your state, delays
        might be experienced under certain circumstances. Upon successful order
        placement, the end user will receive a tracking ID through Email & SMS.
        Users can also track orders in the "My Orders" section.
      </p>

      <p className="mb-2 leading-6 text-xs text-gray-700">
        Ordinarily, most orders are delivered within 5 working days across
        India. A maximum of 3 delivery attempts will be made. If the user
        remains unavailable after 3 attempts, FG reserves the right to cancel
        the order.
      </p>

      <p className="font-medium text-gray-800 mb-2">
        Delivery may be delayed due to:
      </p>

      <ul className="list-disc pl-8 mb-4 space-y-2 leading-6 text-xs text-gray-700">
        <li>Unsuitable weather conditions.</li>
        <li>Political disruptions, strikes, employee lockouts, Govt. directed lockdowns.</li>
        <li>Acts of God such as floods, earthquakes, etc.</li>
        <li>Other unforeseen circumstances.</li>
      </ul>

      <p  className="mb-8 leading-6 text-xs text-gray-700">
        In such events of delay, FG shall make reasonable attempts to notify the
        customer through the registered email address or mobile number. FG shall
        not be liable for any compensation arising from shipment delays.
      </p>

      <p className="mb-2 leading-6 text-xs text-gray-700">
            Return and exchange of purchased Product(s) shall be carried out by FG reverse-logistics partners, which are separate and distinct from FG. Please note that FG shall not be liable for any act(s) and/or omission(s) of such reverse logistics partners. Further details on how end users may process returns and exchanges of purchased Products have been set out under the Return and Refund Policy which may be accessed her.
      </p>
      <a href="/refund-policy" className="mb-12 leading-6 text-xs text-[#6B1722]">https://www.faridagupta.com/pages/return-page</a>

      {/* Returns */}

      <h2 className="text-lg text-gray-800 font-semibold mb-2">
        Returns & Exchanges
      </h2>

      <p  className="mb-2 leading-6 text-xs text-gray-700">
        Return and exchange of purchased Product(s) shall be carried out by FG
        reverse-logistics partners. Please note that FG shall not be liable for
        any act(s) and/or omission(s) of such partners.
      </p>

      <a
        href="https://www.faridagupta.com/pages/return-page"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-8 "
      >
        Return & Refund Policy
      </a>

      {/* Damaged Product */}

      <h2 className="text-lg text-gray-800 font-semibold mb-4">
        What if I have received the product in damaged condition?
      </h2>

      <p className="mb-2 leading-6 text-xs text-gray-700">
        If you have received the Product in a bad condition or if the packaging
        is tampered with or damaged before delivery, please refuse to accept the
        package and return it to the delivery person.
      </p>

      <p className="mb-8 leading-6 text-xs text-gray-700">
        Please notify us immediately on our consumer experience helpline at
        <strong> +91 8287-567-567 </strong>
        or email us at
        <strong> care@faridagupta.com </strong>
        mentioning your Order ID. After validation, FG will ensure that a new
        order is placed and delivered at no additional cost.
      </p>

    </section>
  );
};

export default ShippingPolicy;