import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

type Gif = {
  id: string;
  title: string;
  url: string;
};

const useFetchGifs = (category: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<Gif[]>([]);

  const getImages = async () => {
    const newImages: Gif[] = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export { useFetchGifs };

