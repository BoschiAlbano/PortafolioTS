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
            | React.ChangeEvent<HTMLTextAreaElement>
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
        <form
            ref={formRef}
            onSubmit={(e) => HandleSubmit(e)}
            className="flex flex-col sm:w-[70%] w-full p-0 sm:p-4 gap-2 justify-center items-center font-bold h-full"
        >
            <input
                type="text"
                placeholder="Nombre"
                className="campos"
                name="nombre"
                onChange={(e) => HandleChange(e)}
            />
            <input
                type="email"
                placeholder="Correo electronico"
                className="campos"
                name="correo"
                onChange={(e) => HandleChange(e)}
            />
            <input
                type="text"
                placeholder="Asunto"
                className="campos"
                name="asunto"
                onChange={(e) => HandleChange(e)}
            />
            <textarea
                id="textarea"
                placeholder="Mensaje"
                className="campos min-h-[10rem] max-h-[10rem]"
                name="mensaje"
                onChange={(e) => HandleChange(e)}
            />
            <button
                disabled={loading}
                type="submit"
                className="saltar w-[100%] flex justify-center items-center gap-3 text-4xl font-[merienda] bg-[#604a8400] rounded-lg py-2 px-5 text-[#c2cf09]"
            >
                {loading ? "Enviando" : "Enviar"}
            </button>

            <div className=" w-full flex flex-col justify-center items-start">
                <p>{response?.msj}</p>
                {response?.error?.map((item, index) => {
                    return (
                        <p key={index}>
                            <span>❌</span>
                            {item}
                        </p>
                    );
                })}
            </div>
        </form>
    );
};

export default Formulario;
