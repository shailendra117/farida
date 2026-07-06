import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf7] px-6 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7B1D2A]">404</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3c2a21]">
          The page you are looking for is not available.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The link may be outdated or the page might have moved. Please return to the homepage to continue browsing.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#7B1D2A] px-5 py-3 text-white transition hover:bg-[#651621]"
          >
            <Home size={18} />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-[#d9c6b7] px-5 py-3 text-[#3c2a21] transition hover:bg-[#f9efe9]"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
