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
                <fieldset className="mt-3">
                    <label className="text-xs sm:text-lg font-semibold">Cantidad: </label>
                    <select
                        value={cantidad}
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg> */}

                Eliminar
            </button>
        </div>
    )
}

export default ResumenPedido