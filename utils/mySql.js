require('dotenv').config()


const pgUrl = process.env.DATABASE_URL

const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.USER_SQL,
    host: process.env.HOST_SQL,
    database: process.env.DATABASE_SQL,
    password: process.env.PASSWORD_SQL,
    port: process.env.PORT_SQL
});


module.exports = pool