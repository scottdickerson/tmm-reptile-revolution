import { shuffle } from "lodash";
import { Characteristic } from "./questions";
import { StaticImageData } from "next/image";

import pterosaur from "@/data/dinosaur-images/pterosaur.svg";
import hornedDinosaur from "@/data/dinosaur-images/horned-dinosaur.gif";
import therapodLarge from "@/data/dinosaur-images/large-therapod.svg";
import turtleLand from "@/data/dinosaur-images/turtle-land.svg";
import turtleSea from "@/data/dinosaur-images/turtle-sea.svg";

import hornedDinosaurTime from "@/data/timeline-images/horned-dinosaur-time.gif";
import turtleSeaTime from "@/data/timeline-images/turtle-sea-time.gif";
import sauropodTime from "@/data/timeline-images/sauropod-time.gif";
import therapodLargeTime from "@/data/timeline-images/therapod-large-time.gif";
import birdTime from "@/data/timeline-images/bird-time.gif";
import therapodSmallTime from "@/data/timeline-images/therapod-small-time.gif";
import duckbillDinosaurTime from "@/data/timeline-images/duckbill-dinosaur-time.gif";
import armoredDinosaurTime from "@/data/timeline-images/armored-dinosaur-time.gif";
import crocodileLargeTime from "@/data/timeline-images/crocodile-large-time.gif";
import plesiosaurShortNeckTime from "@/data/timeline-images/plesiosaur-short-neck-time.gif";
import plesiosaurLongNeckTime from "@/data/timeline-images/plesiosaur-long-neck-time.gif";
import pterosaurTime from "@/data/timeline-images/pterosaur-time.gif";
import mosasaurTime from "@/data/timeline-images/mosasaur-time.gif";
import crocodileSmallTime from "@/data/timeline-images/crocodile-small-time.gif";
import snakeTime from "@/data/timeline-images/snake-time.gif";
import lizardTime from "@/data/timeline-images/lizard-time.gif";
import turtleLandTime from "@/data/timeline-images/turtle-land-time.gif";

import turtleSeaFossil from "@/data/fossil-images/2x/Turtle (sea)@2x.webp";
import turtleLandFossil from "@/data/fossil-images/2x/Turtle (land)@2x.webp";
import lizardFossil from "@/data/fossil-images/2x/Lizard@2x.webp";
import snakeFossil from "@/data/fossil-images/2x/Snake@2x.webp";
import crocodileLargeFossil from "@/data/fossil-images/2x/Crocodile 1@2x.webp";
import crocodileSmallFossil from "@/data/fossil-images/2x/Crocodile 2@2x.webp";
import mosasaurFossil from "@/data/fossil-images/2x/Mosasur@2x.webp";
import plesiosaurLongNeckFossil from "@/data/fossil-images/2x/Plesiosaur 1@2x.webp";
import plesiosaurShortNeckFossil from "@/data/fossil-images/2x/Plesiosaur 2@2x.webp";
import pterosaurFossil from "@/data/fossil-images/2x/Quetzalcoatlus northropi@2x.webp";
import armoredDinosaurFossil from "@/data/fossil-images/2x/Armored Dino@2x.webp";
import hornedDinosaurFossil from "@/data/fossil-images/2x/Horned Dinosaur@2x.webp";
import duckbillDinosaurFossil from "@/data/fossil-images/2x/Duckbill Dinosaur@2x.webp";
import therapodSmallFossil from "@/data/fossil-images/2x/Theropod (small)@2x.webp";
import birdFossil from "@/data/fossil-images/2x/Bird@2x.webp";
import therapodLargeFossil from "@/data/fossil-images/2x/Theropod (large)@2x.webp";
import sauropodFossil from "@/data/fossil-images/2x/Sauropod@2x.webp";

