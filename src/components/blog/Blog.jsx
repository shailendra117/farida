import { useState } from "react";
import AnnouncementBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import Footer from "../common/Footer";
import MobileBottomNav from "../common//MobileBottomNav";

import BlogPage from "./BlogPage";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnnouncementBar />

      <Navbar openMenu={() => setIsOpen(true)} />
      <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />

      <BlogPage />

      <Footer />

      <MobileBottomNav />
    </>
  );
};

export default Blog;