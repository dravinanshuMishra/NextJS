import Link from "next/link";

// DYNMIC HANDLING METADATA.
export async function generateMetadata({ params }) {
  console.log("yes ::", await params);
  const {blogId} = await params;
  return {
    title: `Blog - ${blogId}`,
  };
}

const Blog = async ({ params }) => {
  const { blogId } = await params;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center p-6">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-200">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Blog : <span className="text-blue-600">{blogId}</span>
        </h1>

        {/* Buttons container */}
        <div className="flex flex-col gap-4">
          {/* Comments Button */}
          <Link
            href={`/blog/${blogId}/comments`}
            className="bg-blue-500 text-white text-center px-4 py-3 rounded-xl hover:bg-blue-600 transition duration-300 font-medium shadow-md hover:shadow-lg"
          >
            💬 Comments Open
          </Link>

          {/* Go Back Button */}
          <Link
            href="/blog"
            className="bg-gray-200 text-gray-800 text-center px-4 py-3 rounded-xl hover:bg-gray-300 transition duration-300 font-medium"
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
