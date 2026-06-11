const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

// OBTENER PAGOS
app.get("/pagos", (req, res) => {

    const sql = "SELECT * FROM pagos"

    db.query(sql, (err, resultado) => {

        if (err) {
            console.log(err)
            res.status(500).send("Error en la consulta")
            return
        }

        res.json(resultado)

    })

})

// AGREGAR PAGO
app.post("/pagos", (req, res) => {

    const { concepto, monto, categoria } = req.body

    const sql = `
        INSERT INTO pagos (concepto, monto, categoria)
        VALUES (?, ?, ?)
    `

    db.query(
        sql,
        [concepto, monto, categoria],
        (err, resultado) => {

            if (err) {
                console.log(err)
                res.status(500).send("Error al insertar")
                return
            }

            res.send("Pago agregado")

        }
    )

})

// ELIMINAR PAGO
app.delete("/pagos/:id", (req, res) => {

    const { id } = req.params

    const sql = "DELETE FROM pagos WHERE id = ?"

    db.query(sql, [id], (err, resultado) => {

        if (err) {
            console.log(err)
            res.status(500).send("Error al eliminar")
            return
        }

        res.send("Pago eliminado")

    })

})

// ACTUALIZAR PAGO
app.put("/pagos/:id", (req, res) => {

    const { id } = req.params

    const {
        concepto,
        monto,
        categoria
    } = req.body

    const sql = `
        UPDATE pagos
        SET concepto = ?, monto = ?, categoria = ?
        WHERE id = ?
    `

    db.query(
        sql,
        [concepto, monto, categoria, id],
        (err, resultado) => {

            if (err) {
                console.log(err)
                res.status(500).send("Error al actualizar")
                return
            }

            res.send("Pago actualizado")

        }
    )

})

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})