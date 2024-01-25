import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import { getData } from "./helpers/getData";
import { QuioscoProvider } from "./context/QuioscoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffe shop",
  description: "Proyecto Full-Stack creado con React, Next.js, Tailwind CSS, Prisma, Postgres y libreria de componentes de headlessui - Proyecto desarrollado en el curso de React con el profesor Juan de la Torre (Udemy)",
};

const { props } = await getData();
const { categorias } = props;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuioscoProvider>
          <div className='md:flex'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
              <SideBar categorias={categorias} />
            </aside>

            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
              <div className="m-10">
                {children}
              </div>
            </main>
          </div>
        </QuioscoProvider>
      </body>
    </html>
  );
}
