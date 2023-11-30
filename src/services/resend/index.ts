import { Resend } from 'resend';
import { env } from '../../env';
import { CreateEmailOptions } from 'resend/build/src/emails/interfaces';

const TEMPLATE_EMAIL = `<div style="font-family: Arial, sans-serif; background-color: #f8d7da; text-align: center; padding: 50px;">
<div style="font-size: 36px; margin-bottom: 10px;">🚫</div>
<div style="font-size: 24px; color: #721c24;">
  <strong>CONEXÃO ENCERRADA</strong>!<br>
  Houve um erro no funcionamento do WhatsApp Service.
</div>
</div>`;

class ResendService {
  private resend = new Resend(env.RESEND_KEY);

  async sendEmail(options: CreateEmailOptions) {
    try {
      this.resend.emails.send(options);
    } catch (e) {
      console.log('Cant send email', e);
    }
  }

  async alertEmail() {
    this.sendEmail({
      from: env.SERVICE_EMAIL,
      to: env.ADM_EMAIL,
      subject: 'WHATSAPP SERVICE',
      html: TEMPLATE_EMAIL,
    });
  }
}

export const EmailService = new ResendService();
