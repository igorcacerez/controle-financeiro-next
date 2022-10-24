//React Imports
import { useState } from 'react'

// Helper
import { handleChange } from "../cli/comand/handleHelper"

// Ações da página de login
import { handleSubmit } from "../cli/comand/handleLogin"

// Componentes
import Swal from "sweetalert2";
import { useRouter } from 'next/router';

const Login = () => {

    // Rotas
    const router = useRouter();

    // State
    const [values, setValues] = useState({
        password: '',
        email: '',
        showPassword: false
    })

    const contentLogin = {
        values,
        setValues
    }

    const submitForm = async (e) => {
        e.preventDefault()

        handleSubmit(values)
            .then((e) => {
                // Redireciona para a página inicial
                router.push("/");
            })
            .catch((e) => {
                // Informa que algo deu errado
                Swal.fire({
                    title: 'Ops!',
                    text: e,
                    showCancelButton: false,
                    showConfirmButton: false
                })
            })
    }

    return (
        <>
            <div className="accountbg"></div>
            <div className="home-btn d-none d-sm-block">
                <a href="index.html" className="text-white"><i className="fas fa-home h2"></i></a>
            </div>
            <div className="wrapper-page">
                <div className="card card-pages shadow-none">

                    <div className="card-body">
                        <div className="text-center m-t-0 m-b-15">
                            <a href="index.html" className="logo logo-admin">
                                <img src="/images/logo-light.png"
                                     alt=""
                                     height="24"
                                />
                            </a>
                        </div>
                        <h5 className="font-18 text-center">Sign in to continue to Stexo.</h5>

                        <form className="form-horizontal m-t-30" onSubmit={submitForm}>

                            <div className="form-group">
                                <div className="col-12">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        required=""
                                        name="email"
                                        placeholder="E-mail"
                                        onChange={handleChange(contentLogin, 'email')}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-12">
                                    <label>Senha</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required=""
                                        placeholder="Senha"
                                        onChange={handleChange(contentLogin, 'password')}
                                    />
                                </div>
                            </div>


                            <div className="form-group text-center m-t-20">
                                <div className="col-12">
                                    <button
                                        className="btn btn-primary btn-block btn-lg waves-effect waves-light"
                                        type="submit">
                                        Acessar
                                    </button>
                                </div>
                            </div>

                            <div className="form-group row m-t-30 m-b-0">
                                <div className="col-sm-7">
                                    <a href="pages-recoverpw.html" className="text-muted"><i
                                        className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                </div>
                                <div className="col-sm-5 text-right">
                                    <a href="pages-register.html" className="text-muted">Create an account</a>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

// const Login = () => {
//     return (
//         <>
//             <p>AAAA</p>
//         </>
//     )
// }

export default Login;