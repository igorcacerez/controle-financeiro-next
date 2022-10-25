import {getUser, getUserId, insert} from "../../../cli/observers/user";

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
    }

    // Verify if don`t set the user and password
    if (!cont.email || !cont.password || !cont.name) {
        res.status(401)
            .json({"msg": "Campos obrigatórios não informados."})
        return;
    }

    // Verify user name exist
    const userVerify = await getUser("email = ?", [cont.email])

    if (userVerify.length) {
        res.status(401)
            .json({"msg": "Já existe um usuário com o e-mail informado."})
        return;
    }

    // Busca o usuario
    const result = await insert(cont)

    // Verifica se não encontrou
    if (!result.insertId) {
        res.status(401).json({"msg": "E-mail ou senha informados estão incorretos."})
        return;
    }

    // Get user
    const user = await getUserId(result.insertId)

    // Retorna o usuario
    res.status(200)
        .json({
            "msg": "Usuário cadastrado com sucesso.",
            "user": user[0]
        })
}
