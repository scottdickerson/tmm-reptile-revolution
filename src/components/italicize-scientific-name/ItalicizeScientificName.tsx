import { scientificNames } from "@/data/dinosaurs";
import "./italicize-scientific-name.css";

interface ItalicizeScientificNameProps {
  children: string;
}

export const ItalicizeScientificName = ({
  children,
}: ItalicizeScientificNameProps) => {
  const scientificNamesWords = scientificNames
    .map((scientificName) => scientificName.split(" "))
    .reduce((allNames, scientificNameArray) => {
      return [...allNames, ...scientificNameArray];
    }, []);
  return children.split(" ").map((word) => {
    return scientificNamesWords.find((namePart) => {
      const scientificNameRegex = new RegExp(
        `^${namePart}s*$`, // support plurals too
        "i"
      );
      // match the scientific name with punctuation removed
      return scientificNameRegex.test(word.replace(/[^a-z0-9]/gi, ""));
    }) ? (
      <span key={word} className="italicized ">
        {word}&nbsp;
      </span>
    ) : (
      word + " "
    );
  });
};
