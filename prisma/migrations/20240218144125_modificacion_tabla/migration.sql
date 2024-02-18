/*
  Warnings:

  - You are about to drop the column `facturaId` on the `Factura` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ordenId]` on the table `Factura` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ordenId` to the `Factura` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_facturaId_fkey";

-- DropIndex
DROP INDEX "Factura_facturaId_key";

-- AlterTable
ALTER TABLE "Factura" DROP COLUMN "facturaId",
ADD COLUMN     "ordenId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Factura_ordenId_key" ON "Factura"("ordenId");

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES "Orden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
