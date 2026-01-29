import { Blog } from "./blog-list";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <>
      {" "}
      <div key={blog.id} className="flex flex-col gap-2.5 md:gap-5">
        <div className="aspect-[335/258.49] w-full overflow-hidden rounded-[11.49px] md:aspect-[400/360] md:rounded-2xl">
          <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="md-text-[12px] text-[8.62px] font-[700] text-[#333333] md:text-base">
              {blog.subtitle}
            </span>
            <span className="md-text-[12px] text-[8.62px] font-[500] text-gray-600 md:text-sm">
              {blog.date}
            </span>
          </div>

          <h2 className="md-text-[24px] text-[17.23px] leading-tight font-[700] text-[#333333] md:text-xl">
            {blog.title}
          </h2>

          <p className="md-text-[16px] text-[11.49px] leading-relaxed text-[#666666] md:text-base">
            {blog.description}
          </p>

          <button className="text-secondary-end mt-1 text-left text-sm font-semibold underline transition-colors hover:text-yellow-800 md:text-base">
            Read More...
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
