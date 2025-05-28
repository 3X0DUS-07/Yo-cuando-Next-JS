export default function BookCard({ title, author, summary }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg shadow-md p-5 mb-6">
      <h2 className="text-xl font-bold text-yellow-800 mb-1">{title}</h2>
      <h3 className="text-md text-yellow-600 mb-2">por {author}</h3>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
}