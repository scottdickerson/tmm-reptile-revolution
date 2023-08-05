/**
 * When the user answers a question the choice will indicate a characteristic of that dinosaur
 * that is later used to match the user with a dinosaur.
 */

import { StaticImageData } from "next/image";

enum Characteristic {
  WATER_ALWAYS = "WATER_ALWAYS",
  WATER_MOSTLY = "WATER_MOSTLY",
  WATER_RARELY = "WATER_RARELY",
  FEATHERS = "FEATHERS",
  FRILLS = "FRILLS",
  CRESTS = "CRESTS",
  FLYING = "FLYING",
  RUNNING = "RUNNING",
  CLIMBING = "CLIMBING",
  STRONG_FORELIMBS = "STRONG_FORELIMBS",
  STRONG_BACKLIMBS = "STRONG_BACKLIMBS",
  STRONG_ALLLIMBS = "STRONG_ALLLIMBS",
  SMALL = "SMALL",
  BIG = "BIG",
  MEDIUM_SIZE = "MEDIUM_SIZE",
  PLANT_EATER = "PLANT_EATER",
  MEAT_EATER = "MEAT_EATER",
  OMNIVORE = "OMNIVORE",
  SHELLS = "SHELLS",
  ARMOR = "ARMOR",
  HORNS = "HORNS",
  BIG_MEALS = "BIG_MEALS",
  SMALL_MEALS = "SMALL_MEALS",
  FREQUENT_MEALS = "FREQUENT_MEALS",
  SOCIAL = "SOCIAL",
  LONER = "LONER",
  INTROVERT_AND_EXTROVERT = "INTROVERT_AND_EXTROVERT",
  FIGHT = "FIGHT",
  FLIGHT = "FLIGHT",
  HIDE = "HIDE",
  LONG_NECK = "LONG_NECK",
  BEAK = "BEAK",
  CLAWS = "CLAWS",
}

interface BaseQuestion {
  question: string;
  type: "image" | "text";
}

export interface ImageQuestion extends BaseQuestion {
  choices: { image: StaticImageData; matchingCharacteristic: Characteristic }[];
}

export interface TextQuestion extends BaseQuestion {
  choices: { text: string; matchingCharacteristic: Characteristic }[];
}

export const questions: (ImageQuestion | TextQuestion)[] = [
  {
    question: "Want to go swimming?",
    type: "text",
    choices: [
      {
        text: "Yes, always!",
        matchingCharacteristic: Characteristic.WATER_ALWAYS,
      },
      {
        text: "Yes, but not right now!",
        matchingCharacteristic: Characteristic.WATER_MOSTLY,
      },
      {
        text: "I'll just dip my toes in",
        matchingCharacteristic: Characteristic.WATER_RARELY,
      },
    ],
  },
  {
    question: "Pick an adventure!",
    type: "text",
    choices: [
      { text: "Skydiving", matchingCharacteristic: Characteristic.FLYING },
      {
        text: "Tour de France",
        matchingCharacteristic: Characteristic.RUNNING,
      },
      {
        text: "Rock climbing",
        matchingCharacteristic: Characteristic.CLIMBING,
      },
    ],
  },
];
