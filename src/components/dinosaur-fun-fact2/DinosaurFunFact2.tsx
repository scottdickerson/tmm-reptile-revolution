import { Dinosaur } from "@/data/dinosaurs";
import Image from "next/image";
import "./dinosaur-fun-fact2.css";
import "../dinosaur-fun-fact1/dinosaur-fun-fact1.css";
import { ItalicizeScientificName } from "../italicize-scientific-name/ItalicizeScientificName";

export const DinosaurFunFact2 = ({ dinosaur }: { dinosaur: Dinosaur }) => {
  return (
    <div className="dinosaurFunFact2">
      <Image src={dinosaur.funFact2.image} alt="fun fact 2" />
      <h6 className="dinosaurFunFact1Title">{dinosaur.funFact2.title}</h6>
      <p className="dinosaurTimeDescription">
        <ItalicizeScientificName>
          {dinosaur.funFact2.description}
        </ItalicizeScientificName>
      </p>
    </div>
  );
};
