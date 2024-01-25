'use client'

import useQuiosco from "./hooks/useQuiosco";

export default function Home() {

  const { categoriaActual } = useQuiosco();
  console.log(categoriaActual);

  return (
    <>
      <h1 className="text-5xl font-bold mb-3">{categoriaActual.nombre}</h1>
      <p className="text-2xl">Selecciona tu pedido</p>
    </>
  );
}

