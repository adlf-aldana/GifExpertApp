import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Valorant"]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
      {/* INPUT */}
      <button onClick={onAddCategory}>Agregar</button>
      {/* LISTADO DE GIF */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
