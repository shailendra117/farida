import Announcement from "../common/AnnouncementBar"
import Navbar from "../common/Navbar"
import About from "./About"
import Footer from "../common/Footer"
import AnnouncementBar from "../common/AnnouncementBar"
import MobileBottomNav from "../common/MobileBottomNav"

export default function AboutUs() {
    return (
       <>
       <Announcement />
       <Navbar />
       <About /> 
       <Footer />
       <MobileBottomNav />
       </>

    )
}