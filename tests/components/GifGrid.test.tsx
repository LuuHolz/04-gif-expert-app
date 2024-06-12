import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//le decimos que hag aun mock completo del useFetchGifs
jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en componente GifGrid', () => { 

    const category = 'Birthday';

    test('Debe de mostrar el loading inicialmente', () => {

        (useFetchGifs as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/>);
        // screen.debug()
        //evaluar estado inicial
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
      
        const gifs = [
            {
                id: 'ABC',
                title: 'Birthday',
                url: 'http://localhost/birthday.jpg',
            },
            {
                id: '123',
                title: 'Birthday2',
                url: 'http://localhost/birthday2.jpg',
            }
        ];

        //Mock simulo los valos que deberia recibir del useFetchGifs
        (useFetchGifs as jest.Mock).mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category }/>);
        // screen.debug()

        expect( screen.getAllByRole('img').length ).toBe(2);
    });
    
    
 });