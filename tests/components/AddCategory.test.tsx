import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => {
      
        //sujeto de pruebas
        render( <AddCategory onNewCategory={ () => {}}/>);

        //extraigo el input
        const input = screen.getByRole('textbox') as HTMLInputElement;

        //disparamos el evento(onChange)
        fireEvent.input( input, { target: { value: 'Birthday' } } );
       //lo que espero que suceda
        expect( input.value ).toBe('Birthday');

        screen.debug()

    })
    
 })