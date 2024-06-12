import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => {  
    test('Debe de regresar el estado inicial', () => {
      
        const { result } = renderHook( () => useFetchGifs('Birthday') );
        //valor/resultado actual
        const { images, isLoading } = result.current;

        //es el estado inicial del hook
        expect( images.length ).toBe(0);
        expect( isLoading ).toBe(true);
    });

    test('Debe de regresar el estado inicial', async() => {

        const { result } = renderHook( () => useFetchGifs('Birthday') );

        //es una promesa, "espera algo", uso async.
            // espera a que el resultado.length sea mayor a cero
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        //valor/resultado despues de la promesa
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
    
});