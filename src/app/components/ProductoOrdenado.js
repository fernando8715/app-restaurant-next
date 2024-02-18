import Image from "next/image"
import { formatearDinero } from "../helpers"

const ProductoOrdenado = ({ producto }) => {

    const { cantidad, nombre, precio, imagen } = producto
    return (
        <div className="flex gap-3 items-center border-gray-600 border-b-2 last-of-type:border-b-0">
            <div>
                <Image
                    src={`/assets/img/${imagen}.jpg`}
                    width={100}
                    height={100}
                    alt={`Imagen del producto ${nombre}`}
                />
            </div>
            <div>
                <p className="text-lg font-semibold text-amber-500">Producto: {nombre}</p>
                <p >Cantidad: {cantidad}</p>
                <p >Precio und: {formatearDinero(precio)}</p>
            </div>
        </div>
    )
}

export default ProductoOrdenado