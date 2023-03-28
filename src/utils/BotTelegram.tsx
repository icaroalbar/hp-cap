import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

export const TelegramSend = ({ req, res }: any) => {
  const bot = new Telegraf("5841325485:AAF_57Ld2NIlvzCLEw7rA38DYwncgQYsgkM");
  const { id, company, name, email, phone, subject, message } = req.body;

  bot.telegram.sendMessage(
    "-870619580",
    `  
      Menssagem do site ${company}
          
      ID:  ${id}
      
      Nome:  ${name}
  
      E-mail:  ${email}  
  
      Telefone:  ${phone}  
  
      Assunto:  ${subject}  
      
      Mensagem:
      ${message}
      `
  );
};
