import nodemailer from "nodemailer";

import user from "./credenciais.js"


async function sendEmail(destinatario, sumario,corpo){
  try{

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "mail.sistec.co.ao",
        port: 587,
        secure: false, 
        auth: {
          user: user.name, 
          pass: user.password,
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"João Lourenço" <joao.lourenco@mpla.co.ao>', // sender address
        to: destinatario, // list of receivers
        subject: sumario, // Subject line
        text: corpo, // plain text body
       // html: "<b>Os meus melhores cumprimentos,<br>Nelson dos Santos</b>",
      });
    
      console.log("Message sent: %s", info.messageId);
      
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch(erro){
      console.error(erro);
    }
      
    }

    export default sendEmail;
    
    //main().catch(console.error);