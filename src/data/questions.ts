/**
 * When the user answers a question the choice will indicate a characteristic of that dinosaur
 * that is later used to match the user with a dinosaur.
 */

import { StaticImageData } from "next/image";
import frills from "@/data/images/frills.png";
import crest from "@/data/images/crest.png";
import feathers from "@/data/images/feathers.png";

export enum Characteristic {
  // WATER
  WATER_ALWAYS = "WATER_ALWAYS",
  WATER_MOSTLY = "WATER_MOSTLY",
  LAND_LOVER = "LAND_LOVER",

  // ACCESSORY
  FEATHERS = "FEATHERS",
  FRILLS = "FRILLS",
  CRESTS = "CRESTS",

  // LOOK
  SPIKES = "SPIKES",
  BEAKS = "BEAKS",
  PLAIN_LOOK = "PLAIN_LOOK",

  // ADVENTURE
  FLYING = "FLYING",
  RUNNING_SWIMMING_FAST = "RUNNING_SWIMMING_FAST",
  CLIMBING = "CLIMBING",

  // WORKOUT
  STRONG_FORELIMBS = "STRONG_FORELIMBS",
  STRONG_BACKLIMBS = "STRONG_BACKLIMBS",
  STRONG_ALLLIMBS = "STRONG_ALLLIMBS",

  // SIZE
  SMALL = "SMALL",
  BIG = "BIG",
  EITHER_OR_SIZE = "EITHER_OR_SIZE",

  // EAT
  PLANT_EATER = "PLANT_EATER",
  MEAT_EATER = "MEAT_EATER",
  OMNIVORE = "OMNIVORE",

  // PROTECTION
  SHELLS = "SHELLS",
  ARMOR = "ARMOR",
  HORNS = "HORNS",

  // EATING
  BIG_MEALS = "BIG_MEALS",
  SMALL_MEALS = "SMALL_MEALS",
  FREQUENT_MEALS = "FREQUENT_MEALS",

  // SOCIAL
  SOCIAL = "SOCIAL",
  LONER = "LONER",
  INTROVERT_AND_EXTROVERT = "INTROVERT_AND_EXTROVERT",

  // DEFENSE
  FIGHT = "FIGHT",
  FLIGHT = "FLIGHT",
  HIDE = "HIDE",

  // TOOLS
  LONG_NECK = "LONG_NECK",
  BEAK = "BEAK",
  CLAWS = "CLAWS",

  // LIVES
  OCEAN = "OCEAN",
  NEAR_WATER = "NEAR_WATER",
  LIVES_ON_LAND = "LAND",

  // ATTITUDE
  PEACEFUL = "PEACEFUL",
  AGGRESSIVE = "AGGRESSIVE",
  PEACEFUL_UNLESS_PROVOKED = "PEACEFUL_UNLESS_PROVOKED",

  // WEAPON
  TEETH_CLAWS = "TEETH_CLAWS",
  SHELL_ARMOR_HORNS = "SHELL_ARMOR_HORNS",
  OTHER_WEAPON = "OTHER_WEAPON",

  // BODY FORM
  LONG_BODY = "LONG_BODY",
  STOCKY_BODY = "STOCKY_BODY",
  BALANCED_BODY = "BALANCED_BODY",

