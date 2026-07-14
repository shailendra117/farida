import { useState, useRef,useEffect } from "react";
import ExhibitionCard from "../Exhibition/ExhibtionCard";
import SubscribeForm from "../Exhibition/SubscribeForm";
import { exhibitions } from "../../data/exhibitions";

const Exhibitions = () => {


   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

      const [selectedCity, setSelectedCity] = useState("");
  const formRef = useRef(null);

  const handleNotify = (city) => {
    setSelectedCity(city);

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <section className="bg-gray-100 py-10 mt-8">

      <div className="max-w-8xl mx-auto px-5">
        <p className="text-xs text-gray-700  py-3">Home/Exhibtions</p>

        <div className="grid lg:grid-cols-3 gap-3">

          {/* Left */}

          <div className="lg:col-span-2 space-y-8">


            {exhibitions.map((item) => (
              <ExhibitionCard
                key={item.id}
                item={item}
                onNotify={handleNotify}
              />
            ))}

          </div>

          {/* Right */}

         <div ref={formRef} className="lg:sticky lg:top-20 self-start">
            <SubscribeForm selectedCity={selectedCity}/>
            </div>

        </div>

      </div>

    </section>
  );
};

export default Exhibitions;