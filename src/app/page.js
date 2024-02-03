import { Suspense } from "react"
import { getDataCategoriasFull } from "./helpers/getData";
import ListaProductos from "./components/ListaProductos";

const page = async() => {

  const {props} = await getDataCategoriasFull();
  const {categorias} = props;

  return (
    <>
      <h1 className="text-4xl font-bold mb-10">Selecciona tu pedido</h1>
        
      <Suspense fallback={<div>Cargando</div>}>
        <ListaProductos productos = {categorias[0].productos}/>
      </Suspense>
    </>
  )
}

export default page