"use client";
import React from "react";
import { IoCall } from "react-icons/io5";

const Btncontactame = () => {
    return (
        <button
            onClick={() => {
                console.log("mover formulario");
            }}
            className="saltar bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-center font-[Merienda] rounded-md text-black sm:text-2xl text-xl p-2 flex justify-center items-center gap-3"
        >
            Contactame <IoCall />
        </button>
    );
};

export default Btncontactame;
