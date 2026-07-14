import { useState } from "react";
import AnnouncementBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import Surplus from "../surplus/Surplus";
import Footer from "../common/Footer";
import MobileBottomNav from "../common/MobileBottomNav";

export default function FgSurplus() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnnouncementBar />
      <Navbar openMenu={() => setIsOpen(true)} />
      <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
      <Surplus />
      <Footer />
      <MobileBottomNav />
    </>
  );
}