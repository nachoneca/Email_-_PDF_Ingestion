// pages/api/email-ingestion/download.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { downloadPDFsFromEmail } from '../../../lib/downloadEmails';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { configId } = req.query;

  try {
    if (!configId) {
      return res.status(400).json({ error: 'Falta el ID de configuración de correo' });
    }

    await downloadPDFsFromEmail(Number(configId));
    return res.status(200).json({ message: 'Archivos descargados correctamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
