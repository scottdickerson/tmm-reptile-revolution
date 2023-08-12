"use client";

import { useState } from "react";
import "./dinosaur-switcher.css";
import { dinosaurs } from "@/data/dinosaurs";
import Link from "next/link";
import { ResultCategory } from "../results-switcher/ResultsSwitcher";

export const DinosaurSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="absolute right-32 top-24 dinosaurSwitcher p-4 "
        onClick={() => setIsOpen(true)}
      >
        Switch dinosaur
      </button>
      {isOpen && (
        <div className="absolute right-32 top-40 flex flex-col">
          {Object.keys(dinosaurs).map((dinosaur) => (
            <Link
              key={dinosaur}
              className="dinosaurSwitcher__dropdown__item"
              href={`../${dinosaur}/${ResultCategory.SUMMARY}`}
              onClick={() => setIsOpen(false)}
            >
              {dinosaur}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
