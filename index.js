// @ts-check
const URL = require('url')

module.exports = function uri2knex(uri) {
    const data = URL.parse(uri)
    /**
     * @type {Knex.MsSqlConnectionConfig}
     */
    const config = {
        host: data.hostname,
        port: parseInt(data.port),
        user: data.auth.split(':')[0],
        password: data.auth.split(':')[1],
        database: data.pathname.replace('/', ''),
        options: { appName: 'cobranzas-api' }
    }
    return config
}
