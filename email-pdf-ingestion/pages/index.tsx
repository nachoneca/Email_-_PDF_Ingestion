import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imapServer, setImapServer] = useState('');
    const [port, setPort] = useState('');
    const [loading, setLoading] = useState(false); // State to handle the loading button
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Disable the button while processing the request
        setErrorMessage(''); // Reset the error message on each attempt

        try {
            const res = await fetch('/api/email-ingestion/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, imapServer, port }),
            });

            if (!res.ok) {
                // Check if the response was not successful (404, 500, etc.)
                throw new Error(`Connection error: ${res.status} - ${res.statusText}`);
            }

            const data = await res.json();
            if (data.message) {
                alert(data.message); // Show success message if available
            } else {
                alert('Unexpected response from server');
            }
        } catch (error: any) {
            console.error('Request error:', error);
            setErrorMessage(error.message || 'There was an issue with the request');
        } finally {
            setLoading(false); // Re-enable the button after processing
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Connect with IMAP</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={imapServer}
                            onChange={(e) => setImapServer(e.target.value)}
                            placeholder="IMAP Server"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            value={port}
                            onChange={(e) => setPort(e.target.value)}
                            placeholder="Port"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Show an error message if exists */}
                    {errorMessage && (
                        <div className="text-red-500 text-sm mt-2">
                            {errorMessage}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            disabled={loading} // Disable the button while processing
                        >
                            {loading ? 'Connecting...' : 'Connect'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
