/*
  Warnings:

  - The primary key for the `errandInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `errandRequestId` on the `errandInfo` table. All the data in the column will be lost.
  - Added the required column `errandId` to the `errandInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `errandInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `errandInfo` DROP PRIMARY KEY,
    DROP COLUMN `errandRequestId`,
    ADD COLUMN `errandId` VARCHAR(200) NOT NULL,
    ADD COLUMN `userName` VARCHAR(300) NOT NULL,
    ADD PRIMARY KEY (`errandId`);