import alamosaurusMap from "@/data/location-images/2x/Alamosaurus@2x.webp";
import basilemysMap from "@/data/location-images/2x/Basilemys@2x.webp";
import bothriagenysMap from "@/data/location-images/2x/Bothriagenys@2x.webp";
import coniophisMap from "@/data/location-images/2x/Coniophis@2x.webp";
import deinosuchusMap from "@/data/location-images/2x/Deinosuchus@2x.webp";
import gryposaurusMap from "@/data/location-images/2x/Gryposaurus@2x.webp";
import ichthyornisMap from "@/data/location-images/2x/Ichthyornis@2x.webp";
import libonectesMap from "@/data/location-images/2x/Libonectes@2x.webp";
import mosasaurMap from "@/data/location-images/2x/Mosasaurus@2x.webp";
import pawPawSaurusMap from "@/data/location-images/2x/Pawpawsaurus@2x.webp";
import protostegaMap from "@/data/location-images/2x/Protostega@2x.webp";
import quetzalcoatlusMap from "@/data/location-images/2x/Quetzalcoatlus@2x.webp";
import saurornitholestesMap from "@/data/location-images/2x/Saurornitholestes@2x.webp";
import scolomastaxMap from "@/data/location-images/2x/Scolomastax@2x.webp";
import torosaurusMap from "@/data/location-images/2x/Torosaurus@2x.webp";
import trinacromerumMap from "@/data/location-images/2x/Trinacromerum@2x.webp";
import tyrannosaurusMap from "@/data/location-images/2x/Tyrannosaurus@2x.webp";

