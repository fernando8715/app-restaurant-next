import { PrismaClient } from '@prisma/client'

export const getDataCategoriasFull = async () => {
    const prisma = new PrismaClient();
    try {
        const categorias = await prisma.categoria.findMany({
            include: {
                productos: true,
            }
        });
        return {
            props: {
                categorias,
            },
        }
    } catch (error) {
        console.log(error);
    }
}

export const getDataCategorias = async () => {
    const prisma = new PrismaClient();
    try {
        const categorias = await prisma.categoria.findMany();
        return {
            props: {
                categorias,
            },
        }
    } catch (error) {
        console.log(error);
    }
}

export const getDataCategoriasId = async (id) => {
    const prisma = new PrismaClient();
    try {
        const categorias = await prisma.categoria.findMany();
        return {
            props: {
                categorias,
            },
        }
    } catch (error) {
        console.log(error);
    }
}

export const getDataProductos = async(id)=>{
    const prisma = new PrismaClient();
    try {
        const productos = await prisma.producto.findMany({
            where: {
                categoriaId: id,
            }
        });
        return {
            props: {
                productos,
            },
        }
    } catch (error) {
        console.log(error);
    }
}

