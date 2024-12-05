import { z } from "zod";

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
