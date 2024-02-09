'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";


const ModalProducto = ({ producto }) => {
    const { handleClickAgregar, handleClickModal, pedido } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
      if(pedido.some(p => p.id === producto.id)){
        const productoActual = pedido.find(p => p.id === producto.id);
        setCantidad(productoActual.cantidad)
      }
    
    }, [producto, pedido])
    

    const { id, nombre, precio, imagen } = producto;

    const handleClickUpCantidad = () => {
        if (cantidad >= 10) {
            return
        }
        setCantidad(cantidad + 1)
    }

    const handleClickLessCantidad = () => {
        if (cantidad <= 1) {
            return
        }
        setCantidad(cantidad - 1)
    }


    return (
        <div className="md:flex gap-5 bg-white p-3">
            <div className="md:w-1/3">
                <Image
                    src={`/assets/img/${imagen}.jpg`}
                    alt={`Imagen del producto ${nombre}`}
                    width={300}
                    height={200}
                />
            </div>
            <div className="md:w-2/3 flex flex-col justify-evenly items-start">
                <h2 className="md:text-xl lg:text-2xl font-bold mt-0">{nombre}</h2>
                <p className="font-black lg:text-xl text-amber-500">{formatearDinero(precio)}</p>

                <div className="flex gap-5">
                    <button type="button" onClick={handleClickLessCantidad}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className="text-xl font-black">{cantidad}</p>
                    <button type="button" onClick={handleClickUpCantidad}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    className="uppercase font-bold w-full bg-amber-500 hover:bg-amber-700 p-2 text-white"
                    onClick={() => {
                        handleClickAgregar({ ...producto, cantidad })
                        handleClickModal();
                    }}
                >Añadir al pedido {/* //${edicion ? 'Guardar cambios' : 'Añadir al pedido'}  */}
                </button>
            </div>

        </div>
    )
}

export default ModalProducto