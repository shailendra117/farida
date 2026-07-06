import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "New Arrivals",
    description: "Fresh silhouettes and handcrafted staples added for the season.",
    link: "/new-arrivals",
    accent: "from-[#f7e6dd] to-[#f3d1c1]",
  },
  {
    title: "Best Sellers",
    description: "Explore customer favorites with timeless craftsmanship and comfort.",
    link: "/fg-bestseller",
    accent: "from-[#f3e8dd] to-[#e8d5bd]",
  },
  {
    title: "Craft Stories",
    description: "Discover the traditions behind each textile and print.",
    link: "/fg-basics",
    accent: "from-[#efe3da] to-[#e4cfbf]",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7B1D2A]">Curated collection</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3c2a21] mt-3">
          Discover the pieces that define the season
        </h2>
        <p className="mt-4 text-gray-600">
          A cleaner browsing experience with more guidance for customers exploring your best work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className={`group rounded-[2rem] border border-[#eadfda] bg-gradient-to-br ${item.accent} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#7B1D2A]">
                Explore
              </span>
              <ArrowRight size={18} className="text-[#7B1D2A] transition group-hover:translate-x-1" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-[#3c2a21]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
