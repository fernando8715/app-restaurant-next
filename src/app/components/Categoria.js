'use client'
import Image from "next/image";
import Link from "next/link";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {

    const { id, nombre, icono } = categoria;
    const { categoriaActual, handleClickCategoria } = useQuiosco();

    return (
        <>
            <Link
                href={`/${icono}`}
            >
                <button
                    type="button"
                    onClick={() => handleClickCategoria(id)}
                    className={`flex w-full items-center border gap-5 p-3 hover:bg-amber-400 text-lg lg:text-xl font-bold ${categoriaActual.id === id ? 'bg-amber-400' : ''} `}
                >
                    <Image
                        src={`/assets/img/icono_${icono}.svg`}
                        alt={`icono del producto ${nombre}`}
                        width={50}
                        height={50}
                    />
                    {nombre}
                </button>

            </Link>
        </>
    )
}

export default Categoria
