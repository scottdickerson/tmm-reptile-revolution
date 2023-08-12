import { Dinosaur } from "@/data/dinosaurs";
import Image from "next/image";
import "./dinosaur-time.css";

export const DinosaurTime = ({ dinosaur }: { dinosaur: Dinosaur }) => {
  return (
    <div className="dinosaurTime">
      <Image src={dinosaur.time.image} alt={dinosaur.time.description} />
      <p className="dinosaurTimeDescription">{dinosaur.time.description}</p>
    </div>
  );
};
