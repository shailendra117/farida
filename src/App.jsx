import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/home/ScrollToTop";
import Home from "./components/pages/Home";
import NewArrival from "./components/pages/NewArrival";
import FgWoman from "./components/pages/FgWoman";
import FgBestSeller from "./components/pages/FgBestSeller";
import FgBasics from "./components/pages/FgBasics";
import Sale from "./components/pages/Sale";
import Exhibitions from "./components/pages/Exhibitions";

import AboutUs from "./components/pages/AboutUs";
import NewsLetter2 from "./components/pages/Newsletter2";
import Blog from "./components/blog/Blog";
import Media from "./components/media/Media";

import Shipping from "./components/pages/Shipping"
import Refund from "./components/pages/Refund"
import Terms from "./components/pages/Terms"
import EOSS from "./components/pages/EOSS"
import Privacy from "./components/pages/Privacy"
import Cookies from "./components/pages/Cookies"
import FAQ from "./components/pages/FAQ"
import Contact from "./components/pages/Contact"


function App() {
  return (
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/news-letter" element={<NewsLetter2 />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/media" element={<Media /> }/>

      <Route path="/shipping-policy" element={<Shipping /> }/>
      <Route path="/refund-policy" element={<Refund /> }/>
      <Route path="/terms-and-conditions" element={<Terms /> }/>
      <Route path="/eoss-terms-and-conditions" element={<EOSS /> }/>
      <Route path="/privacy-policy" element={<Privacy /> }/>
      <Route path="/cookies-policy" element={<Cookies /> }/>
      <Route path="/faq" element={<FAQ /> }/>
      <Route path="/contact-us" element={<Contact /> }/>

      
      <Route path="/new-arrivals" element={<NewArrival />} />
      <Route path="/fg-woman" element={<FgWoman />} />
      <Route path="/fg-bestseller" element={<FgBestSeller />} />
      <Route path="/fg-basics" element={<FgBasics />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/exhibitions" element={<Exhibitions />} />
      
    </Routes>
  );
}

export default App;