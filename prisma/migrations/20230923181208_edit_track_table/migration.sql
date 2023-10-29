/*
  Warnings:

  - You are about to drop the column `geomn` on the `Track` table. All the data in the column will be lost.
  - Added the required column `geom` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "geomn",
ADD COLUMN     "geom" geometry(Linestring, 3857) NOT NULL;
