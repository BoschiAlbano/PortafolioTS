import React from "react";
import Link from "next/link";
import useObserver from "@/hooks/useNerScreen";
import { IoLogoGithub, IoCloudDownload } from "react-icons/io5";
import { ImLink } from "react-icons/im";

interface tarjetaChica {
    github: string;
    deploy: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    descargar: boolean | string;
}

const TarjetaChica = ({
    github,
    deploy,
    titulo,
    descripcion,
    tecnologias,
    descargar = false,
}: tarjetaChica) => {
    const { elementRef, isNearScreen } = useObserver({
        distance: "0px",
        once: false,
    });

    return (
        <div
            ref={elementRef}
            className={`back p-1 rounded-2xl ${
                isNearScreen ? "scale" : "opacity-0"
            }`}
        >
            <div className="Galeria_Tarjetas mb-0 p-3 rounded-2xl shadow-sm bg-[#202024] flex flex-col justify-between items-center">
                <div className="flex flex-row justify-end items-center gap-5">
                    <Link href={github} target="_blank">
                        <IoLogoGithub className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                    </Link>
                    {deploy.length != 0 ? (
                        <Link href={deploy}>
                            <ImLink className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                        </Link>
                    ) : null}
                    {typeof descargar === "string" ? (
                        <Link
                            target="_blank"
                            href={descargar}
                            // download={textoDescarga}
                            className="saltar bg-[#A7A4A5] text-center font-[Merienda] rounded-full text-black text-2xl p-3 flex justify-center items-center gap-3 hover:bg-[#ffffff]"
                        >
                            <IoCloudDownload color="#202024" />
                        </Link>
                    ) : null}
                </div>

                <h1 className="font-bold text-center text-[#A7A4A5] text-[3rem] font-[Merienda] my-5">
                    {titulo}
                </h1>

                <p className="text-[#A7A4A5] text-center text-2xl my-5">
                    {descripcion}
                </p>

                <div className="flex flex-row gap-1 w-full justify-between items-center ">
                    <div className="flex flex-row gap-2 w-full justify-center">
                        {tecnologias.map((value, index) => {
                            return (
                                <div className="flexTec" key={index}>
                                    <span className="ItemsTecnologias">
                                        {value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaChica;
// Lalunitalelu
