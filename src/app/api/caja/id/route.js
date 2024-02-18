import { PrismaClient } from "@prisma/client";

export async function POST(req){
    const prisma = new PrismaClient();
    const datos = await req.json();

    const updateOrden = await prisma.orden.update({
        where: {
            id: datos.id
        },
        data: {
            cancelado: true
        }
    });

    return Response.json(updateOrden);
}