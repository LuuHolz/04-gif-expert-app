type GiphyImage = {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
};

type GiphyApiResponse = {
  data: GiphyImage[];
};

export const getGifs = async (category: string) => {
  const api_key = "TbRyEoBgtxWPs2sbrBnbHFT6lbD9xbOw";
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;

  const respuesta = await fetch(URL);
  const { data }: GiphyApiResponse = await respuesta.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
