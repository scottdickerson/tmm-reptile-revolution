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
    scientificName.split(" ").find((namePart) => `${namePart}.` === word) ? (
      <span key={word} className="italic">
        {word}&nbsp;
      </span>
    ) : (
      word + " "
    )
  );
