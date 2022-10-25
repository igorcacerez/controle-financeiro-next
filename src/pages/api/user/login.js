import {login} from "../../../cli/observers/user";

/**
 * Método responsável por realizar o login
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async (req, res) => {
    const cont = req.body;

    // Verifica se o método não é post
    if (req.method !== 'POST') {
        res.status(404); // Error 404
        return;
    }

    // Verify if don`t set the user and password
    if (!cont.email || !cont.password) {
        res.status(401).json({"msg": "E-mail e senha são obrigatórios"})
        return;
    }

    // Busca o usuario
    const result = await login(cont.email, cont.password)

    // Verifica se não encontrou
    if (!result.length) {
        res.status(401).json({"msg": "E-mail ou senha informados estão incorretos."})
        return;
    }

    // Retorna o usuario
    res.status(200)
        .json({
            "msg": "Sucesso! Aguarde...",
            "user": result[0]
        })
}
