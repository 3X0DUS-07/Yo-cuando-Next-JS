export default function RecipeCard({ title, description, ingredients }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold text-green-700 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="list-disc list-inside text-gray-800">
        {ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}