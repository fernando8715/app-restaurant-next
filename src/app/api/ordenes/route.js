import { PrismaClient } from "@prisma/client"


export async function POST(req) {
    const prisma = new PrismaClient();
    const datos = await req.json();

    const orden = await prisma.orden.create({
        data: {
            nombre: datos.nombre,
            fecha: datos.fecha,
            total: datos.total,
            pedido: datos.pedido,
        }
    })

    return Response.json(orden);
}  
