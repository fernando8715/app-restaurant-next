import Image from "next/image";
import { getDataCategoriasFull } from "../../helpers/getData";

const Productos = async ({ params: { icono, id } }) => {

    const { props } = await getDataCategoriasFull();
    const { categorias } = props;
    const { productos } = categorias.find(c => c.icono === icono)
    const productoSeleccionado = productos.find(p => p.id === parseInt(id));

    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="mx-auto text-center">
                    <h2 className="text-xl md:text-4xl font-bold mb-5">{productoSeleccionado?.nombre}</h2>
                </div>
                <Image
                    alt={productoSeleccionado.nombre}
                    src={`/assets/img/${productoSeleccionado?.imagen}.jpg`}
                    width={300}
                    height={400}
                    className="aspect-square mx-auto"
                />

                <div className="bg-white text-center mt-3">
                    <p className="text-xl font-semibold">{productoSeleccionado.nombre}</p>
                </div>
            </div>

            {/* <ListaProductos productos={productos}/> */}
        </div>
    )
}

export default Productos