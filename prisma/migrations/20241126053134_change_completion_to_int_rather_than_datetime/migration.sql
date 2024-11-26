/*
  Warnings:

  - You are about to drop the column `completedAt` on the `Score` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Score" DROP COLUMN "completedAt",
ADD COLUMN     "completionTime" INTEGER;
