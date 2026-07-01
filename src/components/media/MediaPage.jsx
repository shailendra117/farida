import mediaData from "../../data/mediaData";
import MediaCard from "./MediaCard";
import Award from "./Awards"

const MediaPage = () => {
  return (
    <section className="py-16">
        <Award />
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-3xl font-serif mb-12">
          IN THE NEWS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {mediaData.map((item) => (
            <MediaCard key={item.id} media={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaPage;