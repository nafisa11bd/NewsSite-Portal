/*
  Warnings:

  - Added the required column `long_des` to the `news_list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `news_list` ADD COLUMN `long_des` LONGTEXT NOT NULL,
    MODIFY `keywords` VARCHAR(300) NOT NULL;
