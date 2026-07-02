import { useState } from "react";
import Announcement from "../common/AnnouncementBar"
import Navbar from "../common/Navbar"
import MobileSidebar from "../common/MobileSidebar"
import BestSeller from "../bestseller/BestSeller"
import Footer from "../common/Footer"
import AnnouncementBar from "../common/AnnouncementBar"
import MobileBottomNav from "../common/MobileBottomNav"

export default function FgBestSeller() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <>
       <Announcement />
       <Navbar openMenu={() => setIsOpen(true)} />
       <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
       <BestSeller /> 
       <Footer />
       <MobileBottomNav />
       </>

    )
}