/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "expiresAt";

-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);
