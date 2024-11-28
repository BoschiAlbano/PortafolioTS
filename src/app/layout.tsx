import type { Metadata } from "next";
import { Merienda, Signika } from "next/font/google";
import "./globals.css";
import Main from "@/components/main";

const merienda = Merienda({ weight: ["600"], subsets: ["latin"] });
const signika = Signika({
    weight: ["500"],
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Boschi Albano Jose",
    description: "Portafolio - Boschi Albano Jose - UTN FRT",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOST}`),
    icons: "/portafolio.ico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${(merienda.className, signika.className)}`}>
                <main id="effect" className="main-container ">
                    {/* aside */}
                    <aside className="relative">
                        <div className=" absolute top-0 left-0 m-5 ">
                            <a
                                href="CV.pdf"
                                download={"Boschi Albano Jose"}
                                className=" font-bold flex flex-row justify-center items-center"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" w-[25px] h-[25px] fill-[#c2cf09]"
                                >
                                    <path d="M211.48,35.32l-130.25-23A20,20,0,0,0,58.05,28.54l-29.75,169a20,20,0,0,0,16.22,23.16l130.25,23h0a20.1,20.1,0,0,0,3.52.31A20,20,0,0,0,198,227.46l29.75-169A20,20,0,0,0,211.48,35.32ZM175,219.36,52.63,197.75,81,36.64,203.37,58.25ZM91.9,67a12,12,0,0,1,13.9-9.73L173,69.14A12,12,0,0,1,171,93a12.59,12.59,0,0,1-2.1-.18L101.63,80.9A12,12,0,0,1,91.9,67ZM85,106.39a12,12,0,0,1,13.91-9.73l67.22,11.88A12,12,0,0,1,164,132.35a12.5,12.5,0,0,1-2.1-.18L94.69,120.29A12,12,0,0,1,85,106.39ZM78,145.78a12,12,0,0,1,13.9-9.73L125.54,142a12,12,0,0,1-2.07,23.82,11.63,11.63,0,0,1-2.1-.19l-33.61-5.93A12,12,0,0,1,78,145.78Z"></path>
                                </svg>
                                <strong className="text-[#c2cf09]">CV</strong>
                            </a>
                        </div>
                        {/* Nom - fac - des */}
                        <div className="flex flex-col justify-center items-center gap-8">
                            <div className=" flex-grow-0 w-[60%] aspect-square grid place-items-center rounded-[1.5rem] mt-8">
                                <img
                                    src="foto.png"
                                    alt=""
                                    className=" object-fill w-[100%] aspect-square"
                                    id="foto"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h1 className=" text-gray-300 text-2xl font-bold">
                                    Boschi Albano José
                                </h1>

                                <h1 className=" text-gray-300 text-lg">
                                    Tecnico Universitario en Programacion
                                </h1>
                            </div>
                            <h1 className="flex-grow text-[#c2cf09] text-lg py-2 px-6 rounded-xl bg-[#2a2a31] ">
                                Desarrollador Full Stack
                            </h1>
                        </div>
                        {/* sobre mi */}
                        <div className=" flex flex-col justify-start items-center gap-4">
                            <h1 className=" text-gray-300 text-lg py-2 px-6 tracking-wide">
                                <strong className=" text-[#c2cf09]">✔</strong>{" "}
                                Graduado de la Universidad Tecnológica Nacional
                                - Facultad Regional Tucumán
                            </h1>
                            <h1 className=" text-gray-300 text-lg py-2 px-6 tracking-wide">
                                <strong className=" text-[#c2cf09]">✔</strong>{" "}
                                Soy una persona autodidacta, responsable y
                                comprometida con mi trabajo.
                            </h1>
                            <h1 className=" text-gray-300 text-lg py-2 px-6 tracking-wide">
                                <strong className=" text-[#c2cf09]">✔</strong>{" "}
                                Constantemente estoy aprendiendo nuevas
                                tecnologias y herramientas para mejorar mis
                                habilidades.
                            </h1>
                        </div>
                    </aside>

                    {/* main */}

                    <Main>{children}</Main>
                </main>
            </body>
        </html>
    );
}
