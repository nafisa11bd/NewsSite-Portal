/*
  Warnings:

  - Added the required column `keywords` to the `news_list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `news_list` ADD COLUMN `keywords` VARCHAR(100) NOT NULL;
