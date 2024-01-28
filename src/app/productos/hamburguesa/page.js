import ListaProductos from "../../components/ListaProductos"
import { Suspense } from "react"


const page = () => {
  return (
    <Suspense fallback={<div>Cargando</div>}>
      <ListaProductos id={2} />
    </Suspense>
  )
}

export default page