import Link from "next/link";

const Comments = async ({ params }) => {
  // ✅ MUST unwrap params
  const { blogId } = await params;

  // Dummy comments list
  const comments = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-gray-100 flex items-center justify-center p-6">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-200">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          💬 Comments
        </h1>

        {/* Blog ID Info */}
        <p className="text-center text-lg text-gray-600 mb-6">
          Blog ID:{" "}
          <span className="text-purple-600 font-semibold">{blogId}</span> ka hai
        </p>

        {/* Comments List */}
        <div className="flex flex-col gap-3 mb-6">
          {comments.map((commentId) => (
            <Link
              key={commentId}
              href={`/blog/${blogId}/comments/${commentId}`}
              className="bg-gray-100 hover:bg-purple-100 border border-gray-200 px-4 py-2 rounded-lg transition duration-200 font-medium text-gray-700 hover:text-purple-700"
            >
              💬 Comment {commentId}
            </Link>
          ))}
        </div>

        {/* Go Back Button */}
        <Link
          href={`/blog/${blogId}`}
          className="block text-center bg-purple-500 text-white px-4 py-3 rounded-xl hover:bg-purple-600 transition duration-300 font-medium shadow-md hover:shadow-lg"
        >
          ← Go Back
        </Link>
      </div>
    </div>
  );
};

export default Comments;
