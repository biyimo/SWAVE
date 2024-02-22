/*
  Warnings:

  - You are about to drop the column `errandId` on the `bids` table. All the data in the column will be lost.
  - Added the required column `errandDescription` to the `bids` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bids` DROP COLUMN `errandId`,
    ADD COLUMN `errandDescription` VARCHAR(200) NOT NULL,
    MODIFY `artisanId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `errandInfo` MODIFY `ownerId` VARCHAR(191) NULL;
