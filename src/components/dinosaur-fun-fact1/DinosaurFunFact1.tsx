import { Dinosaur } from "@/data/dinosaurs";
import "../dinosaur-time/dinosaur-time.css";
import "./dinosaur-fun-fact1.css";
import { ItalicizeScientificName } from "../italicize-scientific-name/ItalicizeScientificName";

export const DinosaurFunFact1 = ({ dinosaur }: { dinosaur: Dinosaur }) => {
  return (
    <div className="dinosaurTime">
      <h6 className="dinosaurFunFact1Title">{dinosaur.funFact1.title}</h6>
      <p className="dinosaurFunFact1Description dinosaurTimeDescription">
        <ItalicizeScientificName>
          {dinosaur.funFact1.description}
        </ItalicizeScientificName>
      </p>
    </div>
  );
};
