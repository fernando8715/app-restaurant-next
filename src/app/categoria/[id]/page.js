import ListaProductos from "../../components/ListaProductos";
import { getDataCategoriasId, getDataProductos } from "../../helpers/getData";

export async function generateMetadata({params: {id}}){
    const {props} = await getDataCategoriasId(id);
    const {categorias} = props;
    const producto = categorias[id-1].nombre 
    
    return {
    title: `Coffe shop - ${producto}`
    }
}

const page = async ({ params }) => {

    const { props } = await getDataProductos(+params.id);
    const { productos } = props;

    return (
        <>
            <h1 className="text-4xl font-bold mb-10">Selecciona tu pedido</h1>
                <ListaProductos productos={productos}/>
        </>
    )
}

export default page