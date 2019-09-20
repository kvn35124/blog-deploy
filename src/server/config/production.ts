export default {

    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_SCHEMA
    },

    auth: {
        secret: process.env.SECRET
    },

    keys: {
        stripe: process.env.STRIPE
    },

    mailgun: {
        apiKey: process.env.APIKEY,
        domain: process.env.DOMAIN
    }
}