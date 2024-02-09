'use client'

import ResumenPedido from "../components/ResumenPedido";
import useQuiosco from "../hooks/useQuiosco"

function Resumen() {

    const {pedido} = useQuiosco();

  return (
    <>
      <h2 className="text-2xl font-bold mb-10">Resumen del pedido</h2>
      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay productos en tu pedido</p>
      ) : (
        pedido.map(producto=>(
          <ResumenPedido 
            key={producto.id} 
            producto={producto}
          />
        ))

      )}
    </>
  )
}

export default Resumen