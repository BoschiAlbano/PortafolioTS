"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Spinner from "../spinner";
import useObserver from "@/hooks/useNerScreen";

import { IoMailUnreadOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoHandLeftOutline } from "react-icons/io5";
import Enviar from "../assets/svg/enviar";

const Formulario = () => {
    const { elementRef, isNearScreen } = useObserver({
        distance: "0px",
        once: false,
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [post, setpost] = useState<
        | { msj: string; estado: boolean }
        | { estado: boolean; msj: string; error: string }
        | null
    >(null);

    const [showMessage, setShowMessage] = useState(true);
    const [showSpinner, setshowSpinner] = useState(false);

    const onSubmit = async (data: FieldValues) => {
        setshowSpinner(true);
        await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/formulario`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setpost(res);
                setshowSpinner(false);
            });

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
            reset();
        }, 5000);
    };

    const whatsappMsj = () => {
        const phoneNumber = "3816206925";
        const message = "Hola, ¿cómo estás?";

        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.location.href = whatsappLink;
    };

    const validar = () => {
        // if (!("estado" in post)) {
        //     return null;
        // }

        if (post === null) {
            return null;
        }

        if (post.estado === true) {
            return (
                <p className="text-blue-300 text-2xl flex justify-start items-center gap-2">
                    <IoCheckmarkDoneSharp className="text-4xl text-blue-300" />
                    {post.msj}
                </p>
            );
        } else {
            return (
                <p className="text-rose-200 text-2xl flex justify-start items-center gap-1">
                    <IoHandLeftOutline className="text-4xl text-red-500" />

                    {post.msj}
                </p>
            );
        }
    };

    return (
        <div
            ref={elementRef}
            className={` ColumnasContacto mb-10 sm:mb-40 ${
                isNearScreen ? "scale" : "opacity-0"
            }`}
        >
            <div className="w-full gap-5 flex flex-col text-[#A7A4A5]">
                <div className="flex flex-row justify-start sm:justify-center text-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline mb-1 sm:mb-10">
                    <h1 className="text-[50px] font-bold  text-left font-[Merienda]">
                        Contactame...
                    </h1>
                </div>

                <div className="text-2xl">
                    <h1>
                        ✔ Si quieres contactarme. Puedes hacerlo a través de mi
                        correo o llenando el formulario de contacto. Te
                        respondere lo antes posible.{" "}
                        <span className="font-bold">¡Muchas Gracias!📩</span>
                    </h1>
                </div>

                <div className="text-2xl flex items-center justify-start gap-3">
                    <IoMailUnreadOutline className="text-4xl " />
                    <h1>Boschi.albano.jose@gmail.com</h1>
                </div>

                <div
                    className="text-2xl flex items-center justify-start gap-3 group cursor-pointer"
                    onClick={() => whatsappMsj()}
                >
                    <IoLogoWhatsapp className="text-4xl group-hover:text-[#25d36598] transition-all" />
                    <h1>381-156206925</h1>
                </div>

                {errors.Nombre?.type === "required" && (
                    <p className="text-rose-200 text-1xl sm:text-2xl flex justify-start items-center gap-1">
                        <IoHandLeftOutline className="text-4xl text-red-500" />
                        El campo Nombre es requerido
                    </p>
                )}
                {errors.Correo?.type === "required" && (
                    <p className="text-rose-200 text-1xl sm:text-2xl flex justify-start items-center gap-1">
                        <IoHandLeftOutline className="text-4xl text-red-500" />
                        El campo Correo es requerido
                    </p>
                )}
                {errors.Asunto?.type === "required" && (
                    <p className="text-rose-200 text-1xl sm:text-2xl flex justify-start items-center gap-1">
                        <IoHandLeftOutline className="text-4xl text-red-500" />
                        El campo Asunto es requerido
                    </p>
                )}
                {errors.Mensaje?.type === "required" && (
                    <p className="text-rose-200 text-1xl sm:text-2xl flex justify-start items-center gap-1">
                        <IoHandLeftOutline className="text-4xl text-red-500" />
                        El campo Mensaje es requerido
                    </p>
                )}
                {errors.Correo?.type === "pattern" && (
                    <p className="text-rose-200 text-1xl sm:text-2xl flex justify-start items-center gap-1">
                        <IoHandLeftOutline className="text-4xl text-red-500" />
                        E-mail no valido
                    </p>
                )}

                {showMessage ? validar() : null}

                {showSpinner ? <Spinner /> : null}
            </div>

            {/* Formulario */}

            <form
                onSubmit={handleSubmit((e) => onSubmit(e))}
                className="flex flex-col w-full p-0 sm:p-4 gap-5 justify-center items-center font-bold"
            >
                <input
                    type="text"
                    placeholder="Nombre"
                    className="campos"
                    {...register("Nombre", { required: true })}
                />

                <input
                    type="text"
                    placeholder="Correo electronico"
                    className="campos"
                    {...register("Correo", {
                        required: true,
                        pattern:
                            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                    })}
                />

                <input
                    type="text"
                    placeholder="Asunto"
                    className="campos"
                    {...register("Asunto", { required: true })}
                />

                <textarea
                    placeholder="Mensaje"
                    className="campos min-h-[10rem] max-h-[10rem]"
                    {...register("Mensaje", { required: true })}
                />

                <button className="saltar w-[100%] flex justify-center items-center gap-3 text-4xl text-[#E9E9EA] font-[merienda] bg-[#604A84] rounded-lg py-2 px-5">
                    Enviar
                    <Enviar />
                </button>
            </form>
        </div>
    );
};

export default Formulario;