export interface Dinosaur {
  scientificName: string;
  characteristics: Characteristic[];
  image: StaticImageData;
  summary: {
    title: string;
    description: string;
  };
  time: { description: string; image: StaticImageData };
  location: {
    imageFossil: StaticImageData;
    description: string;
    imageMap: StaticImageData;
    county: string;
    ageRange: string;
  };
  size: string;
  funFact1: { title: string; description: string };
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
    scientificName: "Protostega",
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
    image: turtleSea,
    time: {
      image: turtleSeaTime,
      description:
        'The oldest known fossil sea turtle is 120 million years old, but the earliest "stem" turtles got their start in the Middle Triassic.',
    },
    location: {
      imageFossil: turtleSeaFossil,
      imageMap: protostegaMap,
      county: "McLennan County",
      description:
        "Scientists found an enormous fossilized sea turtle near Waco, Texas.",
      ageRange: "90-100 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Shovel-shaped",
      description:
        "Turtle shells may have first evolved for digging, not protection!",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  turtleLand: {
    summary: {
      title: "You’re a turtle!",
      description: "Turtles are the only reptiles with a bony shell.",
    },
    scientificName: "Basilemys",
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
    image: turtleLand,
    time: {
      image: turtleLandTime,
      description:
        "Turtles emerged millions of years before the dinosaurs and are still part of animal communities across the world.",
    },
    location: {
      imageFossil: turtleLandFossil,
      imageMap: basilemysMap,
      county: "Brewster County",
      description:
        "Scientists find fossils of these Cretaceous land turtles in western North America, including Texas.",
      ageRange: "72-84 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Land Dwellers",
      description:
        "The earliest turtles lived on land, at least most of the time. Their strong front legs were good for digging burrows.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  lizard: {
    summary: {
      title: "You’re a lizard!",
      description:
        "Lizards are among the most ancient reptile body forms. All reptiles evolved from a lizard-like ancestor.",
    },
    scientificName: "Bothriagenys",
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
    time: {
      image: lizardTime,
      description:
        "Lizards emerged millions of years before the dinosaurs and are still part of animal communities across the world.",
    },
    location: {
      imageFossil: lizardFossil,
      imageMap: bothriagenysMap,
      county: "Brewster County",
      description:
        "Scientists found tiny fossils of Cretaceous lizards in Big Bend National Park.",
      ageRange: "72-84 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Little Lizards",
      description:
        "Today some lizards, like the komodo dragon, are huge. But, the first lizards were pretty tiny.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  snake: {
    summary: {
      title: "You’re a snake!",
      description:
        "Snakes may have no legs, but they get around just fine. Their streamlined bodies can fit into all types of tight spots.",
    },
    scientificName: "Coniophis",
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
    time: {
      image: snakeTime,
      description:
        "Snakes evolved from lizard like ancestors during the Middle Jurassic and they are still part of animal communities across the world.",
    },
    location: {
      imageFossil: snakeFossil,
      imageMap: coniophisMap,
      county: "Brewster County",
      description:
        "Like many early snakes, Coniophis had tiny back legs. Snakes evolved from lizard-like ancestors.",
      ageRange: "72-84 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "That’s some back bone!",
      description:
        "Snakes' long bodies have more vertebrae (individual back bones), than most other animals. You have 33 vertebrae, but the average snake has over 200!",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  crocodileLarge: {
    summary: {
      title: "You’re a crocodile!",
      description:
        "Along with birds, crocodiles are the only surviving archosaurs - the reptile group that includes dinosaurs. These snappy-jawed reptiles include today's crocodiles, alligators, and even little caimans.",
    },
    scientificName: "Deinosuchus riograndensis",
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
    time: {
      image: crocodileLargeTime,
      description:
        "Crocodiles emerged during the early Jurassic and they are still part of animal communities across the world.",
    },
    location: {
      imageFossil: crocodileLargeFossil,
      imageMap: deinosuchusMap,
      county: "Brewster County",
      description:
        "Many types of extinct crocodiles lived in Cretaceous Texas, including Deinosuchus.",
      ageRange: "75-82 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "High Steppin’",
      description:
        'Crocodiles can use their strong legs to stand up high enough to keep their bellies from touching the ground. This "high walk" ability means they can move pretty quickly over rocks and vegetation.',
    },
    funFact2: "Pterosaur is a carnivore",
  },
  crocodile: {
    summary: {
      title: "You’re a crocodile!",
      description:
        "Along with birds, crocodiles are the only surviving archosaurs - the reptile group that includes dinosaurs. These snappy-jawed reptiles include today's crocodiles, alligators, and even little caimans.",
    },
    scientificName: "Scolomastax sahlsteini",
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
    time: {
      image: crocodileSmallTime,
      description:
        "Crocodiles emerged during the early Jurassic and they are still part of animal communities across the world.",
    },
    location: {
      imageFossil: crocodileSmallFossil,
      imageMap: scolomastaxMap,
      county: "Tarrant County",
      description:
        "Lots of now-extinct types of crocodiles lived in Cretaceous Texas, including Scolomastax.",
      ageRange: "95-100 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "High Steppin’",
      description:
        'Crocodiles can use their strong legs to stand up high enough to keep their bellies from touching the ground. This "high walk" ability means they can move pretty quickly over rocks and vegetation.',
    },
    funFact2: "Pterosaur is a carnivore",
  },
  mosasaur: {
    summary: {
      title: "You’re a mosasaur!",
      description:
        "These enormous, swimming reptiles ruled the ancient oceans, but they were not dinosaurs. They were part of the lizard and snake family.",
    },
    scientificName: "Mosasaurus hoffmannii",
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
    time: {
      image: mosasaurTime,
      description:
        "Mosasaurs came along relatively late in the game. They emerged in the Late Cretaceous and did not survive the extinction event.",
    },
    location: {
      imageFossil: mosasaurFossil,
      imageMap: mosasaurMap,
      county: "Travis County",
      description:
        "One of the most famous Texas mosasaurs was discovered along Onion Creek in Austin.",
      ageRange: "66-72 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Suited for Swimming",
      description:
        "Mosasaurs  streamlined bodies and paddle-like limbs were well adapted to life in the water. However, their powerful tails were their strongest advantage - providing massive thrust and making them the fastest swimmers of their time.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  plesiosaurLongNeck: {
    summary: {
      title: "You’re a plesiosaur!",
      description:
        "Plesiosaurs were a family of swimming reptiles. They were great swimmers with a taste for seafood.",
    },
    scientificName: "Libonectes",
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
    time: {
      image: plesiosaurLongNeckTime,
      description:
        "Plesiosaurs appeared during the Late Triassic. None survived the massive extinction event at the end of the Cretaceous.",
    },
    location: {
      imageFossil: plesiosaurLongNeckFossil,
      imageMap: libonectesMap,
      county: "Dallas County",
      description:
        "Libonectes was a long-necked plesiosaur that  swam in the shallow seas that once covered Texas.",
      ageRange: "92-95 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Don’t Call Me Dinosaur!",
      description:
        "Plesiosaurs weren't dinosaurs. They were swimming reptiles that evolved from earlier land-based ancestors. They used their paddle-shaped front and hind limbs to propel themselves through ancient seas.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  plesiosaurShortNeck: {
    summary: {
      title: "You’re a plesiosaur!",
      description:
        "Plesiosaurs were a family of swimming reptiles. They were great swimmers with a taste for seafood.",
    },
    scientificName: "Trinacromerum",
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
    time: {
      image: plesiosaurShortNeckTime,
      description:
        "Plesiosaurs appeared during the Late Triassic. None survived the massive extinction event at the end of the Cretaceous.",
    },
    location: {
      imageFossil: plesiosaurShortNeckFossil,
      imageMap: trinacromerumMap,
      county: "Falls County",
      description:
        "There were many different kinds of plesiosaurs. Trinacromerum had a shorter neck and longer snout.",
      ageRange: "89-93 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Don’t Call Me Dinosaur!",
      description:
        "Plesiosaurs weren't dinosaurs. They were swimming reptiles that evolved from earlier land-based ancestors. They used their paddle-shaped front and hind limbs to propel themselves through ancient seas.",
    },
    funFact2: "Pterosaur is a carnivore",
  },

  pterosaur: {
    image: pterosaur,
    summary: {
      title: "You’re a pterosaur!",
      description:
        "Pterosaurs were a family of flying reptiles. They came in lots of shapes and sizes.",
    },
    scientificName: "Quetzalcoatlus northropi",
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
    time: {
      image: pterosaurTime,
      description:
        "Pterosaurs glided along for over a hundred million years, but none survived the end-Cretaceous extinction event.",
    },
    location: {
      imageFossil: pterosaurFossil,
      imageMap: quetzalcoatlusMap,
      county: "Brewster County",
      description:
        "Quetzalcoatlus northropi was discovered by a University of Texas at Austin graduate student.",
      ageRange: "66-72 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Superpower?",
      description:
        "The ability to fly is a huge advantage. Insects were the first animals to evolve winged flight. But, pterosaurs, avian dinosaurs (birds), and mammals also evolved to take to the skies.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  armoredDinosaur: {
    summary: {
      title: "You’re an armored dinosaur! ",
      description:
        'Armored dinosaurs form the family group thyreophora - which means "shield bearers." They were a diverse group including all the ankylosaurs and stegosaurs.',
    },
    scientificName: "Pawpawsaurus",
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
    time: {
      image: armoredDinosaurTime,
      description:
        "Armored dinosaurs emerged in the Middle Jurassic, but none survived the extinction event at the end of the Cretaceous.",
    },
    location: {
      imageFossil: armoredDinosaurFossil,
      imageMap: pawPawSaurusMap,
      county: "Tarrant County",
      description: "Pawpawsaurus was discovered in 1992 by a teenager!",
      ageRange: "100-105 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Big-boned",
      description:
        'These dino\'s "armor" is formed by bony deposits that create hard protective plates over their bodies - probably as a defense against predators. Because the armor was made of bone, it survives in fossil form, allowing us to learn about these big-boned beasties!',
    },
    funFact2: "Pterosaur is a carnivore",
  },
  hornedDinosaur: {
    summary: {
      title: "You’re a horned dinosaur! ",
      description:
        'Horned dinosaurs form the family group ceratopsia - which means "horned face." Triceratops is the most famous (but not the only) family member.',
    },
    scientificName: "Torosaurus utahensis",
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
    location: {
      imageFossil: hornedDinosaurFossil,
      imageMap: torosaurusMap,
      county: "Brewster County",
      description:
        "Torosaurus fossils were discovered in Big Bend National Park.",
      ageRange: "66-72 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Hardy Headgear",
      description:
        'Horned dionsaurs all have a bony "frill" at the back of their skulls, horns set behind their eyes, and a specialized beak.',
    },
    funFact2: "Pterosaur is a carnivore",
  },
  duckbillDinosaur: {
    summary: {
      title: "You’re a duckbill dinosaur! ",
      description:
        'Duckbill dinosaurs form the family group hadrosauridae - which means "stout lizard." They have flat snouts and large, rounded bodies.',
    },
    scientificName: "Gryposaurus alsatei",
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
    time: {
      description:
        "These dinos appeared in the Late Cretaceous, making them one of the last types of dinosaurs to emerge before the extinction event.",
      image: duckbillDinosaurTime,
    },
    location: {
      imageFossil: duckbillDinosaurFossil,
      imageMap: gryposaurusMap,
      county: "Brewster County",
      description:
        "Scientists found Gryposaurus fossils in Big Bend National Park. Hadrosaur fossils are rare in this area, so the discovery is significant.",
      ageRange: "66-72 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Extra-large Extroverts",
      description:
        "Fossil evidence shows that duckbilled dinos were social. They built nests close to one another, raised their young together, and just generally hung out, kind of like a flock of birds today.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  therapodSmall: {
    summary: {
      title: "You’re a small therapod! ",
      description:
        "Theropods are a diverse group.These two-legged terrors came in all sizes and eventually included birds. Scientists distinguish between theropods that are birds (avians) and theropods that were not (non-avian).",
    },
    scientificName: "Saurornitholestes",
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
    time: {
      description:
        "The earliest dinosaurs walked on two legs! Non-avian theropods roamed the Earth for over 160 million years.",
      image: therapodSmallTime,
    },
    location: {
      imageFossil: therapodSmallFossil,
      imageMap: saurornitholestesMap,
      county: "Brewster County",
      description:
        "Scientists have found fossilized teeth of Saurornitholestes in and around Big Bend National Park.",
      ageRange: "72-84 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Two-legged Terrors",
      description:
        "These dinosaurs were meat-eaters with blade-like serrated teeth. They could chase after their prey on two legs and evolved relatively large hands with grasping ability. Some non-avian theropods had feathers like their relatives, the birds.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  bird: {
    summary: {
      title: "You’re a bird! ",
      description:
        "Birds are a branch of the theropod dinosaur family. Scientists distinguish between theropods that are birds (avians) and theropods that were not (non-avian).",
    },
    scientificName: "Ichthyornis",
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
    time: {
      description:
        "Avian theropods emerged in the Early Cretaceous and they are still part of animal communities around the world.",
      image: birdTime,
    },
    location: {
      imageFossil: birdFossil,
      imageMap: ichthyornisMap,
      county: "Travis County",
      description:
        "Ichthyornis was a toothed seabird that could both fly and swim.",
      ageRange: "83.5 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Feathered Fliers",
      description:
        "Other theropods had feathers, but couldn't fly. While some other dinosaurs may have even had wing-like forelimbs, true birds were the first dinosaurs to evolve sustained powered flight.",
    },
    funFact2: "Pterosaur is a carnivore",
  },
  therapodLarge: {
    image: therapodLarge,
    summary: {
      title: "You’re a large therapod!",
      description:
        "Theropods are a diverse group.These two-legged terrors came in all sizes and eventually included birds. Scientists distinguish between theropods that are birds (avians) and theropods that were not (non-avian).",
    },
    scientificName: "Tyrannosaurus",
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
    time: {
      description:
        "The earliest dinosaurs walked on two legs! Non-avian theropods roamed the Earth for over 160 million years.",
      image: therapodLargeTime,
    },
    location: {
      imageFossil: therapodLargeFossil,
      imageMap: tyrannosaurusMap,
      county: "Brewster County",
      description:
        "Scientists have found fossils of Tyrannosaurus in Big Bend National Park.",
      ageRange: "66-72 million years old",
    },
    size: "Big",
    funFact1: {
      title: "Two Steppin’!",
      description:
        "The first dinosaurs walked on two legs! The theropods, meat-eaters with blade-like serrated teeth, kept on walking and evolved relatively large hands with grasping ability.",
    },
    funFact2: "T-Rex is a carnivore",
  },
  sauropod: {
    summary: {
      title: "You’re a sauropod!",
      description:
        "Long-necked sauropods are among the most popular dinosaurs. We imagine these dinos as gentle giants who spent their days peacefully munching on tree tops.",
    },
    scientificName: "Alamosaurus",
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
    time: {
      description:
        "Sauropods were one of the earlier dinosaur groups to evolve, but none survived the extinction event at the end of the Cretaceous.",
      image: sauropodTime,
    },
    location: {
      imageFossil: sauropodFossil,
      imageMap: alamosaurusMap,
      county: "Brewster County",
      description:
        "Scientists found fossils of a massive Alamosaurus in Big Bend National Park.",
      ageRange: "66-70 million years old",
    },
    size: "Medium",
    funFact1: {
      title: "Explore More!",
      description:
        "You can see the fossilized hip bone of a juvenile Alamosaurus on the museum's first floor.",
    },
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
