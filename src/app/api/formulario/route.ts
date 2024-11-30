import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import { AdapterFormulariotype } from "@/adapter/formulario";

interface bodyForm {
    Nombre: string;
    Correo: string;
    Asunto: string;
    Mensaje: string;
}

export const bodyFormSchema = z.object({
    nombre: z
        .string()
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
        .max(50, { message: "El nombre no puede exceder 50 caracteres" })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
            message: "El nombre solo puede contener letras",
        }),

    correo: z
        .string()
        .email({ message: "Introduce un correo electrónico válido" })
        .max(100, { message: "El correo electrónico es demasiado largo" }),

    asunto: z
        .string()
        .min(3, { message: "El asunto debe tener al menos 3 caracteres" })
        .max(100, { message: "El asunto no puede exceder 100 caracteres" }),

    mensaje: z
        .string()
        .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
        .max(500, { message: "El mensaje no puede exceder 500 caracteres" }),
});

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
