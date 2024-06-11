import { useState } from "react";
import { AddCategory, GifGrid } from "../components";

type AddCategoryProps = {
  onNewCategory: (value: string) => void;
};
type CategoryType = string | number;
type CategoryValue = string | number;

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
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export { GifExpertApp };
