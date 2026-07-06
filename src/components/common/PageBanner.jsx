const PageBanner = ({ title, subtitle }) => {
  return (
    <section className="bg-[#f8efe9] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#7B1D2A]">Collection</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3c2a21]">{title}</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageBanner;
