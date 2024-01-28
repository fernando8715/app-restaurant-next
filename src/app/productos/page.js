import ListaProductos from "@/app/components/ListaProductos"
import { Suspense } from "react"


const page = () => {
  return (
    <Suspense fallback={<div>Cargando</div>}>
      <ListaProductos id={1} />
    </Suspense>
  )
}

export default page