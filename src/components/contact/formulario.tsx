"use client";

import { useFetch } from "@/hook/useFetch";
import React, { useEffect, useRef, useState } from "react";

const Formulario = () => {
  const [data, setdata] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    data: response,
    error,
    executeFetch,
    loading,
  } = useFetch(`${process.env.NEXT_PUBLIC_HOST}/api/formulario`, {
    method: "POST",
    body: data,
    manual: true,
  });

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeFetch();
  };

  const HandleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (response?.estado) {
      setdata({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: "",
      });
      formRef.current?.reset();
    }
  }, [response]);

  return (
    <div className="w-full flex justify-center items-center flex-1">
      <form
        ref={formRef}
        onSubmit={(e) => HandleSubmit(e)}
        className="flex flex-col w-full p-4 sm:p-10 gap-6 justify-center items-center bg-[#1a1a22] rounded-[2rem] shadow-2xl border border-white/5"
      >
        <div className="flex flex-col items-center gap-2 mb-4 w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center tracking-tight font-sans">
            Contáctame ahora
          </h1>
          <p className="text-gray-400 text-center font-medium font-sans">
            ¿Tienes un proyecto en mente? Escríbeme y lo hacemos realidad.
          </p>
        </div>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full bg-[#24242e] text-white placeholder-gray-500 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#c2cf09] transition-all font-medium font-sans"
          name="nombre"
          onChange={(e) => HandleChange(e)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full bg-[#24242e] text-white placeholder-gray-500 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#c2cf09] transition-all font-medium font-sans"
          name="correo"
          onChange={(e) => HandleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Asunto"
          className="w-full bg-[#24242e] text-white placeholder-gray-500 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#c2cf09] transition-all font-medium font-sans"
          name="asunto"
          onChange={(e) => HandleChange(e)}
          required
        />
        <textarea
          placeholder="Mensaje"
          className="w-full bg-[#24242e] text-white placeholder-gray-500 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#c2cf09] transition-all font-medium font-sans min-h-[12rem] resize-none"
          name="mensaje"
          onChange={(e) => HandleChange(e)}
          required
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full flex justify-center items-center gap-3 text-xl font-bold bg-[#c2cf09] hover:bg-[#d4d620] text-black rounded-xl py-4 px-5 transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(194,207,9,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-sans mt-2"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Enviar Mensaje"
          )}
        </button>

        <div className="w-full flex flex-col justify-center items-center text-sm mt-2">
          {response?.msj && (
            <p className="text-[#c2cf09] font-semibold bg-[#c2cf09]/10 px-4 py-2 rounded-lg w-full text-center">
              {response.msj}
            </p>
          )}
          {response?.error?.map((item, index) => (
            <p
              key={index}
              className="text-red-400 font-semibold bg-red-400/10 px-4 py-2 rounded-lg w-full text-center mt-2"
            >
              <span>⚠️ </span>
              {item}
            </p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
