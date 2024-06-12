import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/pages/GifExpertApp';

describe('Pruebas en GifExpertApp', ( ) => { 

    test('Debe hacer match con el snapshot', () => {
      
        const { container } = render( <GifExpertApp/> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe agregar una nueva categoria', () => {
        render( <GifExpertApp/> );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form');

        //simular evento
        fireEvent.input( input, {target: { value: 'NewCategory'}});
        fireEvent.submit( form );

        expect(screen.getByText('NewCategory')).toBeTruthy();
    });
    
    test('No debe agregar nueva categoria si ya existe', () => {
        const category = "Meta";

        render(<GifExpertApp/>);
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
    
        fireEvent.input(input, {target:{value: category}});
        fireEvent.submit(form);

        expect(screen.getAllByText(category).length).toBe(1);
    });
    
    
 });