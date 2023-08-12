import { shuffle } from "lodash";
import { Characteristic } from "./questions";
import { StaticImageData } from "next/image";
import therapodLarge from "@/data/results-images/large-therapod.svg";
import pterosaur from "@/data/results-images/pterosaur.svg";
import hornedDinosaur from "@/data/results-images/horned-dinosaur/horned-dinosaur.gif";
import hornedDinosaurTime from "@/data/results-images/horned-dinosaur/horned-dinosaur-time.gif";

export interface Dinosaur {
  characteristics: Characteristic[];
  image: StaticImageData;
  summary: {
    title: string;
    description: string;
  };
  time: { description: string; image: StaticImageData };
  location: string;
  size: string;
  funFact1: string;
  funFact2: string;
}

// TODO: Remove Partial once we have all the data
export const dinosaurs: Record<string, Dinosaur> = {
  turtleSea: {
    summary: {
      title: "You’re a turtle!",
      description:
        "Turtles are the only reptiles with a bony shell. They eventually diversified into many different family lines, including the sea turtle.",
    },
    characteristics: [
      Characteristic.WATER_ALWAYS,
      Characteristic.PLAIN_LOOK,
      Characteristic.STRONG_FORELIMBS,
      Characteristic.EITHER_OR_SIZE,
      Characteristic.PLANT_EATER,
      Characteristic.SHELLS,
      Characteristic.FREQUENT_MEALS,
      Characteristic.LONER,
      Characteristic.HIDE,
      Characteristic.BEAK,
      Characteristic.OCEAN,
      Characteristic.PEACEFUL,
      Characteristic.SHELL_ARMOR_HORNS,
      Characteristic.STOCKY_BODY,
      Characteristic.SWIM,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  turtleLand: {
    summary: {
      title: "You’re a turtle!",
      description: "Turtles are the only reptiles with a bony shell.",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.PLAIN_LOOK,
      Characteristic.STRONG_FORELIMBS,
      Characteristic.EITHER_OR_SIZE,
      Characteristic.PLANT_EATER,
      Characteristic.SHELLS,
      Characteristic.FREQUENT_MEALS,
      Characteristic.LONER,
      Characteristic.HIDE,
      Characteristic.BEAK,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL,
      Characteristic.SHELL_ARMOR_HORNS,
      Characteristic.STOCKY_BODY,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  lizard: {
    summary: {
      title: "You’re a lizard!",
      description:
        "Lizards are among the most ancient reptile body forms. All reptiles evolved from a lizard-like ancestor.",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.FRILLS,
      Characteristic.PLAIN_LOOK,
      Characteristic.CLIMBING,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.SMALL,
      Characteristic.OMNIVORE,
      Characteristic.SMALL_MEALS,
      Characteristic.INTROVERT_AND_EXTROVERT,
      Characteristic.FLIGHT,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL,
      Characteristic.BALANCED_BODY,
      Characteristic.RUN,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  snake: {
    summary: {
      title: "You’re a snake!",
      description:
        "Snakes may have no legs, but they get around just fine. Their streamlined bodies can fit into all types of tight spots.",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.PLAIN_LOOK,
      Characteristic.CLIMBING,
      Characteristic.SMALL,
      Characteristic.MEAT_EATER,
      Characteristic.BIG_MEALS,
      Characteristic.LONER,
      Characteristic.FIGHT,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL_UNLESS_PROVOKED,
      Characteristic.TEETH_CLAWS,
      Characteristic.LONG_BODY,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  crocodileLarge: {
    summary: {
      title: "You’re a crocodile!",
      description:
        "Along with birds, crocodiles are the only surviving archosaurs - the reptile group that includes dinosaurs. These snappy-jawed reptiles include today's crocodiles, alligators, and even little caimans.",
    },
    characteristics: [
      Characteristic.WATER_MOSTLY,
      Characteristic.SPIKES,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.MEAT_EATER,
      Characteristic.ARMOR,
      Characteristic.BIG_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FIGHT,
      Characteristic.CLAWS,
      Characteristic.NEAR_WATER,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.STOCKY_BODY,
      Characteristic.SWIM,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  crocodile: {
    summary: {
      title: "You’re a crocodile!",
      description:
        "Along with birds, crocodiles are the only surviving archosaurs - the reptile group that includes dinosaurs. These snappy-jawed reptiles include today's crocodiles, alligators, and even little caimans.",
    },
    characteristics: [
      Characteristic.WATER_MOSTLY,
      Characteristic.SPIKES,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.SMALL,
      Characteristic.MEAT_EATER,
      Characteristic.ARMOR,
      Characteristic.SMALL_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FIGHT,
      Characteristic.CLAWS,
      Characteristic.NEAR_WATER,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.STOCKY_BODY,
      Characteristic.SWIM,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  mosasaur: {
    summary: {
      title: "You’re a mosasaur!",
      description:
        "These enormous, swimming reptiles ruled the ancient oceans, but they were not dinosaurs. They were part of the lizard and snake family.",
    },
    characteristics: [
      Characteristic.WATER_ALWAYS,
      Characteristic.PLAIN_LOOK,
      Characteristic.RUNNING_SWIMMING_FAST,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.MEAT_EATER,
      Characteristic.FREQUENT_MEALS,
      Characteristic.INTROVERT_AND_EXTROVERT,
      Characteristic.FIGHT,
      Characteristic.OCEAN,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.STOCKY_BODY,
      Characteristic.SWIM,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  plesiosaurLongNeck: {
    summary: {
      title: "You’re a plesiosaur!",
      description:
        "Plesiosaurs were a family of swimming reptiles. They were great swimmers with a taste for seafood.",
    },
    characteristics: [
      Characteristic.WATER_ALWAYS,
      Characteristic.PLAIN_LOOK,
      Characteristic.RUNNING_SWIMMING_FAST,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.MEAT_EATER,
      Characteristic.FREQUENT_MEALS,
      Characteristic.INTROVERT_AND_EXTROVERT,
      Characteristic.FLIGHT,
      Characteristic.LONG_NECK,
      Characteristic.OCEAN,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.LONG_BODY,
      Characteristic.SWIM,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  plesiosaurShortNeck: {
    summary: {
      title: "You’re a plesiosaur!",
      description:
        "Plesiosaurs were a family of swimming reptiles. They were great swimmers with a taste for seafood.",
    },
    characteristics: [
      Characteristic.WATER_ALWAYS,
      Characteristic.PLAIN_LOOK,
      Characteristic.RUNNING_SWIMMING_FAST,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.MEAT_EATER,
      Characteristic.FREQUENT_MEALS,
      Characteristic.INTROVERT_AND_EXTROVERT,
      Characteristic.FLIGHT,
      Characteristic.OCEAN,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.LONG_BODY,
      Characteristic.SWIM,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },

  pterosaur: {
    image: pterosaur,
    summary: {
      title: "You’re a pterosaur!",
      description:
        "Pterosaurs were a family of flying reptiles. They came in lots of shapes and sizes.",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.CRESTS,
      Characteristic.BEAK,
      Characteristic.FLYING,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.MEAT_EATER,
      Characteristic.SMALL_MEALS,
      Characteristic.INTROVERT_AND_EXTROVERT,
      Characteristic.FLIGHT,
      Characteristic.LONG_NECK,
      Characteristic.NEAR_WATER,
      Characteristic.AGGRESSIVE,
      Characteristic.OTHER_WEAPON,
      Characteristic.LONG_BODY,
      Characteristic.FLY,
    ],
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  armoredDinosaur: {
    summary: {
      title: "You’re an armored dinosaur! ",
      description:
        'Armored dinosaurs form the family group thyreophora - which means "shield bearers." They were a diverse group including all the ankylosaurs and stegosaurs.',
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.SPIKES,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.EITHER_OR_SIZE,
      Characteristic.PLANT_EATER,
      Characteristic.ARMOR,
      Characteristic.FREQUENT_MEALS,
      Characteristic.INTROVERT_AND_EXTROVERT,
      Characteristic.HIDE,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL_UNLESS_PROVOKED,
      Characteristic.SHELL_ARMOR_HORNS,
      Characteristic.STOCKY_BODY,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  hornedDinosaur: {
    summary: {
      title: "You’re a horned dinosaur! ",
      description:
        'Horned dinosaurs form the family group ceratopsia - which means "horned face." Triceratops is the most famous (but not the only) family member.',
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.FRILLS,
      Characteristic.SPIKES,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.PLANT_EATER,
      Characteristic.HORNS,
      Characteristic.FREQUENT_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FIGHT,
      Characteristic.BEAK,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL_UNLESS_PROVOKED,
      Characteristic.SHELL_ARMOR_HORNS,
      Characteristic.STOCKY_BODY,
      Characteristic.RUN,
    ],
    image: hornedDinosaur,
    time: {
      description:
        "Horned Dinos evolved in the Late Cretaceous, making them one of the last types of dinosaurs to appear before the extinction event.",
      image: hornedDinosaurTime,
    },
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  duckbillDinosaur: {
    summary: {
      title: "You’re a duckbill dinosaur! ",
      description:
        'Duckbill dinosaurs form the family group hadrosauridae - which means "stout lizard." They have flat snouts and large, rounded bodies.',
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.CRESTS,
      Characteristic.BEAKS,
      Characteristic.STRONG_BACKLIMBS,
      Characteristic.BIG,
      Characteristic.PLANT_EATER,
      Characteristic.FREQUENT_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FLIGHT,
      Characteristic.NEAR_WATER,
      Characteristic.PEACEFUL,
      Characteristic.OTHER_WEAPON,
      Characteristic.STOCKY_BODY,
      Characteristic.RUN,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  therapodSmall: {
    summary: {
      title: "You’re a small therapod! ",
      description:
        "Theropods are a diverse group.These two-legged terrors came in all sizes and eventually included birds. Scientists distinguish between theropods that are birds (avians) and theropods that were not (non-avian).",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.FEATHERS,
      Characteristic.SPIKES,
      Characteristic.RUNNING_SWIMMING_FAST,
      Characteristic.STRONG_BACKLIMBS,
      Characteristic.SMALL,
      Characteristic.MEAT_EATER,
      Characteristic.SMALL_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FIGHT,
      Characteristic.CLAWS,
      Characteristic.LIVES_ON_LAND,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.BALANCED_BODY,
      Characteristic.RUN,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  bird: {
    summary: {
      title: "You’re a bird! ",
      description:
        "Birds are a branch of the theropod dinosaur family. Scientists distinguish between theropods that are birds (avians) and theropods that were not (non-avian).",
    },
    characteristics: [
      Characteristic.WATER_MOSTLY,
      Characteristic.FEATHERS,
      Characteristic.BEAKS,
      Characteristic.FLYING,
      Characteristic.STRONG_FORELIMBS,
      Characteristic.SMALL,
      Characteristic.OMNIVORE,
      Characteristic.SMALL_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FLIGHT,
      Characteristic.BEAK,
      Characteristic.CLAWS,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL_UNLESS_PROVOKED,
      Characteristic.TEETH_CLAWS,
      Characteristic.BALANCED_BODY,
      Characteristic.FLY,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
  therapodLarge: {
    image: therapodLarge,
    summary: {
      title: "You’re a large therapod!",
      description:
        "Theropods are a diverse group.These two-legged terrors came in all sizes and eventually included birds. Scientists distinguish between theropods that are birds (avians) and theropods that were not (non-avian).",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.FEATHERS,
      Characteristic.SPIKES,
      Characteristic.RUNNING_SWIMMING_FAST,
      Characteristic.STRONG_BACKLIMBS,
      Characteristic.BIG,
      Characteristic.MEAT_EATER,
      Characteristic.BIG_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FIGHT,
      Characteristic.CLAWS,
      Characteristic.LIVES_ON_LAND,
      Characteristic.AGGRESSIVE,
      Characteristic.TEETH_CLAWS,
      Characteristic.BALANCED_BODY,
      Characteristic.RUN,
    ],
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Big",
    funFact1: "T-Rex is a dinosaur",
    funFact2: "T-Rex is a carnivore",
  },
  sauropod: {
    summary: {
      title: "You’re a sauropod!",
      description:
        "Long-necked sauropods are among the most popular dinosaurs. We imagine these dinos as gentle giants who spent their days peacefully munching on tree tops.",
    },
    characteristics: [
      Characteristic.LAND_LOVER,
      Characteristic.CRESTS,
      Characteristic.SPIKES,
      Characteristic.STRONG_ALLLIMBS,
      Characteristic.BIG,
      Characteristic.PLANT_EATER,
      Characteristic.FREQUENT_MEALS,
      Characteristic.SOCIAL,
      Characteristic.FIGHT,
      Characteristic.LONG_NECK,
      Characteristic.LIVES_ON_LAND,
      Characteristic.PEACEFUL,
      Characteristic.OTHER_WEAPON,
      Characteristic.LONG_BODY,
    ],
    image: pterosaur,
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Medium",
    funFact1: "Pterosaur is a dinosaur",
    funFact2: "Pterosaur is a carnivore",
  },
};

export const findBestMatchingDinosaur = (
  characteristics: Characteristic[]
): string => {
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
