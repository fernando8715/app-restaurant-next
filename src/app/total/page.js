'use client'
import { useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";


const Total = () => {

  const { pedido, colocarOrden, confirmarPedido, nombre, setNombre, total } = useQuiosco();
  
  const comprobarPedido = ()=> {
    return pedido.length === 0 || nombre === '' || nombre.length < 3;
    // return pedido.length === 0 || confirmarPedido || nombre === '' || nombre.length < 3;
  }

  useEffect(()=>{
    comprobarPedido();
  }, [pedido])

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-black mb-5">Confirmar pedido</h1>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block text-lg md:text-xl text-slate-800 w-1/3">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            className="w-full lg:w-4/6 xl:w-2/4 bg-gray-200 rounded-md p-2 mt-2" />
        </div>
        <div className="mt-10">
          <p className="text-2xl font-semibold">Total a pagar: {" "}
            <span className="text-amber-600 font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <input 
          type="submit"
          value='confirmar pedido'
          className={`${comprobarPedido() ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer' } w-full lg:w-auto mt-6 px-5 py-2 rounded-md uppercase text-base lg:text-lg font-bold text-white text-center`}
          disabled = {comprobarPedido()}
          />
      </form>
    </>
  )
}

export default Total