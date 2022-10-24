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


export {
  login
}
