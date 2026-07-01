import { Routes, Route } from "react-router-dom";
// import ScrollToTop from "./components/home/ScrollToTop";
import Home from "./components/pages/Home";
import NewArrival from "./components/pages/NewArrival";
import AboutUs from "./components/pages/AboutUs"
import NewsLetter2 from "./components/pages/Newsletter2";
import Blog from "./components/blog/Blog";
import Media from "./components/media/Media"

function App() {
  return (
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-arrivals" element={<NewArrival />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/news-letter" element={<NewsLetter2 />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/media" element={<Media /> }/>
    </Routes>
  );
}

export default App;