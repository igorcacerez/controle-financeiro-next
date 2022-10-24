export async function HttpClient(url, options) {
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: options.body ? JSON.stringify(options.body) : null,
  })
    .then(async (responseServer) => {
      return {
        ok: responseServer.ok,
        status: responseServer.status,
        body: await responseServer.json()
      }
    })
}
