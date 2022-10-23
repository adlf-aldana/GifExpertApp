import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
      {/* INPUT */}
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* LISTADO DE GIF */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
