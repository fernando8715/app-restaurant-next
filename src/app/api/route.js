import { PrismaClient } from "@prisma/client"


export async function GET() {
       
    const prisma = new PrismaClient();
    const categorias = await prisma.categoria.findMany({
        include: {
            productos: true,
        }
    });
    return Response.json(categorias)
}  
  
