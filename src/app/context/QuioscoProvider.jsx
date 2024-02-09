'use client'

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({ id: 1, nombre: 'Café', icono: 'cafe' });
    const [pedido, setPedido] = useState([]);
    const [modal, setModal] = useState(false);

    const obtenerCategorias = async () => {
        const { data } = await axios('/api');
        setCategorias(data);
        setCategoriaActual(data[0])
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])


    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(c => c.id === id);
        setCategoriaActual(categoria[0]);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleClickAgregar = ({categoriaId, ...producto }) => {

        if(pedido.some(productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado);
        }else {
            setPedido([...pedido, producto]);
        }
    }

    const handleEditarCantidadProducto = (e, id)=>{
        const productoActualizado = pedido.filter(p => p.id === id)
        productoActualizado[0].cantidad = +e.target.value
        const pedidoActualizado = pedido.map(p=> {
            if(p.id === productoActualizado.id){
                return productoActualizado
            }
            return p
        })
        setPedido(pedidoActualizado);
    }

    const handleEliminarProducto = (id)=> {
        const pedidoActualizado = pedido.filter(p => p.id !== id);
        setPedido(pedidoActualizado);
    }


    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleClickModal,
            handleClickAgregar,
            pedido,
            modal,
            handleEditarCantidadProducto,
            handleEliminarProducto,
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider,
}

export default QuioscoContext;