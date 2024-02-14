import Image from "next/image";
import { getDataCategoriasFull } from "../../helpers/getData";
import ModalProducto from "../../components/ModalProducto";

const Productos = async ({ params: { icono, id } }) => {

    const { props } = await getDataCategoriasFull();
    const { categorias } = props;
    const { productos } = categorias.find(c => c.icono === icono)
    const productoSeleccionado = productos.find(p => p.id === parseInt(id));

    return (

        <ModalProducto producto={productoSeleccionado} />
    )
}

export default Productos