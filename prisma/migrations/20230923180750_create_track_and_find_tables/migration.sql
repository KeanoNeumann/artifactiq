-- CreateTable
CREATE TABLE "Prospection" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "Prospection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "geomn" geometry(Linestring, 3857) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "prospectionId" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Find" (
    "id" SERIAL NOT NULL,
    "geomn" geometry(Point, 3857) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "material" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "epoch" TEXT NOT NULL,
    "prospectionId" INTEGER NOT NULL,

    CONSTRAINT "Find_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Prospection" ADD CONSTRAINT "Prospection_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_prospectionId_fkey" FOREIGN KEY ("prospectionId") REFERENCES "Prospection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Find" ADD CONSTRAINT "Find_prospectionId_fkey" FOREIGN KEY ("prospectionId") REFERENCES "Prospection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
