import AnnouncementBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import MobileBottomNav from "../common/MobileBottomNav";

import MediaPage from "./MediaPage";

const Blog = () => {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <MediaPage />

      <Footer />

      <MobileBottomNav />
    </>
  );
};

export default Blog;