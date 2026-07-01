import Announcement from "../common/AnnouncementBar"
import Navbar from "../common/Navbar"
import Collection from "../Collection1/Collection"
import Footer from "../common/Footer"
import AnnouncementBar from "../common/AnnouncementBar"
import MobileBottomNav from "../common/MobileBottomNav"

export default function NewArrival() {
    return (
       <>
       <Announcement />
       <Navbar />
       <Collection /> 
       <Footer />
       <MobileBottomNav />
       </>

    )
}