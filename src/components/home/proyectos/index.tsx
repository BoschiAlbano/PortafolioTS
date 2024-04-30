import Tarjeta from "@/components/tarjeta/grande";
import Titulo from "@/components/titulo";
import React from "react";

const Proyectos = () => {
    return (
        <>
            <div id={"MisProyectos"}></div>
            <Titulo
                titulo={"Algunos de mis proyectos"}
                subtitulo={"Mis Proyectos"}
            />

            <Tarjeta
                titulo={"E-Commerce Windows"}
                descripcion={
                    "Aplicacion de ventas y facturacion para escritorio. (Control de Articulos, facturas, cuenta corriente, caja, reportes, etc.)"
                }
                github={"https://github.com/BoschiAlbano/App-Martin"}
                deploy={""}
                tecnologias={["C#", "Entity Framework", "Sql Server"]}
                foto={[
                    "/Appdistrinova/login-AppDistrinova.png",
                    "/Appdistrinova/factura-AppDistrinova.png",
                    "/Appdistrinova/articulo-AppDistrinova.png",
                    "/Appdistrinova/ctacte-AppDistrinova.png",
                ]}
                derecha={false}
                produccion={true}
            />
            <Tarjeta
                titulo={"E-Commerce Web"}
                descripcion={
                    "Aplicación para realizar pedidos. (Login, Register, Artículos, Carrito de Compras), Esta aplicación fue diseñada para trabajar en simultáneo con la aplicación de facturación hecha en c# donde llegan todos los pedidos."
                }
                github={"https://github.com/BoschiAlbano/App-Martin-Web"}
                deploy={"https://distrinova-martin.site/login"}
                tecnologias={[
                    "Next js",
                    "Azure Sql",
                    "GraphQl",
                    "Azure app services",
                ]}
                foto={[
                    "/distrinova/login-Distrinova.png",
                    "/distrinova/home-Distrinova.png",
                    "/distrinova/productos-Distrinova.png",
                ]}
                derecha={true}
                produccion={true}
            />

            <Tarjeta
                titulo={"E-Commerce Web"}
                descripcion={
                    "Aplicacion web ecommerce, venta de articulos para interior del hogar. integrando mercado pago y usando SupaBase para el backend."
                }
                github={"https://github.com/BoschiAlbano/ecommerce-luu"}
                deploy={"https://ecommerce-luu.vercel.app/home"}
                tecnologias={[
                    "Next js",
                    "Tailwind Css",
                    "SupaBase",
                    "Mercado Pago",
                ]}
                foto={[
                    "/ecommerceLuu/loginLuu.png",
                    "/ecommerceLuu/homeLuu.png",
                    "/ecommerceLuu/carritoLuu.png",
                    "/ecommerceLuu/productoLuu.png",
                ]}
                derecha={false}
                produccion={false}
            />
            <Tarjeta
                titulo={"CMS - E-Commerce Web"}
                descripcion={
                    "Aplicacion web para gestion de contenido de pagina web ecommerce"
                }
                github={"https://github.com/BoschiAlbano/ecommerce-luu-cms"}
                deploy={"https://ecommerce-luu-cms.vercel.app"}
                tecnologias={["React js", "Tailwind Css", "SupaBase"]}
                foto={["/ecommerce-luu-admin.jpg"]}
                derecha={true}
                produccion={false}
            />

            <Tarjeta
                titulo={"BordaDoc"}
                descripcion={
                    "Aplicacion web venta y descargas de logotipos para maquinas de bordar"
                }
                github={"https://github.com/BoschiAlbano/BordaDoc"}
                deploy={"https://borda-doc-boschialbano.vercel.app/"}
                tecnologias={[
                    "Next js",
                    "Tailwind Css",
                    "SupaBase",
                    "Mercado Libre",
                ]}
                foto={[
                    "/BordaDoc/home-BordaDoc.png",
                    "/BordaDoc/mercado-BordaDoc.png",
                    "/BordaDoc/logos-BordaDoc.png",
                ]}
                derecha={false}
                produccion={false}
            />
        </>
    );
};

export default Proyectos;
