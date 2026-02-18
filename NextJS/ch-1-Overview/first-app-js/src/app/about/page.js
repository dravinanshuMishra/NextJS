import Link from "next/link";

export default function About() {
  return (
    <section className="p-10 flex items-center justify-center  px-6">
      <div className="max-w-3xl text-center bg-white shadow-lg rounded-2xl p-10">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Welcome to MyApp! We specialize in building modern, scalable,
          and high-performance web applications using the latest technologies.
          Our goal is to create clean UI and seamless user experiences.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Home Page
        </Link>
      </div>
    </section>
  );
}
