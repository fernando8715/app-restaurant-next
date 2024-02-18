import { PrismaClient } from "@prisma/client";

export async function GET() {
    const prisma = new PrismaClient();
    const ordenes = await prisma.orden.findMany({
        where: {
            estado: true,
            cancelado: false,
        }
    })

    return Response.json(ordenes)
}

export async function POST(req) {
    const prisma = new PrismaClient();
    const datos = await req.json();

    const crearFactura = await prisma.factura.create({
        data: {
            dia: datos.day,
            mes: datos.month,
            year: datos.year,
            hora: datos.hour,
            ordenId: datos.id
        }
    })

    return Response.json(crearFactura)
}