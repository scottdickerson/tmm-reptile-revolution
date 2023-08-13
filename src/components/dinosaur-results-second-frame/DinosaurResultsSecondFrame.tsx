import { Dinosaur } from "@/data/dinosaurs";
import { PropsWithChildren } from "react";
import "./dinosaur-results-frame.css";

interface DinosaursResultsSecondFrameProps {
  dinosaur: Dinosaur;
}

export const DinosaursResultsSecondFrame = ({
  dinosaur,
  children,
}: PropsWithChildren<DinosaursResultsSecondFrameProps>) => {
  return (
    <div className="dinosaurResultsFrame">
      {" "}
      <h4 className="dinosaurResultsTitle">Cretaceous Community</h4>
      <h5 className="dinosaurResultsSubtitle">Texas Fossil Finds</h5>
      {children}
    </div>
  );
};
