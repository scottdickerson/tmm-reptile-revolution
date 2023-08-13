import "./globals.css";
import type { Metadata } from "next";
import { Archivo, Commissioner } from "next/font/google";
import { QuizProvider } from "../providers/QuizProvider";
import classNames from "classnames";
import outerWrapper from "@/app/images/outerWrapper.svg";
import Image from "next/image";

const archivo = Archivo({ subsets: ["latin"], variable: "--archivo" });
const commissioner = Commissioner({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reptile Revolution",
  description: "Memorial museum reptile quiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(commissioner.className, archivo.variable)}>
        <div className="backgroundImage -z-20 absolute inset-0" />
        <Image
          src={outerWrapper}
          alt="wrapper"
          className="absolute inset-0 outerWrapper -z-10 w-full h-fit"
        />
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
