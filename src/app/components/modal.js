'use client'

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Modal = () => {

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal &&
        <dialog className="fixed left-0 top-1/2 bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center ">
          <div className="bg-white m-auto p-8">
            <div className="flex flex-col items-center">
              <h3>Contenido del modal</h3>
              <br />
              <Link href={pathname}>
                <button type="button" className="bg-red-500 text-white p-2">Cerrar Modal</button>
              </Link>
            </div>
          </div>
        </dialog>
      }
    </>
  )
}

export default Modal