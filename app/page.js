"use client";

import { useState } from 'react';
import BookCard from '../components/BookCard';
import RecipeCard from '../components/RecipeCard';
import ActionButton from '../components/ActionButton';
import CounterButton from '../components/CounterButton';

export default function Home() {
  const [count, setCount] = useState(0);

  const recipe = {
    title: "Tarta de Limón",
    description: "Una receta dulce, cítrica y deliciosa.",
    ingredients: ["Harina", "Huevos", "Azúcar", "Limón", "Mantequilla"]
  };

  const book = {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    summary: "Una fábula poética que trata temas profundos como la soledad, la amistad y la pérdida."
  };

  const handleClick = () => {
    alert("¡Hiciste clic en el botón!");
  };

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">🎯 Tarjetas Dinámicas</h1>

      <h2 className="text-2xl text-green-700 mb-4">🥗 Receta</h2>
      <RecipeCard {...recipe} />

      <h2 className="text-2xl text-indigo-600 mb-4">📘 Libro</h2>
      <BookCard {...book} />

      <h2 className="text-2xl font-bold mb-2 text-gray-700">🔘 Botón con Alerta</h2>
      <ActionButton label="Haz Clic Aquí" onClick={handleClick} />

      <h2 className="text-2xl font-bold mt-8 mb-2 text-purple-700">🧮 Contador: {count}</h2>
      <CounterButton label="Aumentar contador" onClick={handleIncrease} />
    </main>
  );
}
