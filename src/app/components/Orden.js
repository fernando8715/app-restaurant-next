import Image from "next/image";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatearDinero } from "../helpers";

const Orden = ({ orden }) => {

    const { id, nombre, pedido, total } = orden;

    const completarOrden = async () => {
        try {
            await axios.post('api/ordenes/id', { id });
            toast.success("Pedido despachado!", {
                autoClose: 2500,
            });;
        } catch (error) {
            toast.error('hubo un error');
        }
    }

    return (
        <div className="flex flex-col my-10 p-5 bg-white rounded-lg space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold">Orden: {id}</h3>
            <p className="text-xl lg:text-2xl font-bold">Cliente: <span className="uppercase">{nombre}</span></p>

            <div>
                {pedido.map(producto => (
                    <div key={producto.id} className="flex py-3 border-b-2 last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image
                                src={`/assets/img/${producto.imagen}.jpg`}
                                width={150}
                                height={150}
                                alt={`imagen del producto ${producto.nombre}`}
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <p className="text-lg md:text-xl lg:text-2xl font-bold text-amber-500">{producto.nombre}</p>
                            <p className="font-bold md:text-xl xl::text-2xl">Cantidad: {producto.cantidad}</p>
                        </div>
                    </div>
                ))}
                <div className="flex items-center justify-between mt-2">
                    <p className="text-lg md:text-xl">Total a pagar: <span className="font-bold">{formatearDinero(total)}</span></p>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-700 py-2 px-5 rounded-lg font-bold uppercase text-white"
                        type="button"
                        onClick={() => {
                            completarOrden();
                        }}
                    >Despachar orden</button>
                </div>

            </div>
        </div>
    )
}

export default Orden