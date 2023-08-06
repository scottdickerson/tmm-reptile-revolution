/**
 * When the user answers a question the choice will indicate a characteristic of that dinosaur
 * that is later used to match the user with a dinosaur.
 */

import { StaticImageData } from "next/image";
import frills from "@/data/images/frills.png";
import crest from "@/data/images/crest.png";
import feathers from "@/data/images/feathers.png";

export enum Characteristic {
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

interface BaseQuestionType {
  question: string;
  type: "image" | "text";
}

export interface ImageQuestionType extends BaseQuestionType {
  choices: { image: StaticImageData; matchingCharacteristic: Characteristic }[];
}

export interface TextQuestionType extends BaseQuestionType {
  choices: { text: string; matchingCharacteristic: Characteristic }[];
}

export const questions: (ImageQuestionType | TextQuestionType)[] = [
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
  {
    question: "What do you want to eat?",
    type: "text",
    choices: [
      { text: "Veggies", matchingCharacteristic: Characteristic.PLANT_EATER },
      { text: "Steak", matchingCharacteristic: Characteristic.MEAT_EATER },
      {
        text: "Steak and veggies",
        matchingCharacteristic: Characteristic.OMNIVORE,
      },
    ],
  },
  {
    question: "Pick an accessory.",
    type: "image",
    choices: [
      {
        image: frills,
        matchingCharacteristic: Characteristic.FRILLS,
      },
      {
        image: feathers,
        matchingCharacteristic: Characteristic.FEATHERS,
      },
      {
        image: crest,
        matchingCharacteristic: Characteristic.CRESTS,
      },
    ],
  },
];

export const isTextQuestion = (
  question: ImageQuestionType | TextQuestionType
): question is TextQuestionType => question.type === "text";

export const isImageQuestion = (
  question: ImageQuestionType | TextQuestionType
): question is ImageQuestionType => question.type === "image";

export const QUESTION_COUNT = 4;
