import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "../../data/faqData";
import { useEffect } from "react";
const tabs = Object.keys(faqData);

export default function FaqPolicy() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [activeTab, setActiveTab] = useState("Sizes");
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-5 mt-20">

      {/* Tabs */}

      <div className="flex flex-wrap justify-center gap-8 border-b mb-2">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null);
            }}
            className={`pb-4 text-md transition

              ${
                activeTab === tab
                  ? "border-b-2 border-[#7B1D2A] text-black"
                  : "text-gray-500"
              }

            `}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Accordion */}

      <div className="space-y-4">

        {faqData[activeTab].map((item, index) => (

          <div
            key={index}
            className="border border-gray-500  rounded-md overflow-hidden"
          >

            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-3 py-1  text-left text-gray-800 text-sm"
            >

              {item.question}

              {openIndex === index ? (
                <ChevronUp size={22} />
              ) : (
                <ChevronDown size={22} />
              )}

            </button>

            {openIndex === index && (

              <div className="px-3 pb-2 text-xs text-gray-600 leading-8">

                {item.answer}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

