"use client";
import Link from "next/link";
import { useQuizReload } from "./hooks/useQuizReload";

export default function Home() {
  useQuizReload();
  return (
    <Link href="/question/0">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Pullscreen!
      </main>
    </Link>
  );
}
