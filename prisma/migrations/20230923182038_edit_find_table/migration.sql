/*
  Warnings:

  - You are about to alter the column `material` on the `Find` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `epoch` on the `Find` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Find" ALTER COLUMN "material" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "epoch" SET DATA TYPE VARCHAR(255);
