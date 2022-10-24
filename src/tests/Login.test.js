import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from "../pages/login";
import {handleSubmit} from "../cli/comand/handleLogin";

describe("Página de login", () => {
    describe("Quando abro a página de login", () => {
        it("o nome é exibido", () => {
            render(<Login />)

            expect(screen.getByText("Realize o login no sistema.")).toBeInTheDocument();
        })

        it("o campo de e-mail é exibido", () => {
            render(<Login />)

            expect(screen.getByText("E-mail")).toBeInTheDocument();
        })

        it("o campo de senha é exibido", () => {
            render(<Login />)

            expect(screen.getByText("Senha")).toBeInTheDocument();
        })
    })


    describe("Quando tento realizar o login", () => {
        it("porem não preenchi os campos", () => {

            const values = {
                password: '',
                email: ''
            }

            handleSubmit(values)
                .catch((e) => {
                    expect(e).toBe("Preencha seu e-mail e senha.")
                })
        })
    })
})