import { useState } from "react";
import { AddCategory, GifGrid } from "../components";

type CategoryType = string | number;

const GifExpertApp = () => {
  const [categories, setCategories] = useState<CategoryType[]>(["bithday"]);

  const onAddCategory = (newCategory: CategoryType) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={(value: string) => onAddCategory(value)} 
      />

      {categories.map((category) => (
        <GifGrid key={String(category)} category={String(category)} />
      ))}
    </>
  );
};

export { GifExpertApp };
