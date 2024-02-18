'use client'

import axios from "axios";
import useSWR from "swr";
import Orden from "../components/Orden";

const Admin = () => {

  const fetcher = () => axios('api/ordenes').then(datos => datos.data);
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, { refreshInterval: 100 });

  return (
    <>
      <h1 className="font-bold text-2xl md:text-4xl text-white">Pedidos</h1>

      {data && data.length ? data.map(orden => (
        <Orden
          key={orden.id}
          orden={orden}
        />
      )) : <p className="text-white text-base mt-7"> No hay ordenes pendientes</p>}

    </>
  )
}

export default Admin