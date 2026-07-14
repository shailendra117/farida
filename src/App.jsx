import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/home/ScrollToTop";
import Home from "./components/pages/Home";
import NewArrival from "./components/pages/NewArrival";
import FgWoman from "./components/pages/FgWoman";
import FgBestSeller from "./components/pages/FgBestSeller";
import FgBasics from "./components/pages/FgBasics";
import Sale from "./components/pages/Sale";
import FGSurplus from "./components/pages/FGSurplus";
import Exhibitions from "./components/pages/Exhibitions";
import BagPage from "./components/common/BagPage";
import CheckoutPage from "./components/common/CheckoutPage";
import OrderSuccess from "./components/common/OrderSuccess";

import AboutUs from "./components/pages/AboutUs";
import NewsLetter2 from "./components/pages/Newsletter2";
import Blog from "./components/blog/Blog";
import Media from "./components/media/Media";

import Shipping from "./components/pages/Shipping";
import Refund from "./components/pages/Refund";
import Terms from "./components/pages/Terms";
import EOSS from "./components/pages/EOSS";
import Privacy from "./components/pages/Privacy";
import Cookies from "./components/pages/Cookies";
import FAQ from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";
import NotFound from "./components/common/NotFound";
import ProductDetails from "./components/Collection1/Productdetails";
import Wishlist from "./components/pages/Wishlist";



function App() {
  return (
    <>
    <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news-letter" element={<NewsLetter2 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/media" element={<Media />} />

          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/eoss-terms-and-conditions" element={<EOSS />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/cookies-policy" element={<Cookies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<Contact />} />



          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/new-arrivals" element={<NewArrival />} />
          <Route path="/fg-woman" element={<FgWoman />} />
          <Route path="/fg-bestseller" element={<FgBestSeller />} />
          <Route path="/fg-basics" element={<FgBasics />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/fg-surplus" element={<FGSurplus />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/bag" element={<BagPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
