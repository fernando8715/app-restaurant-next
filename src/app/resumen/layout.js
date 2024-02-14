import React from 'react'
import Pasos from '../components/Pasos'
import SideBar from '../components/SideBar'

const LayoutResumen = ({ children }) => {
    return (
        <>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                <SideBar />
            </aside>

            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                <div className="m-2 mt-10 sm:m-12 sm:mt-8 sm:mb-5">
                    <Pasos />
                    {children}
                </div>
            </main>
        </>
    )
}

export default LayoutResumen