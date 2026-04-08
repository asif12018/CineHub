/*
  Warnings:

  - You are about to drop the column `subscriptionId` on the `purchase` table. All the data in the column will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription_plan_config` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mediaId` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PurchaseType" ADD VALUE 'RENTAL';
ALTER TYPE "PurchaseType" ADD VALUE 'ONE_TIME_BUY';

-- DropForeignKey
ALTER TABLE "purchase" DROP CONSTRAINT "purchase_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "subscription" DROP CONSTRAINT "subscription_userId_fkey";

-- AlterTable
ALTER TABLE "media" ADD COLUMN     "buyPrice" DECIMAL(10,2),
ADD COLUMN     "rentPrice" DECIMAL(10,2),
ALTER COLUMN "status" SET DEFAULT 'PUBLISHED';

-- AlterTable
ALTER TABLE "purchase" DROP COLUMN "subscriptionId",
ADD COLUMN     "accessExpiresAt" TIMESTAMP(3),
ADD COLUMN     "mediaId" TEXT NOT NULL;

-- DropTable
DROP TABLE "subscription";

-- DropTable
DROP TABLE "subscription_plan_config";

-- CreateIndex
CREATE INDEX "purchase_mediaId_idx" ON "purchase"("mediaId");

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "media"("id") ON DELETE CASCADE ON UPDATE CASCADE;
