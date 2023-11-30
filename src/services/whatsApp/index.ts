import makeWASocket, {
  useMultiFileAuthState,
  isJidBroadcast,
  DisconnectReason,
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import { EmailService } from '../resend';

export class WhatsAppService {
  client: ReturnType<typeof makeWASocket>;

  constructor() {
    this.createConnection();
  }

  async createConnection() {
    const { state, saveCreds } = await useMultiFileAuthState(
      'baileys_auth_info',
    );
    const sock = makeWASocket({
      printQRInTerminal: true,
      qrTimeout: 60 * 1000,
      auth: state,
      shouldIgnoreJid: (jid) => isJidBroadcast(jid),
    });

    sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update;
      if (connection === 'close') {
        const shouldReconnect =
          (lastDisconnect.error as Boom)?.output?.statusCode !==
          DisconnectReason.loggedOut;
        if (shouldReconnect) {
          this.createConnection();
        } else {
          EmailService.alertEmail();
          console.log('connection error sending alert email');
        }
      } else if (connection === 'open') {
        console.log('opened connection');
      }
    });
    sock.ev.on('creds.update', saveCreds);
    this.client = sock;
  }
}
