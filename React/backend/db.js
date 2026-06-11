const db = require("./db")
const mysql = require("mysql2")

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mariadb",
    database: "pagos_app",
    port: 3307
})

conexion.connect((err) => {

    if (err) {
        console.log("Error de conexión")
        console.log(err)
        return
    }

    console.log("MariaDB conectada")
})

module.exports = conexion