import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';


describe('Pruebas en GifItem', () => {

    const title = 'Bithday';
    const url = 'http://birthday.com/Birthday.jpg';

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagencon el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url }/>);

        const img = screen.getByRole('img') as HTMLImageElement;
        const { src, alt } = img;
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url }/>);

        expect( screen.getByText( title ) ).toBeTruthy();
    })
    
    

});