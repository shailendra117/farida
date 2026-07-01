import awardsData from "../../data/awardData";
import AwardCard from "./AwardCard";
import Youtube from "./YoutubeVideo"

const Awards = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-3xl font-serif uppercase mb-14">
          Awards & Accolades
        </h2>
        <Youtube />

        {awardsData.map((award) => (
          <AwardCard
            key={award.id}
            award={award}
          />
        ))}

      </div>

    </section>
  );
};

export default Awards;