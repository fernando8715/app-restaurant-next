import ListaProductos from "./components/ListaProductos"
import { Suspense } from "react"

const page = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10">Selecciona tu pedido</h1>
      <Suspense fallback={<div>Cargando</div>}>
        <ListaProductos id={1} />
      </Suspense>
    </>
  )
}

export default page