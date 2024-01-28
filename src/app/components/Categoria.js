'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Categoria = ({ categoria }) => {

    const { id, nombre, icono } = categoria;
    const pathname = usePathname();

    const active = pathname === `/productos/${icono}`;

    return (
        <>
            <Link
                className={`flex items-center border gap-5 p-3 hover:bg-amber-400 text-lg lg:text-xl font-bold ${active ? 'bg-amber-400' : ''}`}
                href={`/productos/${icono}`}
            >
                <Image
                    src={`/assets/img/icono_${icono}.svg`}
                    alt={`icono del producto ${nombre}`}
                    width={50}
                    height={50}
                />
                {nombre}
            </Link>
        </>
    )
}

export default Categoria
