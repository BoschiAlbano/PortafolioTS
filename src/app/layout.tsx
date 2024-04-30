import type { Metadata } from "next";
import { Merienda, Signika } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/header";

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
            <body
                className={`mostrar ${(merienda.className, signika.className)}`}
            >
                <HeaderMenu />
                {children}
            </body>
        </html>
    );
}
