/*
  Warnings:

  - You are about to alter the column `amount` on the `errandInfo` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - Added the required column `ownerId` to the `errandInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `errandInfo` ADD COLUMN `ownerId` VARCHAR(191) NOT NULL,
    MODIFY `amount` DECIMAL(65, 30) NULL;

-- CreateTable
CREATE TABLE `bids` (
    `id` VARCHAR(200) NOT NULL,
    `errandId` VARCHAR(191) NOT NULL,
    `artisanId` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
