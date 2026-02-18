"use client";

import Link from "next/link";

const Home = () => {
  console.log("The server page is running...!!");

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full border border-gray-200">
        {/* Heading */}
        <div className="text-red-400 bg-gray-100 text-2xl font-bold text-center py-3 px-4 rounded-lg mb-8">
          Home page
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 text-center font-medium"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 text-center font-medium"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 text-center font-medium"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
