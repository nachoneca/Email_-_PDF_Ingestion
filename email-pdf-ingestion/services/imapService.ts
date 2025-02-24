import Imap from 'imap';
import { simpleParser } from 'mailparser';

export function connectToImap(user: string, password: string, host: string, port: number): Imap {
    return new Imap({ user, password, host, port, tls: true });
}

export async function parseEmail(stream: NodeJS.ReadableStream) {
    return await simpleParser(stream);
}