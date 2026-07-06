import { useState } from "react";

import AnnouncementBar from  "../common/AnnouncementBar"
import Navbar from "../common/Navbar"
import MobileSidebar from "../common/MobileSidebar"
import HeroSlider from "../home/HeroSlider"
import VideoSection from "../home/VideoSection"
import Craft from "../home/Craft"
import Impact from "../home/Impact"
import Categories from "../home/Categories"
import FGCrafts from "../home/FGCraft"
import Subscribe from "../home/Subscribe"
import Footer from "../common/Footer"
import MobileBottomNav from "../common/MobileBottomNav"




function Home(){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <AnnouncementBar />
    <Navbar openMenu={() => setIsOpen(true)} />
    <MobileSidebar
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
      />
      <HeroSlider />
      <VideoSection />
      <Craft />
      <Impact />
      <Categories />
      {/* <FeaturedCollections /> */}
      <FGCrafts />
      <Subscribe />
      <Footer />
      <MobileBottomNav />
      {/* <NewsLetter /> */}
      {/* <BlogPage /> */}
      {/* <Media /> */}
      {/* <Arrival />  */}
      {/* <Woman /> */}
      
           
    </>
  )
}
export default Home