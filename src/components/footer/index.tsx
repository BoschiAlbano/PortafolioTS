"use client";
import React, { useEffect, useState } from "react";
import Alert from "@/components/alert";
import Link from "next/link";
import useObserver from "@/hooks/useNerScreen";

import { IoMailUnreadOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    function copiar(text: string) {
        const clipboard = window.navigator.clipboard;

        if (!clipboard) {
            // Si el portapapeles no está disponible en el navegador, muestra un mensaje de error
            console.error(
                "El portapapeles no está disponible en este navegador"
            );
            return;
        }

        clipboard
            .writeText(text)
            .then(() => {
                console.log("Texto copiado al portapapeles: ", text);
            })
            .catch((error) => {
                console.error("Error al copiar texto al portapapeles: ", error);
            });

        SetAlert(true);

        setTimeout(() => {
            SetAlert(false);
        }, 3000);
    }

    const [alert, SetAlert] = useState(false);

    const { elementRef, isNearScreen } = useObserver({
        distance: "0px",
        once: false,
    });

    return (
        <div
            ref={elementRef}
            className={`w-full border-t-[3px] pt-5 border-[#5E4A87] ${
                isNearScreen ? "scale" : "opacity-0"
            }`}
        >
            <div className="flex flex-row justify-center text-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline mb-5">
                <h1 className="text-[25px] sm:text-[50px] font-bold  text-left font-[Merienda]">
                    Gracias por visitar mi sitio web!
                </h1>
            </div>

            <div className="w-full flex flex-row gap-2 mb-5 justify-center items-center cursor-pointer">
                <div onClick={() => copiar("Boschi.albano.jose@gmail.com")}>
                    <IoMailUnreadOutline className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                </div>
                <Link href={"https://github.com/BoschiAlbano"} target="_blank">
                    <IoLogoGithub className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                </Link>
                <Link
                    href={
                        "https://www.linkedin.com/in/albano-jose-boschi-692722277/"
                    }
                    target="_blank"
                >
                    <IoLogoLinkedin className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                </Link>
            </div>

            {alert ? <Alert SetAlert={SetAlert} /> : null}
        </div>
    );
};

export default Footer;
