'use client'
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({icono:'cafe'});
    const [pedido, setPedido] = useState([]);
    const [modal, setModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);

    const router = useRouter();

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/productos');
        setCategorias(data);
        setCategoriaActual(data[0])
    }


    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        const calcularTotalPedido = pedido.reduce((total, producto) =>
            total + (producto.precio * producto.cantidad), 0);

        setTotal(calcularTotalPedido)
    }, [pedido])

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(c => c.id === id);
        setCategoriaActual(categoria[0]);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleClickAgregar = ({ categoriaId, ...producto }) => {

        if (pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado);
        } else {
            setPedido([...pedido, producto]);
        }
    }

    const handleEditarCantidadProducto = (e, id) => {
        const productoActualizado = pedido.filter(p => p.id === id)
        productoActualizado[0].cantidad = +e.target.value
        const pedidoActualizado = pedido.map(p => {
            if (p.id === productoActualizado.id) {
                return productoActualizado
            }
            return p
        })
        setPedido(pedidoActualizado);
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(p => p.id !== id);
        setPedido(pedidoActualizado);
    }

    const colocarOrden = async (e) => {
        e.preventDefault();
        // handleConfirmarPedido();
        toast.success("Pedido exitoso!", {
            autoClose: 2500,
            theme: "dark",
        });
    

        try {
            await axios.post('/api/ordenes', { pedido, nombre, total, fecha: Date.now().toString() });
            
            // Reset app
            setCategoriaActual(categorias[0]);
            setPedido([]);
            setNombre('');
            setTotal(0);

            
            setTimeout(() => {
                router.push('/cafe')
            }, 3000);

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            setCategoriaActual,
            handleClickCategoria,
            handleClickModal,
            handleClickAgregar,
            pedido,
            modal,
            handleEditarCantidadProducto,
            handleEliminarProducto,
            nombre,
            setNombre,
            colocarOrden,
            total
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider,
}

export default QuioscoContext;