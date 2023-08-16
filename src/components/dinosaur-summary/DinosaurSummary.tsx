import { Dinosaur } from "@/data/dinosaurs";
import "./dinosaur-summary.css";
import { ItalicizeScientificName } from "../italicize-scientific-name/ItalicizeScientificName";

export const DinosaurSummary = ({ dinosaur }: { dinosaur: Dinosaur }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h2 className="dinosaurTitle">{dinosaur.summary.title}</h2>
      <p className="dinosaurDescription text-center">
        <ItalicizeScientificName>
          {dinosaur.summary.description}
        </ItalicizeScientificName>
      </p>
    </div>
  );
};
