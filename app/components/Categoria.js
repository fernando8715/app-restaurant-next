'use client'
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {

    const { id, nombre, icono } = categoria;
    const {categoriaActual, handleClickCategoria} = useQuiosco();

    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center border gap-5 p-5 hover:bg-amber-400`}>
            <Image 
                src={`/assets/img/icono_${icono}.svg`}
                alt={`icono del producto ${nombre}`}
                width={70}
                height={70}
            />

            <button 
                type="button"
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={()=>handleClickCategoria(categoria)}
            >
                {nombre}
            </button>

        </div>
    )
}

export default Categoria
