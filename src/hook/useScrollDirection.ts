import React, { useState, useEffect } from "react";

export default function UseScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);

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

    return { scrollDirection, prevScrollY };
}
