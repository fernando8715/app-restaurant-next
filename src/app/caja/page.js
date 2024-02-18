'use client'
import axios from "axios";
import useSWR from "swr";
import OrdenesListas from "../components/OrdenesListas";

function Caja() {

    const fetcher = () => axios('api/caja').then(datos => datos.data);
    const { data, error, isLoading } = useSWR('/api/caja', fetcher, { refreshInterval: 100 });

    return (
        <>
            <h1 className="text-white text-3xl font-black">Caja</h1>
            {data && data.length ? data.map(orden => (
                <OrdenesListas key={orden.id} orden={orden} />
            )) : 
                <p className="text-white md:text-xl mt-7">No hay ordenes para facturar</p>
            }

        </>
    )

}

export default Caja