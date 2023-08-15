import { Dinosaur } from "@/data/dinosaurs";
import Image from "next/image";
import "../dinosaur-time/dinosaur-time.css";
import "./dinosaur-location.css";
import { ItalicizeScientificName } from "@/components/italicize-scientific-name/ItalicizeScientificName";

interface DinosaurLocationProps {
  dinosaur: Dinosaur;
}

export const DinosaurLocationMap = ({ dinosaur }: DinosaurLocationProps) => {
  return (
    <div className="dinosaurLocationMapSection">
      <div className="dinosaurLocationMap">
        <Image
          src={dinosaur.location.imageMap}
          height="227"
          width="243"
          alt="location map"
        ></Image>
      </div>
      <div className="dinosaurGridRow dinosaurGridEvenRow">Fossil find</div>
      <div className="dinosaurGridRow dinosaurGridEvenRow">
        {dinosaur.location.county}
      </div>
      <div className="dinosaurGridRow">Scientific name</div>
      <div className="dinosaurGridRow italicized">
        {dinosaur.scientificName}
      </div>
      <div className="dinosaurGridRow dinosaurGridEvenRow">Age range</div>
      <div className="dinosaurGridRow dinosaurGridEvenRow">
        {dinosaur.location.ageRange}
      </div>
    </div>
  );
};

export const DinosaurLocation = ({ dinosaur }: DinosaurLocationProps) => {
  return (
    <div className="dinosaurLocation">
      <div className="dinosaurLocationMapAndFossilSection">
        <DinosaurLocationMap dinosaur={dinosaur} />
        <div className="dinosaurLocationFossilSection">
          <Image src={dinosaur.location.imageFossil} alt="fossil" />
          <p className="dinosaurTimeDescription dinosaurLocationDescription">
            <ItalicizeScientificName
              text={dinosaur.location.description}
              scientificName={dinosaur.scientificName}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
