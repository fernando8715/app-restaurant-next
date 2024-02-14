'use client'
import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import Link from "next/link";

// configurar el modal

const Producto = ({ producto }) => {

  const { categoriaActual} = useQuiosco();
  const { icono } = categoriaActual;
  const { id, nombre, precio, imagen } = producto;


  return (
    <div className="border p-3 h-max-fit mx-auto shadow-lg">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`icono del producto ${nombre}`}
        width={200}
        height={400}
      />
      <div className="flex flex-col">
        <p className="md:text-lg font-bold mt-2">{nombre}</p>
        <p className="text-lg lg:text-xl font-black text-amber-500 mt-5">{formatearDinero(precio)}</p>

        <Link
          href={`${icono}/${id}`}
          type="button"
          className="w-full mt-5 p-1 md:p-2 text-center text-white md:text-lg font-bold uppercase bg-sky-500 hover:bg-sky-700 rounded-sm"
        >
          <button >
            Agregar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Producto