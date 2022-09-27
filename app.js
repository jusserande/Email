import express from "express";
import sendEmail from "./email_server.js";

const app=express();
app.use(express.json());

app.post("/", (req,resp)=>{
    const email=req.body;
    console.log(email)
    sendEmail(email.destinatario, email.sumario, email.corpo);
    resp.send("Email enviado!");
});

const port = process.env.port || 3000

app.listen(port,()=>{console.log("Ouvindo na porta ".concat(port).concat("."))})