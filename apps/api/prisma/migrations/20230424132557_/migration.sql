/*
  Warnings:

  - Added the required column `updatedAt` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Challenge" ADD COLUMN     "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMPTZ(3) NOT NULL;

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "challengeId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
