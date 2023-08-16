import { Dinosaur } from "@/data/dinosaurs";
import "./dinosaur-size.css";
import Image from "next/image";
import { ItalicizeScientificName } from "../italicize-scientific-name/ItalicizeScientificName";

interface DinosaurSizeProps {
  dinosaur: Dinosaur;
}

export const DinosaurSize = ({ dinosaur }: DinosaurSizeProps) => {
  return (
    <div className="dinosaurSize">
      <Image src={dinosaur.size.image} alt="size" />
      <p className="dinosaurTimeDescription">
        <ItalicizeScientificName>
          {dinosaur.size.description}
        </ItalicizeScientificName>
      </p>
    </div>
  );
};
