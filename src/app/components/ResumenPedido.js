'use client'

import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";


const ResumenPedido = ({ producto }) => {

    const { id, imagen, nombre, precio, cantidad } = producto;
    const { handleEditarCantidadProducto, handleEliminarProducto } = useQuiosco();

    return (
        <div className="flex gap-2 sm:gap-3 xl:gap-10 justify-around sm:justify-between items-center p-2 sm:p-5 border rounded-md shadow-md mb-5">
            <div className="w-2/6 md:w-2/6 lg:w-1/6">
                <Image
                    src={`/assets/img/${imagen}.jpg`}
                    width={300}
                    height={400}
                    alt={`Imagen del producto ${nombre}`}
                />
            </div>
            <div className="md:w-3/6 lg:w-4/6">
                <p className="text-xs sm:text-xl font-black">{nombre}</p>
                <fieldset className="mt-3" >
                    <label 
                        className="text-xs sm:text-lg font-semibold"
                        htmlFor={id}
                        >Cantidad: </label>
                    <select
                        value={cantidad}
                        id={id}
                        onChange={(e) => {
                            handleEditarCantidadProducto(e, id);
                        }}
                        className="w-20 text-center border border-slate-500 rounded-md"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </fieldset>
                <p className="text-xs sm:text-lg font-semibold text-amber-500 mt-2">Precio: {formatearDinero(precio)}</p>
                <p className="text-xs sm:text-lg font-semibold text-gray-500 mt-2">Subtotal: {formatearDinero(precio * cantidad)}</p>
            </div>
            <button
                type="button"
                className="bg-red-500 hover:bg-red-700 p-1 sm:p-2 rounded-md text-white text-xs sm:text-sm lg:text-sm font-semibold flex items-center gap-1"
                onClick={()=>handleEliminarProducto(id)}
            >
                Eliminar
            </button>
        </div>
    )
}

export default ResumenPedido