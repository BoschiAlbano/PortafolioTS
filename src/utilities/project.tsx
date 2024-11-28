import { card } from "../model/projects";

export const Cards: card[] = [
    {
        title: "Distrinova App",
        description:
            "Aplicacion de ventas y facturacion para escritorio. (Control de Articulos, facturas, cuenta corriente, caja, reportes, etc.)",
        github: "https://github.com/BoschiAlbano/App-Martin",
        page: "/",
        images: [
            "proyectos/Appdistrinova/factura-AppDistrinova.png",
            "proyectos/Appdistrinova/articulo-AppDistrinova.png",
            "proyectos/Appdistrinova/ctacte-AppDistrinova.png",
            "proyectos/Appdistrinova/login-AppDistrinova.png",
        ],
        tecnologias: ["C#", "Entity Framework", "Sql Server"],
        produccion: true,
    },
    {
        title: "Distrinova Web",
        description:
            "Aplicación para realizar pedidos. (Login, Register, Artículos, Carrito de Compras), Esta aplicación fue diseñada para trabajar en simultáneo con la aplicación de facturación hecha en c# donde llegan todos los pedidos.",
        github: "https://github.com/BoschiAlbano/App-Martin-Web",
        page: "https://distrinova-martin.com",
        images: [
            "proyectos/distrinova/home-Distrinova.png",
            "proyectos/distrinova/productos-Distrinova.png",
            "proyectos/distrinova/login-Distrinova.png",
        ],
        tecnologias: ["Next js", "Azure Sql", "GraphQl", "App Services"],
        produccion: true,
    },

    {
        title: "Boradoc",
        description:
            "Aplicacion web venta y descargas de logotipos para maquinas de bordar",
        github: "https://github.com/BoschiAlbano/BordaDoc",
        page: "https://borda-doc-boschialbano.vercel.app/",
        images: [
            "proyectos/BordaDoc/home-BordaDoc.png",
            "proyectos/BordaDoc/mercado-BordaDoc.png",
            "proyectos/BordaDoc/logos-BordaDoc.png",
        ],
        tecnologias: ["Next js", "Tailwind Css", "SupaBase", "Mercado Libre"],
        produccion: false,
    },
    {
        title: "Ecommerce",
        description:
            "Aplicacion web ecommerce, venta de articulos para interior del hogar. integrando mercado pago y usando SupaBase para el backend.",
        github: "https://github.com/BoschiAlbano/ecommerce-luu",
        page: "https://ecommerce-luu.vercel.app/home",
        images: [
            "proyectos/ecommerceLuu/homeLuu.png",
            "proyectos/ecommerceLuu/carritoLuu.png",
            "proyectos/ecommerceLuu/productoLuu.png",
            "proyectos/ecommerceLuu/loginLuu.png",
        ],
        tecnologias: ["Next js", "Tailwind Css", "SupaBase", "Mercado Pago"],
        produccion: false,
    },
    {
        title: "Ecommerce CMS",
        description:
            "Aplicacion web para gestion de contenido de pagina web ecommerce",
        github: "https://github.com/BoschiAlbano/ecommerce-luu-cms",
        page: "https://ecommerce-luu-cms.vercel.app",
        images: ["proyectos/ecommerceLuu/admin/ecommerce-luu-admin.jpg"],
        tecnologias: ["React js", "Tailwind Css", "SupaBase"],
        produccion: false,
    },
];
