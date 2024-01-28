'use client'
import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {

  const { nombre, precio, imagen } = producto;
  const { handleClickProducto, handleClickModal, modal } = useQuiosco();

  return (
    <div className="border p-3 h-max-fit">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`icono del producto ${nombre}`}
        width={280}
        height={400}
      />
      <p className="md:text-lg font-bold mt-2">{nombre}</p>
      <p className="text-lg lg:text-xl font-black text-amber-500 mt-5">{formatearDinero(precio)}</p>

      <button
        type="button"
        className="w-full mt-5 p-1 md:p-2 lg:p-3 text-white md:text-lg font-bold uppercase bg-sky-500 hover:bg-sky-700"
        onClick={() => {
          handleClickProducto(producto)
          handleClickModal()
        }
        }
      >
        Agregar
      </button>
    </div>
  )
}

export default Producto