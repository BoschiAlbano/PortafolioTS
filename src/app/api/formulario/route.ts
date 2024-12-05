import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { AdapterFormulariotype } from "@/adapter/formulario";
import { bodyFormSchema } from "@/model/zod/bodyFormSchema";

interface bodyForm {
    Nombre: string;
    Correo: string;
    Asunto: string;
    Mensaje: string;
}

export async function POST(request: Request, context: any) {
    try {
        const datos = (await request.json()) as bodyForm;

        const result = await bodyFormSchema.safeParseAsync(datos);

        if (result.error) {
            const errorMessages = result.error.errors.map(
                (err) => `${err.message}`
            );
            throw { bandera: true, errorMessages };
        }

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
            subject: result.data.asunto, // Subject line
            text: JSON.stringify(datos), // plain text body
            html: `
            <h1>Nombre: ${result.data.nombre}</h1>
            <br/>
            <h1>Correo: ${result.data.correo}</h1>
            <br/>
            <h1>Asunto: ${result.data.asunto}</h1>
            <br/>
            <h1>Mensaje: ${result.data.mensaje}</h1>

        `, // html body
        };

        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje);

        const res: AdapterFormulariotype = {
            msj: "Correcto, Formulario enviado",
            estado: true,
        };

        return NextResponse.json(res);
    } catch (error: any) {
        // Default Error
        let res: AdapterFormulariotype = {
            msj: "Error, Al enviar el formulario.",
            error: [],
            estado: false,
        };

        // instanceof Error
        if (error instanceof Error) {
            return NextResponse.json(res);
        }

        // Handle errors
        if (error.bandera) {
            res = {
                msj: "Error, Al enviar el formulario.",
                error: error.errorMessages,
                estado: false,
            };
        }

        return NextResponse.json(res);
    }
}
