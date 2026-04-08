/*
  Warnings:

  - You are about to drop the `cast_member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cast_member" DROP CONSTRAINT "cast_member_mediaId_fkey";

-- DropTable
DROP TABLE "cast_member";

-- CreateTable
CREATE TABLE "actor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_cast" (
    "id" TEXT NOT NULL,
    "mediaId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "character" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "media_cast_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "media_cast_mediaId_idx" ON "media_cast"("mediaId");

-- CreateIndex
CREATE INDEX "media_cast_actorId_idx" ON "media_cast"("actorId");

-- CreateIndex
CREATE UNIQUE INDEX "media_cast_mediaId_actorId_character_key" ON "media_cast"("mediaId", "actorId", "character");

-- AddForeignKey
ALTER TABLE "media_cast" ADD CONSTRAINT "media_cast_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_cast" ADD CONSTRAINT "media_cast_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
