/*
  Warnings:

  - The primary key for the `errandInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `errandId` on the `errandInfo` table. All the data in the column will be lost.
  - Added the required column `id` to the `errandInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `errandInfo` DROP PRIMARY KEY,
    DROP COLUMN `errandId`,
    ADD COLUMN `id` VARCHAR(200) NOT NULL,
    ADD PRIMARY KEY (`id`);
