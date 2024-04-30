import React from "react";
import { ImLink } from "react-icons/im";
import Swiper_Multimedia from "@/components/swiper";
import useObserver from "@/hooks/useNerScreen";
import { IoLogoGithub } from "react-icons/io5";
interface tarjeta {
    titulo: string;
    descripcion: string;
    github: string;
    deploy: string;
    tecnologias: string[];
    foto: string[];
    derecha: boolean;
    produccion: boolean;
}

const Tarjeta = ({
    titulo,
    descripcion,
    github,
    deploy,
    tecnologias,
    foto = [],
    derecha,
    produccion,
}: tarjeta) => {
    const { elementRef, isNearScreen } = useObserver({
        distance: "0px",
        once: false,
    });
    return (
        <div
            ref={elementRef}
            className={`w-full relative mb-[5rem] display max-h-[600px] ${
                derecha ? "flex-row-reverse" : "flex-row"
            } border-none sm:border-black shadow-xl sm:shadow-none p-2 sm:p-0 ${
                isNearScreen ? "scale" : "opacity-0"
            }`}
        >
            <div className={`foto  ${derecha ? "left-0 " : "right-0 "} w-full`}>
                {/* <Image
                        className="rounded-lg w-full"
                        src={foto}
                        alt="Imagen de proyecto"
                        width={1000}
                        height={1500}
                        style={{ objectFit: "cover" }}
                        // objectFit={"contain"}
                        // layout="fill"
                    /> */}
                <Swiper_Multimedia multimedia={foto} />
            </div>
            <section
                className={`position ${
                    derecha ? "left-0" : "right-0"
                }  flex flex-col justify-center items-start`}
            >
                <div
                    className={` w-full bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text font-[Merienda] mb-3 ${
                        derecha ? "text-left" : "text-right"
                    }`}
                >
                    {/* ${
                            derecha ? "text-right" : "text-left"
                        } */}
                    <p className={` text-2xl sm:text-3xl  `}>{titulo}</p>
                </div>

                <p className="text-[rgb(255,255,255,0.9)] z-[102] bg-[#604A84] rounded-md p-2 text-center min-h-[6rem] flex justify-center sm:justify-start items-center text-base sm:text-base">
                    {descripcion}
                </p>

                <div
                    className={`w-full z-[103] flex flex-row items-center my-4 gap-5 ${
                        derecha ? "justify-start" : "justify-end"
                    } `}
                >
                    <a
                        className="text-[2rem] text-[#A7A4A5] hover:text-[#ffffff]"
                        href={github}
                        target="_blank"
                    >
                        <IoLogoGithub />
                    </a>
                    <a
                        className="text-[2rem] text-[#A7A4A5] hover:text-[#ffffff]"
                        href={deploy}
                        target="_blank"
                    >
                        <ImLink />
                    </a>

                    <div className=" flex flex-row justify-center items-center gap-2">
                        <span
                            className={`w-[15px] h-[15px] rounded-full ${
                                produccion ? "bg-green-500 " : "bg-red-500"
                            } `}
                        ></span>
                        <h1 className=" text-[#A7A4A5]">
                            {produccion ? "Producción" : "Desarrollo"}
                        </h1>
                    </div>
                </div>

                <div
                    className={` w-full flex items-center flex-wrap z-[104] gap-1 ${
                        derecha ? "justify-start" : "justify-end"
                    }`}
                >
                    {tecnologias.map((value, index) => {
                        return (
                            <div key={index} className="flexTec">
                                <span className="ItemsTecnologias text-xs">
                                    {value}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Tarjeta;
