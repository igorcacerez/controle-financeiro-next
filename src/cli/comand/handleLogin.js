import {login} from "../services/user/login";

const handleMouseDownPassword = event => {
    event.preventDefault()
}

// Processa o envio do form de login
const handleSubmit = async (values) => {
    return new Promise(async (resolve, reject) => {

        // Verifica se  o usuario preencheu o usuario e senha
        if (!values.email || !values.password) {
            return reject("Preencha seu e-mail e senha.")
        }

        // Tenta realizar o login
        await login(values.email, values.password)
            .then((e) => {
                // Salva os dados em cache


                resolve(e)
            })
            .catch((e) => {
                reject(e)
            })

    })
}


export {
    handleSubmit,
    handleMouseDownPassword
}
