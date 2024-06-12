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

        // screen.debug()
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
      
        const inputValue = 'Birthday';
        //simulacion de funcion
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        //evaluar que la funcion fue llamada
        expect( onNewCategory ).toHaveBeenCalled();
        //evaluar que la funcion fue llamada( x veces )
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //evaluar que fue llamada con el valoe(espera argumento number, parametro)
        expect( onNewCategory ).toHaveBeenNthCalledWith( 1, inputValue );
    });
    
    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
    
    
 });