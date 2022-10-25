import excuteQuery from "../adapters/database";

/**
 * Busca um usuário atraves do email e senha informados.
 *
 * @param user
 * @param pass
 * @returns {Promise<*>}
 */
const login = async (user, pass) => {
    // Busca o usuario
    let result = await excuteQuery({
        query: 'SELECT * FROM users WHERE email = ? AND password = ?',
        values: [user, pass],
    });

    return result;
}

/**
 * Responsável por inserir um novo usuario no banco de dados.
 *
 * @param name
 * @param email
 * @param password
 * @returns {Promise<*>}
 */
const insert = async ({name, email, password}) => {
    // Insere o usuário
    let result = await excuteQuery({
        query: 'INSERT INTO users(name, email, password) VALUES(?, ?, ?)',
        values: [name, email, password],
    });

    return result;
}

const getUserId = async (id) => {
    // Insere o usuário
    let result = await excuteQuery({
        query: 'SELECT * FROM users WHERE id_users = ?',
        values: [id],
    });

    return result;
}

const getUser = async (where, values) => {
    // Insere o usuário
    let result = await excuteQuery({
        query: 'SELECT * FROM users ' + (where && 'WHERE ' + where),
        values: values,
    });

    return result;
}


export {
    login,
    insert,
    getUserId,
    getUser
}
