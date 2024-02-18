import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { formatearDinero } from "../helpers";
import ProductoOrdenado from "./ProductoOrdenado";
import axios from "axios";

const OrdenesListas = ({ orden }) => {

    const { id, nombre, fecha, pedido, total } = orden;
    const day = (new Date(+fecha).getDate()).toString();
    const month = (new Date(+fecha).getMonth() + 1).toString();
    const year = (new Date(+fecha).getFullYear()).toString();
    const h = (new Date(+fecha).getHours()).toString();
    const m = (new Date(+fecha).getMinutes()).toString();
    const hour = `${h}:${m}`

    const efectuarPago = async () => {
        try {
            await axios.post(`api/caja/id`, { id });
            await axios.post(`api/caja`, { day, month, year, hour, id })
            toast.success("Pedido cancelado con exito!", {
                autoClose: 2500,
                theme: "light",
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col bg-slate-50 my-10 last-of-type:mb-14 p-5 pb-8 gap-5 rounded-lg">
            <div>
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">Cliente: <span className="uppercase">{nombre}</span></h3>
                    <div>
                        <h3 className="text-xl font-semibold">{`Orden No.${id}`}</h3>
                        <p>{'fecha: '}
                            <span>{day}/</span>
                            <span>{month}/</span>
                            <span>{year} - </span>
                            <span>Hora: {hour}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {pedido.map(producto => (
                    <ProductoOrdenado key={producto.id} producto={producto} total={total} />
                ))}
            </div>
            <div className="md:flex justify-between items-center">
                <p className="text-2xl font-black">{`Total: ${formatearDinero(total)}`}</p>
                <button
                    className="w-full md:w-auto mt-3 md:mt-0 bg-indigo-500 hover:bg-indigo-700 py-2 px-10 rounded-lg uppercase text-white font-bold"
                    onClick={efectuarPago}
                >
                    Pagar
                </button>
            </div>

        </div>

    )
}

export default OrdenesListas