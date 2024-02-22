-- CreateTable
CREATE TABLE `staff` (
    `id` VARCHAR(200) NOT NULL,
    `userName` VARCHAR(300) NOT NULL,
    `firstName` VARCHAR(300) NOT NULL,
    `lastName` VARCHAR(300) NOT NULL,
    `email` VARCHAR(300) NOT NULL,
    `password` VARCHAR(300) NOT NULL,
    `address` VARCHAR(191) NULL,
    `occupation` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(200) NOT NULL,
    `userName` VARCHAR(300) NOT NULL,
    `firstName` VARCHAR(300) NOT NULL,
    `lastName` VARCHAR(300) NOT NULL,
    `email` VARCHAR(300) NOT NULL,
    `password` VARCHAR(300) NOT NULL,
    `address` VARCHAR(191) NULL,
    `occupation` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `errandInfo` (
    `errandRequestId` VARCHAR(200) NOT NULL,
    `errandDescription` VARCHAR(200) NOT NULL,
    `location` VARCHAR(200) NOT NULL,
    `amount` INTEGER NULL,

    PRIMARY KEY (`errandRequestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
