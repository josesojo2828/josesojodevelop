-- CreateTable
CREATE TABLE "Vlog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagePath" JSONB NOT NULL,
    "title" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "linkToGithub" TEXT,
    "linkToX" TEXT,
    "linkToTiktok" TEXT,
    "linkToFacebook" TEXT,
    "linkToLinkeind" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "project" BOOLEAN NOT NULL DEFAULT false,
    "primary" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME
);

-- CreateTable
CREATE TABLE "About" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT,
    "phone" TEXT,
    "location" TEXT,
    "linkedin" TEXT,
    "x" TEXT,
    "facebook" TEXT,
    "github" TEXT,
    "tiktok" TEXT,
    "instagram" TEXT,
    "website" TEXT,
    "presentationSkils" JSONB
);

-- CreateTable
CREATE TABLE "VlogSkill" (
    "vlogId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    PRIMARY KEY ("vlogId", "skillId"),
    CONSTRAINT "VlogSkill_vlogId_fkey" FOREIGN KEY ("vlogId") REFERENCES "Vlog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VlogSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExperienceSkill" (
    "experienceId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    PRIMARY KEY ("experienceId", "skillId"),
    CONSTRAINT "ExperienceSkill_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExperienceSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);
