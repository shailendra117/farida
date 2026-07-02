import { Routes, Route } from "react-router-dom";
// import ScrollToTop from "./components/home/ScrollToTop";
import Home from "./components/pages/Home";
import NewArrival from "./components/pages/NewArrival";
import FgWoman from "./components/pages/FgWoman";
import FgBestSeller from "./components/pages/FgBestSeller";
import FgBasics from "./components/pages/FgBasics";
import Sale from "./components/pages/Sale";

import AboutUs from "./components/pages/AboutUs";
import NewsLetter2 from "./components/pages/Newsletter2";
import Blog from "./components/blog/Blog";
import Media from "./components/media/Media";

function App() {
  return (
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/news-letter" element={<NewsLetter2 />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/media" element={<Media /> }/>

      
      <Route path="/new-arrivals" element={<NewArrival />} />
      <Route path="/fg-woman" element={<FgWoman />} />
      <Route path="/fg-bestseller" element={<FgBestSeller />} />
      <Route path="/fg-basics" element={<FgBasics />} />
      <Route path="/sale" element={<Sale />} />
      
    </Routes>
  );
}

export default App;