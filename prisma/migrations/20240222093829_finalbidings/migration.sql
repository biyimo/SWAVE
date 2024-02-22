/*
  Warnings:

  - Added the required column `errandId` to the `bids` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `bids` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bids` ADD COLUMN `errandId` VARCHAR(200) NOT NULL,
    ADD COLUMN `status` VARCHAR(200) NOT NULL;
