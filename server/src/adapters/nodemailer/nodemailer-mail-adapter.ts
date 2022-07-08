import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "06038b1696d8d1",
    pass: "9a433d2b368fd0"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gui Domingues <guidominguesdev@gmail.com>',
      subject,
      html: body,
    })
  };
}
