import { PrismaClient } from "@prisma/client";


export async function GET() {
    const prisma = new PrismaClient();
    const facturas = await prisma.factura.findMany({
        include: {
            orden: true,
        }
    })
  
  return Response.json(facturas)
}
