import React from "react"
import { render, screen } from "@testing-library/react";
import { Footer } from '../../components/Footer/Footer';

describe('<Footer />', () => {
    test('rendering Go Up', () => {
        // Crear contenido en pantalla
        render(<Footer />);

        //Hacer acciones

        //Checar que la informacion este bien
        const goUp = screen.queryByText('Go Up');
        const myInfo = screen.queryByText('My Info');
        expect(goUp).toBeInTheDocument();
        expect(myInfo).toBeInTheDocument();
    });

});