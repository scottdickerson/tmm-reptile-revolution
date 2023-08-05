import { dinosaurs, findBestMatchingDinosaur } from "./dinosaurs";
import { Characteristic } from "./questions";

describe("findBestMatchingDinosaur", () => {
  it("should return the dinosaur with the most matching characteristics", () => {
    const characteristics = [Characteristic.FLYING, Characteristic.OMNIVORE];
    const result = findBestMatchingDinosaur(characteristics);
    expect(result).toEqual("pterosaur");
  });
  it("equally matching characteristics should return the a random dinosaur", () => {
    const characteristics = ["bogus"];
    // @ts-expect-error intentially passing in a bogus characteristic
    const result = findBestMatchingDinosaur(characteristics);
    expect(result).toBeOneOf(Object.keys(dinosaurs));
  });
});
