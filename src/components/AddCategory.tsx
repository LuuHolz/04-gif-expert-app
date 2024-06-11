import { useState } from "react";

type AddCategoryProps = {
  onNewCategory: (category: string) => void;
};

const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: { target: HTMLInputElement }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export { AddCategory };
