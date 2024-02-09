import Producto from "./Producto";

const ListaProductos = async ({ productos }) => {

    return (
        <>
            <h1 className="text-lg md:text-2xl font-bold mb-2">Selecciona tu pedido</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
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