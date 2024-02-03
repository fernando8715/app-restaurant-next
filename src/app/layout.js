import { Inter } from "next/font/google";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import "./globals.css";
import SideBar from "./components/SideBar";
import { QuioscoProvider } from "./context/QuioscoProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffe shop - Café",
  description: "Proyecto Full-Stack creado con React, Next.js, Tailwind CSS, Prisma, Postgres y libreria de componentes de headlessui - Proyecto desarrollado en el curso de React con el profesor Juan de la Torre (Udemy)",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='md:flex'>
          <QuioscoProvider>
              <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                <SideBar />
              </aside>

            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
              <div className="m-10">
                {children}
              </div>
            </main>
          </QuioscoProvider>
        </div>
      </body>
    </html>
  );
}
