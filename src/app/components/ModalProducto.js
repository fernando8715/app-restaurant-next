import Image from "next/image"
import { formatearDinero } from "../helpers";


const ModalProducto = ({producto}) => {
    
    const {id, nombre, precio, imagen} = producto;

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image 
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen del producto ${nombre}`}
                width={600}
                height={800}
            />
        </div>
        <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mt-5">{nombre}</h2>
            <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
        </div>

    </div>
  )
}

export default ModalProducto