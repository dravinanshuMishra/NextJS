import Link from "next/link";

const Blog = () => {
  const blogs = [
    { id: 1, title: "Getting Started with Next.js" },
    { id: 2, title: "Understanding Dynamic Routing" },
    { id: 3, title: "Server vs Client Components" },
    { id: 4, title: "Next.js Performance Optimization" },
  ];

  return (
    <div className="p-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          📘 Blog List
        </h1>

        {/* Blog Links */}
        <div className="space-y-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="flex justify-between items-center p-3 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-200 group"
            >
              <span className="font-medium">{blog.title}</span>

              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 font-medium hover:underline">
            ← Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
