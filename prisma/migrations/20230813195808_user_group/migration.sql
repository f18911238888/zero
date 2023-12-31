-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('READ_ONLY', 'WRITE', 'ADMINISTRATIVE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userGroupId" INTEGER;

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "maxNetworks" INTEGER NOT NULL DEFAULT 5,
    "accessLevel" "AccessLevel" NOT NULL DEFAULT 'WRITE',
    "isDefault" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_name_key" ON "UserGroup"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
