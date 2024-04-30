import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface bodyForm {
    Nombre: string;
    Correo: string;
    Asunto: string;
    Mensaje: string;
}

export async function POST(request: Request, context: any) {
    try {
        const { method } = request;

        console.log(method);
        // console.log(await request.json());

        const datos = (await request.json()) as bodyForm;

        const config = {
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.From, // generated ethereal user
                pass: process.env.Google_Nodemailer, // generated ethereal password
            },
        };

        const mensaje = {
            from: process.env.From, // sender address
            to: process.env.To, // list of receivers
            subject: datos.Asunto, // Subject line
            text: JSON.stringify(datos), // plain text body
            html: `
            <h1>Nombre: ${datos.Nombre}</h1>
            <br/>
            <h1>Correo: ${datos.Correo}</h1>
            <br/>
            <h1>Asunto: ${datos.Asunto}</h1>
            <br/>
            <h1>Mensaje: ${datos.Mensaje}</h1>

        `, // html body
        };

        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje);

        console.log(info);

        return NextResponse.json({
            msj: "Correcto, Formulario enviado",
            estado: true,
        });
    } catch (error: any) {
        console.log(error);

        return NextResponse.json({
            msj: "Error, Al enviar el formulario",
            error: error.messaje,
            estado: false,
        });
    }
}
