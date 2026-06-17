import { card } from "../model/projects";

export const Cards: card[] = [
  {
    title: "Puntox Saas",
    description:
      "Software de gestión empresarial completo. Control de inventario, punto de venta, facturación electrónica y reportes en tiempo real.",
    github: "https://github.com/BoschiAlbano/PuntoX",
    page: "https://www.puntox.com.ar",
    images: [
      "proyectos/puntox/planes.webp",
      "proyectos/puntox/home.webp",
      "proyectos/puntox/articulos.webp",
      "proyectos/puntox/seguridad.webp",
      "proyectos/puntox/login.webp",
    ],
    tecnologias: ["Next js", "Azure Sql", "GraphQl", "App Services"],
    produccion: true,
  },
  {
    title: "Distrinova Web",
    description:
      "Aplicación para realizar pedidos. (Login, Register, Artículos, Carrito de Compras), Esta aplicación fue diseñada para trabajar en simultáneo con la aplicación de facturación hecha en c# donde llegan todos los pedidos.",
    github: "https://github.com/BoschiAlbano/App-Martin-Web",
    page: "https://distrinova-martin.com",
    images: [
      "proyectos/distrinova/login.webp",
      "proyectos/distrinova/articulos.webp",
      "proyectos/distrinova/home.webp",
    ],
    tecnologias: ["Next js", "Azure Sql", "GraphQl", "App Services"],
    produccion: true,
  },
  {
    title: "Distrinova App",
    description:
      "Aplicacion de ventas y facturacion para escritorio. (Control de Articulos, facturas, cuenta corriente, caja, reportes, etc.)",
    github: "https://github.com/BoschiAlbano/App-Martin",
    page: "/",
    images: [
      "proyectos/Appdistrinova/caja.webp",
      "proyectos/Appdistrinova/analiticas.webp",
      "proyectos/Appdistrinova/cuentasCorrientes.webp",
      "proyectos/Appdistrinova/venta.webp",
    ],
    tecnologias: ["C#", "Entity Framework", "Sql Server"],
    produccion: true,
  },
  {
    title: "Nutricion",
    description: "Aplicacion web para gestion turnos - Demo",
    github: "https://github.com/BoschiAlbano/nutricion/tree/master",
    page: "https://nutricion-delta.vercel.app/",
    images: ["proyectos/Nutricion/nutricion.webp"],
    tecnologias: ["React js", "Tailwind Css"],
    produccion: false,
  },
  {
    title: "Boradoc",
    description:
      "Aplicacion web venta y descargas de logotipos para maquinas de bordar",
    github: "https://github.com/BoschiAlbano/BordaDoc",
    page: "https://borda-doc-boschialbano.vercel.app/",
    images: [
      "proyectos/BordaDoc/home-BordaDoc.webp",
      "proyectos/BordaDoc/mercado-BordaDoc.webp",
      "proyectos/BordaDoc/logos-BordaDoc.webp",
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
      "proyectos/ecommerceLuu/homeLuu.webp",
      "proyectos/ecommerceLuu/carritoLuu.webp",
      "proyectos/ecommerceLuu/productoLuu.webp",
      "proyectos/ecommerceLuu/loginLuu.webp",
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
    images: ["proyectos/ecommerceLuu/admin/ecommerce-luu-admin.webp"],
    tecnologias: ["React js", "Tailwind Css", "SupaBase"],
    produccion: false,
  },
];
