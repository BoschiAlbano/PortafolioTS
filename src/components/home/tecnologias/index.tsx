"use client";
import Titulo from "@/components/titulo";
import React from "react";
import { IoCodeSlash, IoServer, IoBuild, IoLogoWindows } from "react-icons/io5";
import useObserver from "@/hooks/useNerScreen";

const Tecnologia = () => {
    const { elementRef, isNearScreen } = useObserver({
        distance: "0px",
        once: false,
    });

    return (
        <>
            <Titulo titulo={""} subtitulo={"Tecnologias"} />
            <div
                ref={elementRef}
                className={` GrillaTecnologias ${
                    isNearScreen ? "scale" : "opacity-0"
                }`}
            >
                <div className="Tecnologias">
                    <IoCodeSlash className="IconoTec" />
                    <h1 className="h1Tec">Frontend</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">HTML5</span>
                        <span className="ItemsTecnologias">Css</span>
                        <span className="ItemsTecnologias">JavaScript</span>
                        <span className="ItemsTecnologias">JSX</span>
                        <span className="ItemsTecnologias">React Js</span>
                        <span className="ItemsTecnologias">Tailwind Css</span>
                    </div>
                </div>

                <div className="Tecnologias">
                    <IoServer className="IconoTec" />
                    <h1 className="h1Tec">Backend</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">Node Js</span>
                        <span className="ItemsTecnologias">Express Js</span>
                        <span className="ItemsTecnologias">Sql Server</span>
                        <span className="ItemsTecnologias">Mongo Db</span>
                        <span className="ItemsTecnologias">GraphQl</span>
                    </div>
                </div>

                <div className="Tecnologias">
                    <IoBuild className="IconoTec" />
                    <h1 className="h1Tec">Herramientas</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">GitHub</span>
                        <span className="ItemsTecnologias">Postman</span>
                    </div>
                </div>

                <div className="Tecnologias">
                    <IoLogoWindows className="IconoTec" />
                    <h1 className="h1Tec">Escritorio</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">C#</span>
                        <span className="ItemsTecnologias">
                            Entity Framework
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tecnologia;
