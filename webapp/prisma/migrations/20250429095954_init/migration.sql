-- CreateTable
CREATE TABLE "Note" (
    "id" UUID NOT NULL,
    "titel" VARCHAR(64) NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "creationDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Note_id_key" ON "Note"("id");
