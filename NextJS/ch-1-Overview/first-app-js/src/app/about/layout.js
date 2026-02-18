export const metadata = {
  title: "About | MyApp",
  description: "Learn more about us and our mission.",
};

export default function AboutLayout({ children }) {
  return (
    <section className="min-h-screen bg-liner-to-br mt-10 from-blue-50 via-white to-gray-100">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white py-12 shadow-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Our Journey</h1>
          <p className="mt-4 text-lg opacity-90">
            Learn more about who we are and what we do.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </section>
  );
}
