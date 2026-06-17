import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/menu/menu.component";
import Providers from "@/context/ProgressBarProvider";
import MouseLight from "@/components/mouse-light/MouseLight";
import * as React from "react";
import { SVGProps } from "react";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${inter.className}`}
      >
        {/* Flashlight cursor effect */}
        <MouseLight />
        {/* menu */}
        <NavComponent />

        <main id="effect">
          {/* aside */}
          <Aside />

          {/* content */}

          <Providers>
            <div className="relative w-full h-full flex sm:justify-start items-start justify-center sm:pt-[60px]">
              {children}
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}

function Aside() {
  return (
    <aside
      id="aside-profile"
      className="z-[100] w-full flex flex-col justify-center items-center "
    >
      {/* Nom - fac - des */}
      <div className="flex flex-col justify-center items-center gap-8 relative">
        <div className=" flex-grow-0 w-[60%] aspect-square grid place-items-center rounded-[1.5rem] mt-0 ">
          <div className="absolute -top-5 left-9 sm:fixed sm:top-0 sm:left-0 sm:m-5 z-[51]">
            <a
              href="CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn font-bold flex flex-row justify-center items-center gap-1"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="cv-btn__icon w-[22px] h-[22px] fill-[#c2cf09]"
              >
                <path d="M211.48,35.32l-130.25-23A20,20,0,0,0,58.05,28.54l-29.75,169a20,20,0,0,0,16.22,23.16l130.25,23h0a20.1,20.1,0,0,0,3.52.31A20,20,0,0,0,198,227.46l29.75-169A20,20,0,0,0,211.48,35.32ZM175,219.36,52.63,197.75,81,36.64,203.37,58.25ZM91.9,67a12,12,0,0,1,13.9-9.73L173,69.14A12,12,0,0,1,171,93a12.59,12.59,0,0,1-2.1-.18L101.63,80.9A12,12,0,0,1,91.9,67ZM85,106.39a12,12,0,0,1,13.91-9.73l67.22,11.88A12,12,0,0,1,164,132.35a12.5,12.5,0,0,1-2.1-.18L94.69,120.29A12,12,0,0,1,85,106.39ZM78,145.78a12,12,0,0,1,13.9-9.73L125.54,142a12,12,0,0,1-2.07,23.82,11.63,11.63,0,0,1-2.1-.19l-33.61-5.93A12,12,0,0,1,78,145.78Z"></path>
              </svg>
              <strong className="cv-btn__label text-[#c2cf09]">CV</strong>
            </a>
          </div>

          <div className="absolute  sm:-top-14 -top-8  sm:right-8 right-[4.25rem] z-[51]">
            <Svgfoco className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] sm:rotate-[10deg] rotate-[15deg]" />
          </div>
          <img
            src="foto.webp"
            alt=""
            className=" object-fill w-[90%] aspect-square rounded-full"
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
      <div className=" mt-10 flex flex-col justify-center items-center gap-4">
        <h1 className=" text-center text-gray-300 text-lg py-2 px-6 tracking-wide">
          <strong className=" text-[#c2cf09]">✔</strong> Graduado de la
          Universidad Tecnológica Nacional - Facultad Regional Tucumán
        </h1>
        <h1 className="text-center text-gray-300 text-lg py-2 px-6 tracking-wide">
          <strong className=" text-[#c2cf09]">✔</strong> Soy una persona
          autodidacta, responsable y comprometida con mi trabajo.
        </h1>
        <h1 className="text-center text-gray-300 text-lg py-2 px-6 tracking-wide">
          <strong className=" text-[#c2cf09]">✔</strong> Constantemente estoy
          aprendiendo nuevas tecnologias y herramientas para mejorar mis
          habilidades.
        </h1>
      </div>
    </aside>
  );
}

const Svgfoco = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 21000 29700"
    {...props}
  >
    <path
      d="m9599.65 22372.46 1018.91 307.41c-33.22 420.39-952.22 331.18-1018.91-307.41zm-608.03-2459.01c32.84-24.71-21.87-59.92 152.12-15.29l440.66 125.48c565.39 167.65 1125.61 378.84 1689.22 546.69 389.28 115.93 978.67 202.07 1061.69-248.4 150.44-816.26-1810.58-881.69-2988.18-1510.66-875.63-467.7-449.77-1157.05-761.31-2210.34-111.6-377.31-280.86-761.37-465.9-1033.35-206.91-304.12-412.43-560.7-599.08-899.26-594.37-1078.16-866.49-2296.09-268.14-3503.83 233.38-471.07 616.94-948.55 1020.63-1239.1 153.27-110.31 262.83-192.09 441.43-295.38 1322.92-765.06 3117.39-646.97 4282.21 298.9 336.94 273.61 628.24 573.78 881.01 986.61 663.8 1084.19 698.46 2346.78 34.76 3494.9-279.39 483.32-519.52 692.86-809.27 1057.92-61.67 77.69-114.86 106.91-176.87 191-377.7 512.14-548.79 718.25-811.67 1423.92-264.31 709.5-247.41 1429.61-646.26 1588.74-294.17 117.35-877.05 105.64-910.38-487.05-40.11-713.21 108.53-2290.06-163.87-2828.53-118.53-234.3-269.34-358.81-442.38-491.06l-199.59-168.46c-45.35-40.91-50.12-40.94-96.83-75.49-113.59-84.04-294.97-248.88-222.52-465.7 181.11 24.28 186.4 161.28 348.2 242.31 144.51 72.37 336.91 85.82 476.2-6.85 113.4-75.44 169.71-196.03 217.64-374.19 46.47-172.73 49.6-344.1 211.11-370.65 243.8 34.92 71.53 706.58 516.33 753.99 435.29 46.4 538.43-488.45 794.05-448.86 51.78 285.9-158.51 624.09-302.96 793.96-469.33 551.89-949.13 483.97-1052.72 618.91-96.28 125.41-41.6 301.83 84.38 349.09 380.38 142.7 1605.81-550.28 1725.34-1558.52 94.14-794.03-795.23-847.75-1122.5-241.96-128.48-134.46-68.33-750.98-715.15-710.75-489.62 30.46-453.6 540.37-608.91 800.96-88.12-41.38-585.03-638.07-959.37-63.69-281.58 432.05 128.43 879.42 336.18 1031.27l323.93 266.1c178.93 145.34 318.72 277.44 366.01 566.92 59.94 366.85 38.19 1073.34 36.51 1472.05-1.63 386-45.49 1102.66 112.28 1399.77 168.49 317.28 535.94 516.06 1031.72 496.89 1029.72-39.82 991.25-1061.38 1237.25-1789.21 165.98-491.09 353.8-890.89 645.48-1270.76l353.31-408.47c35-39.81 64.17-56.99 98.46-96.71 30.88-35.77 44.18-62.6 74.37-98.84 231.63-278.09 460.52-547.84 647.2-875.51 178.5-313.3 338.49-660.35 438.52-1058.91 282.65-1126.12-30.89-2379.84-744.59-3273.92-183.05-229.3-344.66-379.13-554.49-575.61-125.37-117.39-257.66-230.39-410.32-326.07-1509.99-946.36-3149.92-1005.35-4695.19-67.73-236.47 143.48-450.55 317.58-652.84 501.54-953.1 866.76-1443.51 2243.74-1135.15 3594.22 187.65 821.83 561.82 1526.99 965.59 2079.15 1239.13 1694.56 423.17 2657.05 1174.53 3370.02 564.73 535.87 1362.67 707.25 2092.64 928.61 195.66 59.33 383.99 115.97 581.28 179.95 155.99 50.58 407.25 104.94 508.34 245.88-401.39-13.05-1386.17-373.2-1791.01-510.36-323.04-109.45-1583.74-631.96-1629.88 87.79-51.33 800.61 2607.92 1052.91 3047.45 1491.5-699.43-96.91-1606.77-498.17-2321.33-700.23-274.58-77.65-598.49-75.7-657.98 214.98-151.93 742.44 1338.49 1056.03 1894.82 1230.39 33.59 10.52 56.6 15.03 91.79 25.7 59.35 18.02 126.27 39.58 187.61 57.92 126.84 37.93 263.36 66.9 361.21 136.33-790.48 1.97-1716.88-648.37-1929.5-355.19-93.63 129.1 10.62 525.37 58.81 672.72 233.53 713.97 990.77 999.29 1552.28 668.26 234.73-138.38 231.47-200.86 276.38-534.06 210.97-13.96 348.14-20.7 468.9-145.98 97.1-100.75 142.85-285.92 74.87-443.19-111.29-257.47-448.92-334.85-769.07-435.8-516.79-162.93-1181.03-309.52-1651.61-584.39-115.94-67.73-38.34-4.43-67.44-74.56 615.37 147.63 1918.11 725.65 2498.95 712.9 306.85-6.74 570.09-236.83 407.8-578.01-182.27-383.19-925.35-559.95-1418.52-719.22-267.28-86.33-540.56-162.3-808.71-247.41-162.05-51.44-685.02-278.91-759.96-286.73z"
      pathLength="1"
      className="draw-svg-path"
      style={{
        stroke: "#C2CF09",
        strokeWidth: "150",
      }}
    />
  </svg>
);
