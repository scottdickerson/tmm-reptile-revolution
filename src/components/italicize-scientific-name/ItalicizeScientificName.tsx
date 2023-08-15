interface ItalicizeScientificNameProps {
  text: string;
  scientificName: string;
}

export const ItalicizeScientificName = ({
  text,
  scientificName,
}: ItalicizeScientificNameProps) =>
  text.split(" ").map((word) =>
    scientificName.split(" ").includes(word) ||
    scientificName
      .split(" ")
      .find(
        (namePart) => `${namePart}.` === word || `${namePart}'` === word
      ) ? (
      <span key={word} className="italic m-1">
        {word}&nbsp;
      </span>
    ) : (
      word + " "
    )
  );
