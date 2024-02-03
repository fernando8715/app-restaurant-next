'use client'

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({children})=>{

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({id:1, nombre: 'Café', icono:'cafe'});
    const [modal, setModal] = useState(false);

    const obtenerCategorias = async()=>{
        const {data} = await axios('/api');
        setCategorias(data);
        // setCategoriaActual(data[0])
    }

    useEffect(()=>{
        obtenerCategorias();
    }, [])


    const handleClickCategoria = (id)=>{
        const categoria = categorias.filter(c => c.id === id);
        setCategoriaActual(categoria[0]);
    }

    const handleClickModal = ()=>{
        setModal(!modal);
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleClickModal,
            modal,
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider,
}

export default QuioscoContext;