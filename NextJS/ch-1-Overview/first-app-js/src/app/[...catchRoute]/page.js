export default async function CatchRoute({ params }) {
    const { catchRoute } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Catch Route
        </h1>

        {catchRoute.length > 0 ? (
          <p className="text-gray-600 break-all">
            {catchRoute.join(" / ")}
          </p>
        ) : (
          <p className="text-gray-400 italic">
            No catch route provided
          </p>
        )}
      </div>
    </main>
  );
}
