import nookies from 'nookies'
import {HttpClient} from "../../adapters/httpClient";

// Nome do token criptografado
const ACCESS_TOKEN = '1a764af627cae365816ab4fb6c724fed';

// Const de tempo
const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

/**
 * Responsável por realizar a requisição a endpoint da
 * api responsável por realizar o login.
 *
 * @param email
 * @param pass
 * @returns {Promise<unknown>}
 */
export async function login(email, pass, ctx = null) {
  return HttpClient("/api/user/login", {
    method: "POST",
    body: {
      email: email,
      password: pass
    }
  })
    .then(async (response) => {
        return new Promise(async (resolve, reject) => {

            // Verifica se nao logou
            if (!response.ok) {
                reject(response.body.msg)
            }

            // Salva o token
            tokenClient.save(JSON.stringify(response.body.user), ctx)

            // Recupera o conteudo retornado
            resolve(response.body)
        })
    })
}


/**
 * Resposável por tratar do token do client
 * armazenando, alterando e deletando.
 *
 * @type {{get(*=): *, save(*, *=): void, delete(*=): void}}
 */
export const tokenClient = {
    save(token, ctx = null) {
        globalThis?.sessionStorage.setItem(ACCESS_TOKEN, token)
        nookies.set(ctx, ACCESS_TOKEN, token, {
            maxAge: ONE_DAY,
            path: '/'
        })
    },

    get(ctx = null) {
        const cookies = nookies.get(ctx);
        return cookies[ACCESS_TOKEN] || false;
    },

    delete(ctx = null) {
        nookies.destroy(ctx, ACCESS_TOKEN)
    }
}

export async function varifyLogin(ctx) {
    return new Promise(async (resolve, reject) => {

        // Recupera o token
        const token = await tokenClient.get(ctx);

        // verifica se encontrou
        console.log(token);

        if(!token) {
            reject("usuário nao encontrado");
        }

        resolve(token);
    })
}