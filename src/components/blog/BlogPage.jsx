import BlogCard from "./BlogCard";
import blogData from "../../data/blogData";

const BlogPage = () => {
  return (
    <section className="py-20 bg-[#faf8f6]">
      

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-5xl font-serif mb-16 mt-12  text-[#4a2d24]">
          Our Blogs
        </h2>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogPage;