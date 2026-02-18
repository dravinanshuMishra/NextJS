export const metadata = {
  title: "Blog | myApp",
  description: "This is the Blog page of our website",
};

export default function BlogLayout({ children }) {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-100 mt-10">
      {/* Hero Banner */}
      <div className="bg-blue-700 text-white py-16 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Blog Journey
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Explore insights, tutorials, and stories about web development and
            innovation.
          </p>
        </div>
      </div>

      {/* Blog Content Wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
          {children}
        </div>
      </div>
    </section>
  );
}
