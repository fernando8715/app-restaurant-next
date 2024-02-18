import { Inter } from "next/font/google";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import "./globals.css";
import { QuioscoProvider } from "./context/QuioscoProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffe shop - Café",
  description: "Proyecto Full-Stack creado con React, Next.js, Tailwind CSS, Prisma, Postgres, SWR para manejar los datos actualizados y libreria de componentes de headlessUI y MUI - Proyecto desarrollado en el curso de React con el profesor Juan de la Torre (Udemy)",
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
