const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'Rino1937',
    database: 'person_database',
    host: 'localhost',
    port: 5432
})

module.exports = pool

