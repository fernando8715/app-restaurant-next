import { PrismaClient } from '@prisma/client'

export const getData = async () => {
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