  // MOVEMENT
  FLY = "FLY",
  SWIM = "SWIM",
  RUN = "RUN",
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
        text: "Yes, but not right now.",
        matchingCharacteristic: Characteristic.WATER_MOSTLY,
      },
      {
        text: "I'll just dip my toes in.",
        matchingCharacteristic: Characteristic.LAND_LOVER,
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
  {
    question: "Pick a look.",
    type: "text",
    choices: [
      {
        text: "Leather Spiked Jacked (image)",
        matchingCharacteristic: Characteristic.SPIKES,
      },
      {
        text: "guy with plague mask (image)",
        matchingCharacteristic: Characteristic.BEAKS,
      },
      {
        text: "khaki's and button down (image)",
        matchingCharacteristic: Characteristic.PLAIN_LOOK,
      },
    ],
  },
  {
    question: "Pick an adventure.",
    type: "text",
    choices: [
      {
        text: "Hang gliding (image)",
        matchingCharacteristic: Characteristic.FLYING,
      },
      {
        text: "Mountain biking (image)",
        matchingCharacteristic: Characteristic.RUNNING_SWIMMING_FAST,
      },
      {
        text: "Rock Climbing (image)",
        matchingCharacteristic: Characteristic.CLIMBING,
      },
    ],
  },
  {
    question: "Choose a workout.",
    type: "text",
    choices: [
      {
        text: "Push ups (image)",
        matchingCharacteristic: Characteristic.STRONG_FORELIMBS,
      },
      {
        text: "Jumping Jacks (image)",
        matchingCharacteristic: Characteristic.STRONG_BACKLIMBS,
      },
      {
        text: "Rowing Machine (image)",
        matchingCharacteristic: Characteristic.STRONG_ALLLIMBS,
      },
    ],
  },
  {
    question: "Pick a Sport",
    type: "text",
    choices: [
      {
        text: "Gymnastics",
        matchingCharacteristic: Characteristic.SMALL,
      },
      {
        text: "Football",
        matchingCharacteristic: Characteristic.BIG,
      },
      {
        text: "Baseball",
        matchingCharacteristic: Characteristic.EITHER_OR_SIZE,
      },
    ],
  },
  {
    question: "Pick a dog.",
    type: "text",
    choices: [
      {
        text: "chihuahua (image)",
        matchingCharacteristic: Characteristic.SMALL,
      },
      {
        text: "Great Dane (image)",
        matchingCharacteristic: Characteristic.BIG,
      },
      {
        text: "Beagle (image)",
        matchingCharacteristic: Characteristic.EITHER_OR_SIZE,
      },
    ],
  },

  {
    question: "What do you want to eat?",
    type: "text",
    choices: [
      {
        text: "veggies (image)",
        matchingCharacteristic: Characteristic.PLANT_EATER,
      },
      {
        text: "steak (image)",
        matchingCharacteristic: Characteristic.MEAT_EATER,
      },
      {
        text: "chicken and veggies (image)",
        matchingCharacteristic: Characteristic.OMNIVORE,
      },
    ],
  },
  {
    question: "What's the best protection?",
    type: "text",
    choices: [
      {
        text: "fortress wall (image)",
        matchingCharacteristic: Characteristic.SHELLS,
      },
      {
        text: "Knight in shining armor (image)",
        matchingCharacteristic: Characteristic.ARMOR,
      },
      {
        text: "Guy with a lance/spear (image)",
        matchingCharacteristic: Characteristic.HORNS,
      },
    ],
  },
  {
    question: "Wanna grab a bite to eat?",
    type: "text",
    choices: [
      {
        text: "Yes, I could eat a horse!",
        matchingCharacteristic: Characteristic.BIG_MEALS,
      },
      {
        text: "Sure, but I just need a snack.",
        matchingCharacteristic: Characteristic.SMALL_MEALS,
      },
      {
        text: "I'm eating right now.",
        matchingCharacteristic: Characteristic.FREQUENT_MEALS,
      },
    ],
  },
  {
    question: "Wanna hang out?",
    type: "text",
    choices: [
      {
        text: "Yes, I love togetherness.",
        matchingCharacteristic: Characteristic.SOCIAL,
      },
      {
        text: "Meh. I'm gonna have some me time. ",
        matchingCharacteristic: Characteristic.LONER,
      },
      {
        text: "Whatever. ",
        matchingCharacteristic: Characteristic.INTROVERT_AND_EXTROVERT,
      },
    ],
  },
  {
    question: "Something's coming!",
    type: "text",
    choices: [
      {
        text: "Don't worry I'll handle it! ",
        matchingCharacteristic: Characteristic.FIGHT,
      },
      {
        text: "Run!",
        matchingCharacteristic: Characteristic.LONER,
      },
      {
        text: "Hide!",
        matchingCharacteristic: Characteristic.HIDE,
      },
    ],
  },
  {
    question: "Pick a tool.",
    type: "text",
    choices: [
      {
        text: "extendy grabber things (image) ",
        matchingCharacteristic: Characteristic.LONG_NECK,
      },
      {
        text: "can opener (image)",
        matchingCharacteristic: Characteristic.BEAK,
      },
      {
        text: "sharp-tined grilling fork (image)",
        matchingCharacteristic: Characteristic.CLAWS,
      },
    ],
  },
  {
    question: "Pick a Vacation Spot",
    type: "text",
    choices: [
      {
        text: "Beach House (image)",
        matchingCharacteristic: Characteristic.OCEAN,
      },
      {
        text: "River/Lake House (image)",
        matchingCharacteristic: Characteristic.NEAR_WATER,
      },
      {
        text: "Forest Cabin (image)",
        matchingCharacteristic: Characteristic.LIVES_ON_LAND,
      },
    ],
  },
  {
    question: "Pick a Shirt",
    type: "text",
    choices: [
      {
        text: "tie-dye (image)",
        matchingCharacteristic: Characteristic.PEACEFUL,
      },
      {
        text: "Camo  (image)",
        matchingCharacteristic: Characteristic.AGGRESSIVE,
      },
      {
        text: "Sports Jersey (image)",
        matchingCharacteristic: Characteristic.PEACEFUL_UNLESS_PROVOKED,
      },
    ],
  },
  {
    question: "Pick a Weapon",
    type: "text",
    choices: [
      {
        text: "Sword (image)",
        matchingCharacteristic: Characteristic.TEETH_CLAWS,
      },
      {
        text: "Shield (image)",
        matchingCharacteristic: Characteristic.SHELL_ARMOR_HORNS,
      },
      {
        text: "Nunchucks (image)",
        matchingCharacteristic: Characteristic.OTHER_WEAPON,
      },
    ],
  },
  {
    question: "Pick a Toy",
    type: "text",
    choices: [
      {
        text: "Slinkie (image)",
        matchingCharacteristic: Characteristic.LONG_BODY,
      },
      {
        text: "Mr. Potato Head (generic image)",
        matchingCharacteristic: Characteristic.STOCKY_BODY,
      },
      {
        text: "Green Army guys (image)",
        matchingCharacteristic: Characteristic.BALANCED_BODY,
      },
    ],
  },
  {
    question: "Pick a Superhero",
    type: "text",
    choices: [
      {
        text: "Superman",
        matchingCharacteristic: Characteristic.FLY,
      },
      {
        text: "Aquaman",
        matchingCharacteristic: Characteristic.SWIM,
      },
      {
        text: "The Flash",
        matchingCharacteristic: Characteristic.RUN,
      },
    ],
  },
  {
    question: "Choose an Activity",
    type: "text",
    choices: [
      {
        text: "Swimming",
        matchingCharacteristic: Characteristic.OCEAN,
      },
      {
        text: "Fishing",
        matchingCharacteristic: Characteristic.NEAR_WATER,
      },
      {
        text: "Hiking",
        matchingCharacteristic: Characteristic.LIVES_ON_LAND,
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

export const QUESTION_COUNT = 6;
