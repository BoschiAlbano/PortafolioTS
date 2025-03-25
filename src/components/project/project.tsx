"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

// import required modules
import { Cards } from "../../utilities/project";
import { card } from "../../model/projects";
import useNerScreen from "@/hook/useNerScreen";

const Proyect = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative ">
      <Barra />

      {Cards.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full sm:px-[5%] h-full flex flex-col justify-center items-center `}
          >
            <TiltCard card={item} izq={index % 2 === 0} />
          </div>
        );
      })}
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ card, izq }: { card: card; izq: boolean }) => {
  const { isNearScreen, elementRef } = useNerScreen({
    distance: "0px",
    once: false,
  });

  const { description, github, images, page, produccion, tecnologias, title } =
    card;

  const [imgNext, setImgNext] = useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      // @ts-ignore
      ref={elementRef}
      className={`relative flex flex-col sm:gap-5 gap-10 w-[100%] h-full sm:my-0 my-10 ${
        isNearScreen ? "scale" : "scale_reverse"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="rounded-xl bg-transparent "
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className={` w-full sm:h-svh h-auto relative flex flex-row-reverse justify-center items-center `}
        >
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={`${img}`}
                className={` rounded-[1.5rem] lg:max-h-[85%] max-w-full object-contain lg:w-[80%] w-[100%]  ${
                  imgNext == index ? "block" : "hidden"
                } rounded-2xl`}
                // loading="lazy"
                alt={`${title}`}
                id="img"
              />
            );
          })}
        </div>
      </motion.div>

      <div
        onMouseMove={(e) => e.stopPropagation()}
        onMouseLeave={(e) => e.stopPropagation()}
        id="card-info"
        className={`flex flex-col justify-start items-center max-w-[500px] lg:absolute relative lg:bottom-[50%] lg:translate-y-[75%]  rounded-[1.5rem] p-5  gap-4 ${
          izq ? "lg:left-0" : "lg:right-0"
        }`}
      >
        <p className=" lg:text-4xl text-2xl text-white lg:mt-6 mt-4">{title}</p>
        <p className=" lg:text-xl text-sm text-white ">{description}</p>

        {produccion && (
          <div className=" flex flex-row justify-center items-center  gap-2 absolute top-0 left-0 lg:m-4 m-3">
            <div className="  rounded-full w-[10px] h-[10px] bg-green-300 "></div>
            <p className=" text-sm text-gray-300">Production</p>
          </div>
        )}

        <div
          className={`absolute cursor-pointer top-0 right-0 py-2 px-4 flex justify-center items-center text-[#c2cf09] font-semibold transition-all duration-[2s] `}
          title="Next"
        >
          {/* prev */}
          <button
            onClick={() =>
              setImgNext((prevIndex) =>
                prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
              )
            }
            className=" w-[22px] h-[22px] p-1 rounded-full bg-[#c2cf09] flex justify-center items-center mr-2"
          >
            {/* arroy left */}
            <svg
              stroke="currentColor"
              className="fill-black"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
            </svg>
          </button>

          <p className=" text-xl">{`${imgNext + 1} / ${images.length}`}</p>

          {/* next */}
          <button
            onClick={() =>
              setImgNext((prevIndex) => (prevIndex + 1) % images.length)
            }
            className=" w-[22px] h-[22px] p-1 rounded-full bg-[#c2cf09] flex justify-center items-center ml-2"
          >
            {/* arroy right */}
            <svg
              className="fill-black"
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>
        </div>

        <div className=" w-full flex sm:gap-0 sm:flex-row sm:justify-center sm:items-center mt-4 flex-col items-end gap-5">
          <div className="flex-grow flex flex-row sm:justify-start justify-center items-center gap-5  flex-wrap ">
            {tecnologias?.map((item, index) => {
              return (
                <p
                  key={index}
                  className=" font-semibold text-white text-sm px-2 py-1 bg-gray-500 rounded-md"
                >
                  {item}
                </p>
              );
            })}
          </div>

          <div className="flex-grow-0 flex flex-row justify-end items-center gap-5  ">
            <a
              href={`${github}`}
              className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
                className=" w-full fill-white"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a
              href={`${page}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className=" w-full fill-white"
              >
                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyect;

function Barra() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [viewportHeight, setViewportHeight] = React.useState(
    window.innerHeight
  );

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - viewportHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight); // Actualiza la altura del viewport si cambia (ej: rotar móvil)
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportHeight]); // Dependencia para recalcular si cambia el viewport

  // Ajustamos la posición del círculo dentro del contenedor (75vh = 75% del viewport)
  const containerHeight = 0.75 * viewportHeight; // 75vh en píxeles
  const circleHeight = 20; // Altura del círculo en píxeles
  const maxOffset = containerHeight - circleHeight;
  const circleOffset = scrollProgress * maxOffset;

  return (
    <div
      id="container_circle"
      className="sm:flex hidden w-[5px] h-[75svh] fixed flex-col items-center top-[110px] right-[72px] rounded-sm"
    >
      <div
        className="w-[20px] h-[20px] bg-[#c2cf09] rounded-full"
        style={{
          transform: `translateY(${circleOffset}px)`,
          transition: "transform 0.5s ease-out",
        }}
      ></div>
    </div>
  );
}
