export default async function File({ params }) {
  const { filePath } = await params;

  return (
    <div>
      Optional Catch All Route Path ::{" "}
      {filePath?.length ? filePath.join(" / ") : "files/"}
    </div>
  );
}
