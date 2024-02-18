import Image from "next/image"
import { ToastContainer} from 'react-toastify';



export const metadata = {
  title: "Coffe shop - Caja",
  // description: "Proyecto Full-Stack creado con React, Next.js, Tailwind CSS, Prisma, Postgres y libreria de componentes de headlessui - Proyecto desarrollado en el curso de React con el profesor Juan de la Torre (Udemy)",
};


const LayoutCaja = ({children}) => {
  return (
    <>
      <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 bg-gray-50 '>
        <div >
          <div className='flex justify-center my-7'>
            <Image
              src="/assets/img/logo.svg"
              alt="Imagen logotipo de coffee shop"
              width={200}
              height={100}
              style={{ width: 250, height: 200 }}
            />
          </div>
        </div>
      </aside>

      <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll bg-zinc-900'>
        <div className="m-2 mt-10 sm:m-12 sm:mt-8 sm:mb-5 px-3 sm:px-0">
          {children}
        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default LayoutCaja