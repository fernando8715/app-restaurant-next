
const layout = ({ children }) => {
    return (
        <>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10">Selecciona tu pedido</h1>
            <div>
                {children}
            </div>
        </>
    )
}

export default layout