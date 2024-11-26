-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "xcoordinate" INTEGER NOT NULL,
    "ycoordinate" INTEGER NOT NULL,
    "imageid" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "name" TEXT,
    "imageid" INTEGER NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_imageid_fkey" FOREIGN KEY ("imageid") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_imageid_fkey" FOREIGN KEY ("imageid") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
