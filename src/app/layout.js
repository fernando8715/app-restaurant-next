import { Inter } from "next/font/google";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import "./globals.css";
import SideBar from "./components/SideBar";
import { QuioscoProvider } from "./context/QuioscoProvider";
import Pasos from "./components/Pasos";


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
            {children}
          </QuioscoProvider>
        </div>
      </body>
    </html>
  );
}
