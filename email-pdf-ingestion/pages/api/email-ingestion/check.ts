// pages/api/email-ingestion/check.ts
import { NextApiRequest, NextApiResponse } from 'next';

const checkEmailConnection = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, imapServer, port } = req.body; // Usar req.body en el entorno Node.js

    if (!email || !password || !imapServer || !port) {
      return res.status(400).json({ error: 'Need more parameters.' });
    }

    // Lógica de conexión con el servidor de correo IMAP o cualquier otra lógica
    return res.status(200).json({ message: 'Connection completed!' });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default checkEmailConnection;
