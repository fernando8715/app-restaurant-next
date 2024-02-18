-- CreateTable
CREATE TABLE "Factura" (
    "id" SERIAL NOT NULL,
    "dia" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "facturaId" INTEGER NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Factura_facturaId_key" ON "Factura"("facturaId");

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Orden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
