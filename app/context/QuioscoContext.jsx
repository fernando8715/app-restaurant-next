'use client'

import { useState, useEffect, createContext } from 'react'

const QuioscoContext = createContext({});


const QuioscoProvider = ({ children }) => {

    const [categoriaActual, setCategoriaActual] = useState({ id: 1, nombre: 'Café', icono: 'cafe' });

    const handleClickCategoria = (categoria) => {
        setCategoriaActual(categoria);
    }

    return (
        <QuioscoContext.Provider value={{
            categoriaActual,
            handleClickCategoria,
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext