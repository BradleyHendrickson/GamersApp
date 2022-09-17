-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL DEFAULT '',
    "description" VARCHAR(50) NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL,
    "date" TIMESTAMP(6),

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
