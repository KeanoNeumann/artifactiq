-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "geom" geometry(Polygon, 3857) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
