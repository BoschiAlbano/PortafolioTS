"use client";
import React from "react";
import observer from "@/hooks/useNerScreen";

const Titulo = ({
    titulo,
    subtitulo,
}: {
    titulo: String;
    subtitulo: String;
}) => {
    const { elementRef, isNearScreen } = observer({
        distance: "0px",
        once: false,
    });
    return (
        <div
            ref={elementRef}
            className={`flex flex-col items-center text-[rgb(255,255,255,0.9)] mt-40 mb-10 ${
                isNearScreen ? "showText" : "opacity-0"
            }`}
        >
            <h1 className="text-ml sm:text-xl font-bold mb-0">{titulo}</h1>
            <p className="text-[2rem] sm:text-[3rem] mb-0">{subtitulo}</p>
            <hr className="my-2 h-[2px] border-none bg-[#5E4A87] w-[50%]" />
        </div>
    );
};

export default Titulo;
