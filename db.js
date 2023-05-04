const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "sugun",
  host: "localhost",
  port: 5432,
  database: "fatma",
});

module.exports = pool