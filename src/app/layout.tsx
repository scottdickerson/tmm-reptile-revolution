import "./globals.css";
import type { Metadata } from "next";
import { Archivo, Commissioner } from "next/font/google";
import { QuizProvider } from "../providers/QuizProvider";
import classNames from "classnames";

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
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
