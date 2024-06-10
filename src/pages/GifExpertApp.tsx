import { useState } from "react";
import { AddCategory } from '../components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  
  const onAddCategory = ( inputValue: string ) => {

    // si ya esta en la lista que no se agregue
    if ( categories.includes( inputValue ) ) return;
    
    setCategories( [...categories, inputValue] )
  }

  return (
    <>
        {/* TITULO */}
        <div>GifExpertApp</div>

        {/* INPUT */}
        <AddCategory onAddCategory={ onAddCategory }/>


        {/* LISTADO DE GIF */}

        <ol>
          { categories.map( ( category ) => 
            ( <div key={ category }>
                      <h3>{ category }</h3>
                    </div>
            ))
          }
          
        </ol>

        {/* GIF ITEM */}

    </>
  )
}

export  { GifExpertApp } 