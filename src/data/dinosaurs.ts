import { shuffle } from "lodash";
import { Characteristic } from "./questions";

export interface Dinosaur {
  characteristics: Characteristic[];
  time: string;
  location: string;
  size: string;
  funFact1: string;
  funFact2: string;
}

export const dinosaurs: Record<string, Dinosaur> = {
  tyrannosaurus: {
    characteristics: [
      Characteristic.CLAWS,
      Characteristic.RUNNING,
      Characteristic.MEAT_EATER,
    ],
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Big",
    funFact1: "T-Rex is a dinosaur",
    funFact2: "T-Rex is a carnivore",
  },
  pterosaur: {
    characteristics: [
      Characteristic.FLYING,
      Characteristic.LONG_NECK,
      Characteristic.OMNIVORE,
    ],
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
};

export const findBestMatchingDinosaur = (characteristics: Characteristic[]) => {
  const dinoNameToCharacteristicCountMap = Object.entries(dinosaurs).reduce(
    (acc, [dinoName, dino]) => {
      const matchingCharacteristics = dino.characteristics.filter(
        (characteristic) => characteristics.includes(characteristic)
      );
      acc[dinoName] = matchingCharacteristics.length;
      return acc;
    },
    {} as Record<string, number>
  );

  console.log(
    "dinos with characteristic count",
    dinoNameToCharacteristicCountMap
  );

  // shuffle it so sometimes the user gets a different dinosaur if they have the same number of matching characteristics
  const dinoWithMostMatchingCharacteristics = shuffle(
    Object.entries(dinoNameToCharacteristicCountMap)
  ).reduce(
    (acc, [dinoName, count]) => {
      if (count >= acc.count) {
        acc.dinoName = dinoName;
        acc.count = count;
      }
      return acc;
    },
    { dinoName: Object.keys(dinosaurs)[0], count: 0 } as {
      dinoName: string;
      count: number;
    }
  );

  console.log(
    "dino with most matching characteristics",
    dinoWithMostMatchingCharacteristics
  );

  return dinoWithMostMatchingCharacteristics.dinoName;
};
