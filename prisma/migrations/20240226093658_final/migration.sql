/*
  Warnings:

  - You are about to alter the column `status` on the `bids` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `bids` MODIFY `status` VARCHAR(191) NULL;
