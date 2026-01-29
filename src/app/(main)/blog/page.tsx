import BlogCard from "@/components/layout/blog/blog-card";
import { blogs } from "@/components/layout/blog/blog-list";

const BlogPage = () => {
  return (
    <div className="m-4 md:m-[30px]">
      <div className="flex flex-col gap-8 p-2 md:gap-10 md:p-6">
        <h1 className="text-[32px] leading-[100%] font-semibold tracking-normal md:text-[40px]">
          Blogs
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,335px),1fr))] gap-6 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] md:gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
