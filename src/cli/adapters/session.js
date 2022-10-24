import {varifyLogin} from "../services/user/login";

/**
 * Responsável pela seguraça das páginas restritas
 *
 * @param funcao
 * @returns {function(*): Promise<*|{redirect: {permanent: boolean, destination: string}}>}
 */
export function withSession(funcao) {
    return async (ctx) => {

        // Verifica se o usuario esta logado
        return await varifyLogin(ctx)
            .then((session) => {

                // Se tiver modifica, retornando os dados na prop
                const modified = {
                    ...ctx,
                    req: {
                        ...ctx.req,
                        session
                    }
                };
                return funcao(modified);
            })
            .catch((e) => {

                // Como não esta logado redireciona para a página de login
                return {
                    redirect: {
                        permanent: false,
                        destination: '/login'
                    }
                }
            })
    }
}
