import ModalProducto from "@/src/app/components/ModalProducto";
import Modal from "@/src/app/components/modalPrueba";
import { getDataCategoriasFull } from "@/src/app/helpers/getData";

export default async function ProductoModal({ params: { icono, id } }) {
    const { props } = await getDataCategoriasFull();
    const { categorias } = props;
    const { productos } = categorias.find(c => c.icono === icono);
    const productoSeleccionado = productos.find(p => p.id === parseInt(id));

    return (
        <Modal>
            <ModalProducto producto={productoSeleccionado}/>
        </Modal>
    );
}
