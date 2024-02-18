import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from "../components/Pasos";
import SideBar from "../components/SideBar";

export default function Layout({ modal, children }) {
  return (
    <>
      <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
        <SideBar />
      </aside>

      <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
        <div className="m-2 mt-10 sm:m-12 sm:mt-8 sm:mb-5">
          <Pasos />
          {modal}
          {children}
        </div>
        <ToastContainer />
      </main>
    </>
  );
}