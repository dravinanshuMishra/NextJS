import Link from "next/link";

const Comment = async ({ params }) => {
  // ✅ unwrap params (NextJS v16 requirement)
  const { blogId, commentId } = await params;

  console.log(await params);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-gray-100 flex items-center justify-center p-6">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-200 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          💬 Comment Details
        </h1>

        {/* Blog ID */}
        <p className="text-lg text-gray-600 mb-2">
          Blog ID:
          <span className="text-blue-600 font-semibold ml-2">{blogId}</span>
        </p>

        {/* Comment ID */}
        <p className="text-lg text-gray-600 mb-6">
          Comment ID:
          <span className="text-green-600 font-semibold ml-2">{commentId}</span>
        </p>

        {/* Go Back to Comments */}
        <Link
          href={`/blog/${blogId}/comments`}
          className="block bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition duration-300 font-medium shadow-md hover:shadow-lg"
        >
          ← Back to Comments
        </Link>
      </div>
    </div>
  );
};

export default Comment;
