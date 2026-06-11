import { useState, useEffect } from "react"

function App() {

  const [concepto, setConcepto] = useState("")
  const [monto, setMonto] = useState("")
  const [categoria, setCategoria] = useState("")
  const [pagos, setPagos] = useState([])
  const [editando, setEditando] = useState(false)
  const [idEditar, setIdEditar] = useState(null)

  // OBTENER PAGOS
  const obtenerPagos = async () => {

    try {

      const respuesta = await fetch(
        "http://localhost:3000/pagos"
      )

      const data = await respuesta.json()

      setPagos(data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    obtenerPagos()

  }, [])

  // AGREGAR O ACTUALIZAR
  const guardarPago = async () => {

    if (!concepto || !monto || !categoria) return

    const nuevoPago = {
      concepto,
      monto,
      categoria
    }

    try {

      // ACTUALIZAR
      if (editando) {

        await fetch(
          `http://localhost:3000/pagos/${idEditar}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoPago)
          }
        )

        setEditando(false)
        setIdEditar(null)

      } else {

        // CREAR
        await fetch(
          "http://localhost:3000/pagos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoPago)
          }
        )

      }

      obtenerPagos()

      setConcepto("")
      setMonto("")
      setCategoria("")

    } catch (error) {

      console.log(error)

    }

  }

  // ELIMINAR
  const eliminarPago = async (id) => {

    try {

      await fetch(
        `http://localhost:3000/pagos/${id}`,
        {
          method: "DELETE"
        }
      )

      obtenerPagos()

    } catch (error) {

      console.log(error)

    }

  }

  // EDITAR
  const editarPago = (pago) => {

    setConcepto(pago.concepto)
    setMonto(pago.monto)
    setCategoria(pago.categoria)

    setEditando(true)
    setIdEditar(pago.id)

  }

  // TOTAL
  const total = pagos.reduce((acc, pago) => {
    return acc + Number(pago.monto)
  }, 0)

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h1 className="text-center mb-4">
          Gestor de Pagos
        </h1>

        {/* INPUT CONCEPTO */}
        <div className="mb-3">

          <input
            type="text"
            placeholder="Concepto"
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
            className="form-control"
          />

        </div>

        {/* INPUT MONTO */}
        <div className="mb-3">

          <input
            type="number"
            placeholder="Monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="form-control"
          />

        </div>

        {/* SELECT */}
        <div className="mb-3">

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="form-select"
          >

            <option value="">
              Selecciona una categoría
            </option>

            <option value="Comida">
              Comida
            </option>

            <option value="Transporte">
              Transporte
            </option>

            <option value="Internet">
              Internet
            </option>

            <option value="Escuela">
              Escuela
            </option>

          </select>

        </div>

        {/* BOTON */}
        <button
          onClick={guardarPago}
          className={`btn w-100 ${
            editando
              ? "btn-warning"
              : "btn-primary"
          }`}
        >

          {
            editando
              ? "Actualizar Pago"
              : "Agregar Pago"
          }

        </button>

        <hr />

        {/* TOTAL */}
        <h2 className="text-center mb-4">
          Total: ${total}
        </h2>

        {/* LISTA */}
        {
          pagos.map((pago) => (

            <div
              key={pago.id}
              className="card mb-3 p-3"
            >

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h5>
                    {pago.concepto}
                  </h5>

                  <p className="mb-1">
                    ${pago.monto}
                  </p>

                  <span className="badge bg-secondary">
                    {pago.categoria}
                  </span>

                </div>

                <div className="d-flex gap-2">

                  <button
                    onClick={() => editarPago(pago)}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => eliminarPago(pago.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default App