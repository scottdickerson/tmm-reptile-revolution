export const ItalicizeScientificName = (
  text: string,
  scientificName: string
) => {
  {
    text.split(" ").map((word) => {
      // Italicize the scientific name
      return scientificName.split(" ").includes(word) ? <i>{word}</i> : word;
    });
  }
};
