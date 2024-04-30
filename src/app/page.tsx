"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Titulo from "@/components/titulo";
import { IoCall, IoCloudDownload } from "react-icons/io5";
import TarjetaChica from "@/components/tarjeta/chica";

import Formulario from "@/components/formulario";
import Tecnologia from "@/components/home/tecnologias";
import useObserver from "@/hooks/useNerScreen";
import Spinner from "@/components/spinner/proyectos";
import Footer from "@/components/footer";
import Btncontactame from "@/components/home/presentacion/Btncontactame";

const Proyectos = React.lazy(() => import("@/components/home/proyectos"));
// import Proyectos from "@/components/home/proyectos";

export default function Home() {
    const { elementRef: LazyProyectosRef, isNearScreen: isNearProyectos } =
        useObserver({
            distance: "0px",
        });

    const { elementRef, isNearScreen } = useObserver({
        distance: "0px",
        once: false,
    });

    const { elementRef: SobreMiRef, isNearScreen: isNearSobreMi } = useObserver(
        {
            distance: "0px",
            once: false,
        }
    );

    return (
        <div className="flex flex-col justify-center items-center h-auto px-3 sm:px-20 ">
            <div
                ref={SobreMiRef}
                id="SobreMi"
                className={`w-full text-center flex flex-col justify-center items-center min-h-[100svh] pt-8 ${
                    isNearSobreMi ? "scale" : "opacity-0"
                }`}
            >
                <Image
                    alt="Boschi Albano Jose"
                    src={"/Foto2.jpeg"}
                    height={250}
                    width={250}
                    priority={true}
                    className="rounded-full mb-2"
                ></Image>
                <h1 className="text-[rgba(255,255,255,0.9)] text-3xl">
                    Hola 👋 Soy
                </h1>

                <div className="w-full bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text text-center font-[Merienda]">
                    <p className="sm:text-[8rem] sm:leading-[7rem] text-[7rem] leading-[6rem]">
                        Boschi
                    </p>
                    <p className="sm:text-[4.5rem] sm:leading-[7rem] text-[3.5rem] leading-[6rem]">
                        Albano José
                    </p>
                </div>

                <h1 className="text-[rgba(255,255,255,0.9)] text-2xl">
                    Tecnico Universitario en Programacion
                </h1>

                <div className="flex  justify-between mt-[40px] sm:gap-6 gap-2 pt-2 sm:flex sm:flex-row sm:justify-center sm:pt-0 ">
                    <a
                        href="./CV.pdf"
                        download={"Boschi Albano Jose"}
                        className="saltar bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-center font-[Merienda] rounded-md text-black sm:text-2xl text-xl p-2 flex justify-center items-center gap-3"
                    >
                        Descargar CV
                        <IoCloudDownload />
                    </a>

                    <Btncontactame />
                </div>
            </div>

            <div
                ref={elementRef}
                className={`p-0 sm:p-10 w-[100%] flex  flex-col justify-start items-center mt-10 ${
                    isNearScreen ? "scale" : "opacity-0"
                }`}
            >
                <div className="mt-10 w-[200px] flex flex-row text-center justify-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline gap-3">
                    <h1 className="text-[40px] sm:text-[50px] font-bold  text-left font-[Merienda] w-[200px]">
                        Sobre mí
                    </h1>
                </div>

                <div className="mt-5 sm:text-xl text-lg text-[rgba(255,255,255,0.9)] flex flex-col justify-center items-start">
                    <h1>
                        ✔ Soy una persona autodidacta, responsable y
                        comprometida con mi trabajo.
                    </h1>
                    <h1>
                        ✔ Constantemente estoy aprendiendo nuevas tecnologias y
                        herramientas para mejorar mis habilidades.
                    </h1>
                    <h1>
                        ✔ No dude en{" "}
                        <span className="font-bold">Contactarse</span> conmigo
                        si tiene alguna pregunta.
                    </h1>
                </div>
            </div>

            {/* Tecnologias */}
            <Tecnologia />

            {/* Proyectos */}
            <div
                className="w-full flex flex-col justify-center items-center h-auto"
                ref={LazyProyectosRef}
            >
                <Suspense fallback={<Spinner />}>
                    {isNearProyectos ? <Proyectos /> : <Spinner />}
                </Suspense>
            </div>

            <Titulo
                titulo={"¿Te interesaria conocer otros proyectos?"}
                subtitulo={"Cursos"}
            />
            <div className="Galeria mb-30">
                <TarjetaChica
                    github={
                        "https://github.com/BoschiAlbano/Mobile_app_Ministerio"
                    }
                    deploy={""}
                    titulo={"Ministerio Obra y Servicios Publicos App"}
                    descripcion={
                        "Pasantias ministerio Obra y Servicios Publicos."
                    }
                    tecnologias={["Ionic Framework", "React JS", "Express js"]}
                    descargar={false}
                />

                <TarjetaChica
                    github={
                        "https://github.com/BoschiAlbano/Curso-NextJS-14-Oficial"
                    }
                    deploy={"https://curso-next-js-14-oficial.vercel.app"}
                    titulo={"Next js 14"}
                    descripcion={
                        "Curso de Next js 14 - Pagina Oficial de Next js - Vercel"
                    }
                    tecnologias={["next-js 14", "tailwind css", "NextAuth"]}
                    descargar={false}
                />

                <TarjetaChica
                    github={"https://github.com/BoschiAlbano/App-Peliculas"}
                    deploy={""}
                    titulo={"React Native - Expo"}
                    descripcion={
                        "Curso de react native usando expo y consumiendo api de peliculas"
                    }
                    tecnologias={["React Native", "Expo", "Axios"]}
                    descargar={
                        "./application-e21e8b7d-b88a-4d2a-8ff8-fddce4315037.apk"
                    }
                />

                <TarjetaChica
                    github={"https://github.com/BoschiAlbano/Comics_Noticias"}
                    deploy={"https://noticias-app-gamma.vercel.app/"}
                    titulo={"Next js 12"}
                    descripcion={"Curso de Next js - Youtube midudev"}
                    tecnologias={["next-js 12", "java-Script", "node-js"]}
                    descargar={false}
                />

                <TarjetaChica
                    github={"https://github.com/BoschiAlbano/Giphy-React"}
                    deploy={"https://giffy-boschialbano.vercel.app/"}
                    titulo={"React js"}
                    descripcion={"Curso de react js, Consumir Api de gifs"}
                    tecnologias={["React-Js", "Materialize"]}
                    descargar={false}
                />
            </div>

            <div id={"DatosContacto"}></div>
            <Titulo
                titulo={"¿Quieres contactarme?"}
                subtitulo={"Datos de Contacto"}
            />
            <Formulario />

            <Footer />
        </div>
    );
}
