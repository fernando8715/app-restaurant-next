'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

const pasos = [
    { paso: 1, nombre: 'Menú', url: '/cafe' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 3, nombre: 'Datos y total', url: '/total' },
]


const Pasos = () => {

    const path = usePathname();

    let progreso = 0;

    switch (path) {
        case '/cafe':
            progreso = 10;
            break;
        case '/resumen':
            progreso = 55;
            break;
        case '/total':
            progreso = 100;
            break;
        default:
            progreso = 10;
            break;
    }


    return (
        <>
            <div className="flex justify-between mb-1">
                {pasos.map(paso => {

                    return (
                        <Link
                            className="sm:text-sm md:text-base lg:text-xl font-semibold md:font-bold"
                            key={paso.paso}
                            href={paso.url}
                        >
                            {paso.nombre}
                        </Link>
                    )
                })}
            </div>
            <div className="rounded-full bg-amber-500 h-2 mb-5 lg:mb-10" style={{ width: `${progreso}%` }}></div>
        </>
    )
}

export default Pasos