import { useEffect } from "react";

const BlogCard = ({ blog }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300">

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#4a2d24] ">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-sm  mb-3">
          {blog.description}
        </p>

         <div className="text-sm flex gap-3">
            <p className=" text-[#7b1e2b]">
          {blog.date}
        </p>

        <a href="#" className=" text-[#7b1e2b]  transition">
          Read More..
        </a>
         </div>

      </div>

    </div>
  );
};

export default BlogCard;