import { Dinosaur } from "@/data/dinosaurs";
import "./dinosaur-summary.css";

export const DinosaurSummary = ({ dinosaur }: { dinosaur: Dinosaur }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h2 className="dinosaurTitle">{dinosaur.summary.title}</h2>
      <p className="dinosaurDescription text-center">
        {dinosaur.summary.description}
      </p>
    </div>
  );
};
