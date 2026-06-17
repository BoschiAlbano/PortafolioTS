"use client";

import React from "react";

export default function BotonWP() {
  const abrirWP = () => {
    window.open("https://wa.me/543816206925", "_blank");
  };

  return (
    <button
      className="flex items-center gap-4 bg-[#1a1a22] px-5 py-4 rounded-2xl border border-white/5 shadow-lg"
      onClick={() => abrirWP()}
    >
      <div className="min-w-[40px] h-[40px] flex justify-center items-center">
        <img src="/whatsapp.svg" alt="Imagen de WP" />
      </div>
      <div className="flex flex-col justify-center items-start text-gray-300">
        <p
          title={"WHATSAPP"}
          className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
        >
          WHATSAPP
        </p>
        <p title="+543816206925" className="font-bold text-sm text-gray-200">
          +54 3816206925
        </p>
      </div>
    </button>
  );
}
