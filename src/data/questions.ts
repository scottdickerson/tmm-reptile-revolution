/**
 * When the user answers a question the choice will indicate a characteristic of that dinosaur
 * that is later used to match the user with a dinosaur.
 */

import { StaticImageData } from "next/image";
import accessoryBoa from "@/data/question-images/Pick an Accessory/WebPs/Accessory1-Boa@2x.webp";
import accessoryLaceCollar from "@/data/question-images/Pick an Accessory/WebPs/Accessory2-LaceCollar@2x.webp";
import accessoryHat from "@/data/question-images/Pick an Accessory/WebPs/Accessory3-Hat@2x.webp";
import lookSpikes from "@/data/question-images/Pick a Look/WebPs/Look1-Spikes@2x.webp";
import lookBeak from "@/data/question-images/Pick a Look/WebPs/Look2-Beak@2x.webp";
import lookPlain from "@/data/question-images/Pick a Look/WebPs/Look3-Plain@2x.webp";
import adventureHangGliding from "@/data/question-images/Pick an adventure/WebPs/Adventure 1-Hang Gliding@2x.webp";
import adventureMountainBiking from "@/data/question-images/Pick an adventure/WebPs/Adventure 2-Mountain Biking@2x.webp";
import adventureRockClimbing from "@/data/question-images/Pick an adventure/WebPs/Adventure 3-Rock Climbing@2x.webp";
import workoutPushups from "@/data/question-images/Choose a Workout/WebPs/Workout1-PushUps@2x.webp";
import workoutJumping from "@/data/question-images/Choose a Workout/WebPs/Workout2-JumpingJacks@2x.webp";
import workoutRowing from "@/data/question-images/Choose a Workout/WebPs/Workout3-Rowing@2x.webp";
import dogChihuahua from "@/data/question-images/Choose a dog/WebPs/Dog1-Chihuaha@2x.webp";
import dogGreatDane from "@/data/question-images/Choose a dog/WebPs/Dog2-GreatDane@2x.webp";
import dogBeagle from "@/data/question-images/Choose a dog/WebPs/Dog3-Beagle@2x.webp";
import eatVeggies from "@/data/question-images/What do you want to eat/WebPs/What to Eat 1-Veggies@2x.webp";
import eatSteak from "@/data/question-images/What do you want to eat/WebPs/What to Eat 2-Steak@2x.webp";
import eatChickenAndVeggies from "@/data/question-images/What do you want to eat/WebPs/What to Eat 3-Chicken and Veggies@2x.webp";
import protectionWall from "@/data/question-images/Best Protection/WebPs/Protection1-Wall@2x.webp";
import protectionArmor from "@/data/question-images/Best Protection/WebPs/Protection2-Armor@2x.webp";
import protectionLance from "@/data/question-images/Best Protection/WebPs/Protection3-Lance@2x.webp";
import toolClaw from "@/data/question-images/Pick a tool/WebPs/Tool1-GrabbyClaw@2x.webp";
import toolCanOpener from "@/data/question-images/Pick a tool/WebPs/Tool2-CanOpener@2x.webp";
import toolGrillFork from "@/data/question-images/Pick a tool/WebPs/Tool3-GrillFork@2x.webp";
import vacationBeach from "@/data/question-images/Pick a Vacation/WebPs/Vacation1-Beach@2x.webp";
import vacationRiver from "@/data/question-images/Pick a Vacation/WebPs/Vacation2-River@2x.webp";
import vacationForest from "@/data/question-images/Pick a Vacation/WebPs/Vacation3-Forest@2x.webp";
import shirtTieDie from "@/data/question-images/Pick a Shirt/WebPs/Shirt1-Tie-Dye@2x.webp";
import shirtCamo from "@/data/question-images/Pick a Shirt/WebPs/Shirt2-Camo@2x.webp";
import shirtJersey from "@/data/question-images/Pick a Shirt/WebPs/Shirt3-Jersey@2x.webp";
import weaponSword from "@/data/question-images/Pick a Weapon/WebPs/Weapon1-Sword@2x.webp";
import weaponShield from "@/data/question-images/Pick a Weapon/WebPs/Weapon2-Shield@2x.webp";
import weaponNunchucks from "@/data/question-images/Pick a Weapon/WebPs/Weapon3-Nunchucks@2x.webp";
import toySlinkie from "@/data/question-images/Pick a Toy/WebPs/Toy1-Slinkie@2x.webp";
import toyPotatoHead from "@/data/question-images/Pick a Toy/WebPs/Toy2-PotatoHead@2x.webp";
import toyArmyGuys from "@/data/question-images/Pick a Toy/WebPs/Toy3-ArmyMan@2x.webp";

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
        image: accessoryBoa,
        matchingCharacteristic: Characteristic.FEATHERS,
      },
      {
        image: accessoryLaceCollar,
        matchingCharacteristic: Characteristic.FRILLS,
      },
      {
        image: accessoryHat,
        matchingCharacteristic: Characteristic.CRESTS,
      },
    ],
  },
  {
    question: "Pick a look.",
    type: "image",
    choices: [
      {
        image: lookSpikes,
        matchingCharacteristic: Characteristic.SPIKES,
      },
      {
        image: lookBeak,
        matchingCharacteristic: Characteristic.BEAKS,
      },
      {
        image: lookPlain,
        matchingCharacteristic: Characteristic.PLAIN_LOOK,
      },
    ],
  },
  {
    question: "Pick an adventure.",
    type: "image",
    choices: [
      {
        image: adventureHangGliding,
        matchingCharacteristic: Characteristic.FLYING,
      },
      {
        image: adventureMountainBiking,
        matchingCharacteristic: Characteristic.RUNNING_SWIMMING_FAST,
      },
      {
        image: adventureRockClimbing,
        matchingCharacteristic: Characteristic.CLIMBING,
      },
    ],
  },
  {
    question: "Choose a workout.",
    type: "image",
    choices: [
      {
        image: workoutPushups,
        matchingCharacteristic: Characteristic.STRONG_FORELIMBS,
      },
      {
        image: workoutJumping,
        matchingCharacteristic: Characteristic.STRONG_BACKLIMBS,
      },
      {
        image: workoutRowing,
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
    type: "image",
    choices: [
      {
        image: dogChihuahua,
        matchingCharacteristic: Characteristic.SMALL,
      },
      {
        image: dogGreatDane,
        matchingCharacteristic: Characteristic.BIG,
      },
      {
        image: dogBeagle,
        matchingCharacteristic: Characteristic.EITHER_OR_SIZE,
      },
    ],
  },

  {
    question: "What do you want to eat?",
    type: "image",
    choices: [
      {
        image: eatVeggies,
        matchingCharacteristic: Characteristic.PLANT_EATER,
      },
      {
        image: eatSteak,
        matchingCharacteristic: Characteristic.MEAT_EATER,
      },
      {
        image: eatChickenAndVeggies,
        matchingCharacteristic: Characteristic.OMNIVORE,
      },
    ],
  },
  {
    question: "What's the best protection?",
    type: "image",
    choices: [
      {
        image: protectionWall,
        matchingCharacteristic: Characteristic.SHELLS,
      },
      {
        image: protectionArmor,
        matchingCharacteristic: Characteristic.ARMOR,
      },
      {
        image: protectionLance,
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
    type: "image",
    choices: [
      {
        image: toolClaw,
        matchingCharacteristic: Characteristic.LONG_NECK,
      },
      {
        image: toolCanOpener,
        matchingCharacteristic: Characteristic.BEAK,
      },
      {
        image: toolGrillFork,
        matchingCharacteristic: Characteristic.CLAWS,
      },
    ],
  },
  {
    question: "Pick a Vacation Spot",
    type: "image",
    choices: [
      {
        image: vacationBeach,
        matchingCharacteristic: Characteristic.OCEAN,
      },
      {
        image: vacationRiver,
        matchingCharacteristic: Characteristic.NEAR_WATER,
      },
      {
        image: vacationForest,
        matchingCharacteristic: Characteristic.LIVES_ON_LAND,
      },
    ],
  },
  {
    question: "Pick a Shirt",
    type: "image",
    choices: [
      {
        image: shirtTieDie,
        matchingCharacteristic: Characteristic.PEACEFUL,
      },
      {
        image: shirtCamo,
        matchingCharacteristic: Characteristic.AGGRESSIVE,
      },
      {
        image: shirtJersey,
        matchingCharacteristic: Characteristic.PEACEFUL_UNLESS_PROVOKED,
      },
    ],
  },
  {
    question: "Pick a Weapon",
    type: "image",
    choices: [
      {
        image: weaponSword,
        matchingCharacteristic: Characteristic.TEETH_CLAWS,
      },
      {
        image: weaponShield,
        matchingCharacteristic: Characteristic.SHELL_ARMOR_HORNS,
      },
      {
        image: weaponNunchucks,
        matchingCharacteristic: Characteristic.OTHER_WEAPON,
      },
    ],
  },
  {
    question: "Pick a Toy",
    type: "image",
    choices: [
      {
        image: toySlinkie,
        matchingCharacteristic: Characteristic.LONG_BODY,
      },
      {
        image: toyPotatoHead,
        matchingCharacteristic: Characteristic.STOCKY_BODY,
      },
      {
        image: toyArmyGuys,
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
