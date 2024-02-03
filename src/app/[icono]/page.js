import ListaProductos from "../components/ListaProductos";
import { getDataCategorias, getDataCategoriasFull } from "../helpers/getData";

export async function generateMetadata({ params: { icono } }) {
    const { props } = await getDataCategorias();
    const { categorias } = props;

    const categoria = categorias.find(c => c.icono === icono);
    const producto = categoria.nombre

    return {
        title: `Coffe shop - ${producto}`
    }
}

const Categoria = async ({ params: { icono } }) => {

    const { props } = await getDataCategoriasFull();
    const { categorias } = props;
    const categoria = categorias.find(c => c.icono === icono);

    return (
        <>
            <h1 className="text-4xl font-bold mb-10">Selecciona tu pedido</h1>
            <ListaProductos productos={categoria.productos} />
        </>
    )
}

export default Categoria