import AnnouncementBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import MobileBottomNav from "../common//MobileBottomNav";

import BlogPage from "./BlogPage";

const Blog = () => {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <BlogPage />

      <Footer />

      <MobileBottomNav />
    </>
  );
};

export default Blog;