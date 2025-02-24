// pages/api/email-ingestion/config.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { emailAddress, connectionType, username, password, host, port } = req.body;

    try {
      const config = await prisma.emailIngestionConfig.create({
        data: {
          emailAddress,
          connectionType,
          username,
          password,
          host,
          port,
        }
      });
      return res.status(200).json(config);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
