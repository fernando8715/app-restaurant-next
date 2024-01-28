'use client'

import { createContext, useState } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({children})=>{

    const [productoState, setProductoState] = useState({});
    const [modal, setModal] = useState(false);

    const handleClickProducto = (producto)=>{
        setProductoState(producto)
    }

    const handleClickModal = ()=>{
        setModal(!modal);
    }

    return (
        <QuioscoContext.Provider value={{
            handleClickProducto,
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