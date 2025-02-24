// pages/email-config.tsx
import { useState } from 'react';
import axios from 'axios';

const EmailConfigPage = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [connectionType, setConnectionType] = useState('IMAP');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState(993);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const config = {
      emailAddress,
      connectionType,
      username,
      password,
      host,
      port,
    };

    try {
      const response = await axios.post('/api/email-ingestion/config', config);
      alert('Configuración guardada');
    } catch (error) {
      alert('Hubo un error guardando la configuración');
    }
  };

  return (
    <div>
      <h1>Configuración de Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
        </div>
        <div>
          <label>Connection Type:</label>
          <select value={connectionType} onChange={(e) => setConnectionType(e.target.value)}>
            <option value="IMAP">IMAP</option>
            <option value="POP3">POP3</option>
            <option value="Gmail">Gmail API</option>
            <option value="Outlook">Outlook API</option>
          </select>
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password/Token:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Host:</label>
          <input type="text" value={host} onChange={(e) => setHost(e.target.value)} />
        </div>
        <div>
          <label>Port:</label>
          <input type="number" value={port} onChange={(e) => setPort(Number(e.target.value))} />
        </div>
        <button type="submit">Guardar Configuración</button>
      </form>
    </div>
  );
};

export default EmailConfigPage;
