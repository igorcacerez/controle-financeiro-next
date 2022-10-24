import excuteQuery from "../../../cli/adapters/database";

/**
 * Responsável por processar o endpoint de cadatro de usuario.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async (req, res) => {
  try {
    const result = await excuteQuery({
      query: 'INSERT INTO users(name, email, password) VALUES(?, ?, ?)',
      values: [req.body.name, req.body.email, req.body.password],
    });
    console.log( "ttt",result );
  } catch ( error ) {
    console.log( error );
  }

};
