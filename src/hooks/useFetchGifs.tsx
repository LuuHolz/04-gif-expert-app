import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = ( category ) => {

    const [ isLoading, setIsLoading ] = useState( true );
    const [ images, setImages ] = useState([]);

    const getImages = async() => {

        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, []);


  return {
            images,
            isLoading
  }
}

export  { useFetchGifs }