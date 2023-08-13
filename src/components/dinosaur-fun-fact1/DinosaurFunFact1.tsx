import { Dinosaur } from "@/data/dinosaurs";
import "../dinosaur-time/dinosaur-time.css";
import "./dinosaur-fun-fact1.css";

export const DinosaurFunFact1 = ({ dinosaur }: { dinosaur: Dinosaur }) => {
  return (
    <div className="dinosaurTime">
      <h6 className="dinosaurFunFact1Title">{dinosaur.funFact1.title}</h6>
      <p className="dinosaurFunFact1Description dinosaurTimeDescription">
        {dinosaur.funFact1.description}
      </p>
    </div>
  );
};
