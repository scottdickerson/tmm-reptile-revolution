export interface Dinosaur {
  characteristics: string[];
  time: string;
  location: string;
  size: string;
  funFact1: string;
  funFact2: string;
}

export const dinosaurs: Record<string, Dinosaur> = {
  tyrannosaurus: {
    characteristics: ["WATER_ALWAYS", "FRILLS", "RUNNING_FAST"],
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Big",
    funFact1: "T-Rex is a dinosaur",
    funFact2: "T-Rex is a carnivore",
  },
  dinosaur2: {
    characteristics: ["FEATHERS", "FLYING", "OMNIVORE"],
    time: "Long time ago",
    location: "Somewhere in Texas",
    size: "Big",
    funFact1: "Dino2 is a dinosaur",
    funFact2: "Dino2 is a carnivore",
  },
};
