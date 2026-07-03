import designerImg from "../../assets/images/about1.jpg";
import logoCardImg from "../../assets/images/about2.jpg";
import teamImg from "../../assets/images/about3.jpg";
import { useEffect } from "react";

export default function About() {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    
    <div className="px-4 sm:px-8 mt-25 lg:px-16 py-10 max-w-6xl mx-auto space-y-16 sm:space-y-20">
      
 <div>
  <p className="text-xs text-gray-500 p-2"><a href="/">Home/ </a><span>About Us</span></p>
      {/* About The Designer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="overflow-hidden rounded-xl">
          <img
            src={designerImg}
            alt="Farida Gupta - About The Designer"
            className="w-full h-[300px] sm:h-[400px] lg:h-[580px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-lg sm:text-xl tracking-[0.1em] leading-5 uppercase text-gray-800 mb-6 font-brand">
            About The Designer
          </h2>
          <p className="text-sm sm:text-xs leading-6.5 text-gray-600 ">
            Drawn to the radiance of colours and intricacy of patterns from a
            very young age, Farida Gupta's love for designing is no secret.
            Following a successful balancing act as a full-time mother and a
            part-time designer, she finally pursued her true calling in 2011.
            With a post-graduation from Jawaharlal Nehru University, New
            Delhi under her belt, she decided to take the plunge and
            incorporated the eponymous label. Driven by her insatiable love
            for India's heritage crafts and a relentless spirit to bring
            them to light, she set forth on her journey with no looking
            back. </p> 
            <p className="text-sm sm:text-xs leading-6.5 text-gray-600 my-4">It all began with a few fabric swatches, a sketchpad and a
            vision. Rolling back the clock to the late 90s, Farida had
            started out with two embroidery girls in the living room of her
            South Delhi flat, where she taught them the nuances of the
            craft. Amazed by their eagerness to learn, she was determined to
            bring their flair to the fore. What ensued was a story for the
            records: one that involved countless solo journeys across the
            country to chase her dreams, quite literally. Shuttling between
            exhibitions and rural parts of the country, there was a time she
            was living out of a suitcase, all in the name of her love for
            Indian heritage crafts.</p> 
            <p className="text-sm sm:text-xs leading-6.5 text-gray-600">In 2011, almost as an epiphany, having
            realized that her passion had boundless potential to create
            avenues of employment opportunities, she channelized all of her
            focus towards her own label. Presently, the label has created
            employment for a plethora of local artisans.</p>
        
        </div>
      </div>

      {/* Who We Are */}
      <div>
        <h2 className=" text-lg sm:text-xl tracking-[0.1em] uppercase text-gray-800 mb-8 font-brand">
          Who We Are
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-sm sm:text-xs leading-6.5 text-gray-600 order-2 lg:order-1">
            In 2016, the brand underwent a digitized resurrection under the
            watchful eye of Farida's entrepreneurial son, Sahil Gupta.
            Within a span of a year, we were awarded India's Most Innovative
            SMB on digital in 2017. Giving Farida's creative flair some
            enterprising direction, Sahil gradually honed the potential of
            the label, in terms of its societal outreach. Being fairly well
            acquainted with the abundance of talent and expertise of India's
            craftsmen, he's been resolute to ensure they get the recognition
            and appreciation they rightly deserve. Presently, over 1000
            artisans from various remote villages in Rajasthan and Gujarat
            are employed by the brand, providing them with a steady income
            and platform for the whole world to see. In today's times of
            indispensable need for women empowerment and gender equality,
            the label with its 300 strong brigade of women employees, is
            marching steadily towards its endeavor to empower and employ at
            least 10,000 artisans and 5,000 underprivileged women by 2028.
            
        </p>
        <p  className="text-sm sm:text-xs leading-6.5 text-gray-600 order-2 lg:order-1">
            Constantly striving to provide you with a seamless shopping
            experience, our team thrives on customer-obsession. An ardent
            admirer of the indigenous crafts, our brand channelizes its
            efforts and resources to revive the might of the local artisan,
            focusing primarily on works that involve handcrafted techniques.
            Taken care of by a team of young and enthusiastic minds, the
            brand as well as the FG family is growing with each passing
            minute.
          </p>
          </div>

          <div className="overflow-hidden rounded-xl order-1 lg:order-2">
            <img
              src={logoCardImg}
              alt="Farida Gupta brand card"
              className="w-full h-[300px] sm:h-[400px] lg:h-[580px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="overflow-hidden rounded-xl">
          <img
            src={teamImg}
            alt="Farida Gupta artisan team"
            className="w-full h-[300px] sm:h-[400px] lg:h-[580px] object-cover"
          />
        </div>

        <div className=" flex flex-col items-center">
          <h2 className="text-lg sm:text-xl tracking-[0.1em] uppercase text-gray-800 mb-6 font-brand">
            Our Vision
          </h2>
          <p className="text-sm  sm:text-xs leading-6.5 text-gray-600">
            Working towards our goals on a daily basis, we envision
            ourselves as the world's leading brand for Indian Ethnic Wear.
            Driven by customer obsession and technological prowess, we
            respect the divide between modern automation and the
            irrefutable subtleties of hand-made precision. We aspire to
            stay true to our core values whilst focusing on the customer
            and the artisan in an equal sense. Providing a flawless
            shopping experience through and through, we're gradually
            increasing artisanal employment every single step of the way.
          </p>
        </div>
      </div>

      </div>

    </div>
  );
}
