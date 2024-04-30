"use client";
import React, { useEffect, useState } from "react";

const HeaderMenu = () => {
    let tituto = "Boschi Albano Jose";

    const [scrollDirection, setScrollDirection] = useState<
        "down" | "up" | null
    >(null);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("blur", () => {
            document.title = "¡No te vayas! 😱";
        });

        window.addEventListener("focus", () => {
            document.title = tituto;
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Compara la posición actual con la anterior para determinar la dirección del scroll
            if (currentScrollY > prevScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < prevScrollY) {
                setScrollDirection("up");
            }

            // Actualiza la posición anterior con la actual
            setPrevScrollY(currentScrollY);
        };

        // Agregar el event listener cuando el componente se monta
        window.addEventListener("scroll", handleScroll);

        // Eliminar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollY]); // El useEffect depende de prevScrollY para ejecutarse cuando cambie

    return (
        <nav
            className={` w-full z-[900] h-[50px] shadow-xl flex flex-row justify-end  items-center font-[Merienda]  text-sm gap-5 pr-5 fixed text-[rgb(255,255,255,0.9)] sm:text-xl sm:gap-10 ${
                scrollDirection === "up" || scrollDirection == null
                    ? "top-0"
                    : "top-[-100px]"
            } transition-all duration-500`}
        >
            <h1
                className="mover"
                onClick={() => {
                    const elemento = document.getElementById("SobreMi");
                    if (elemento) {
                        const posicionY = elemento.offsetTop;
                        window.scrollTo(0, posicionY - 100);
                    }
                }}
            >
                Sobre mi
            </h1>
            <h1
                className="mover"
                onClick={() => {
                    const elemento = document.getElementById("MisProyectos");
                    if (elemento) {
                        const posicionY = elemento.offsetTop;
                        window.scrollTo(0, posicionY + 100);
                    }
                }}
            >
                Mis Proyectos
            </h1>
            <h1
                className="mover"
                onClick={() => {
                    const elemento = document.getElementById("DatosContacto");
                    if (elemento) {
                        const posicionY = elemento.offsetTop;
                        window.scrollTo(0, posicionY + 100);
                    }
                }}
            >
                Datos de Contacto
            </h1>
        </nav>
    );
};

export default HeaderMenu;
