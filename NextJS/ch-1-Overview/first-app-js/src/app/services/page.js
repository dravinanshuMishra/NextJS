import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-200">
        {/* Heading */}
        <div className="text-red-500 capitalize bg-gray-100 text-xl font-semibold text-center py-3 px-4 rounded-lg mb-6">
          Services page, we provides services like
        </div>

        {/* Links Container */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-blue-600 underline hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-lg transition duration-200"
          >
            Go to Home Page
          </Link>

          <Link
            href="/services/web-dev"
            className="text-blue-600 underline hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-lg transition duration-200"
          >
            web development
          </Link>

          <Link
            href="/services/app-dev"
            className="text-blue-600 underline hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-lg transition duration-200"
          >
            app development
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
