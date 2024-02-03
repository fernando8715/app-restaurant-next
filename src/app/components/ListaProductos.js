import Producto from "./Producto";

const ListaProductos = async ({productos}) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {productos?.map((producto) => (
                    <Producto
                        key={producto.id}
                        producto={producto} />
                ))}
            </div>
        </>
    )
}

export default ListaProductos