-- CreateTable
CREATE TABLE "EmailIngestionConfig" (
    "id" SERIAL NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "connectionType" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailIngestionConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PdfAttachment" (
    "id" SERIAL NOT NULL,
    "emailConfigId" INTEGER NOT NULL,
    "fromAddress" TEXT NOT NULL,
    "dateReceived" TIMESTAMP(3) NOT NULL,
    "subject" TEXT NOT NULL,
    "attachmentName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "PdfAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailIngestionConfig_emailAddress_key" ON "EmailIngestionConfig"("emailAddress");

-- AddForeignKey
ALTER TABLE "PdfAttachment" ADD CONSTRAINT "PdfAttachment_emailConfigId_fkey" FOREIGN KEY ("emailConfigId") REFERENCES "EmailIngestionConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
