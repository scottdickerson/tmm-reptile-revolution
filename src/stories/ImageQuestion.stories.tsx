import type { Meta, StoryObj } from "@storybook/react";

import { ImageQuestion } from "../components/image-question/ImageQuestion";
import feathers from "../data/question-images/Pick an Accessory/WebPs/Accessory1-Boa@2x.webp";
import frills from "../data/question-images/Pick an Accessory/WebPs/Accessory2-LaceCollar@2x.webp";
import crest from "../data/question-images/Pick an Accessory/WebPs/Accessory3-Hat@2x.webp";
import { Characteristic } from "../data/questions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "ImageQuestion",
  component: ImageQuestion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ImageQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageQuestionStory: Story = {
  args: {
    question: {
      type: "image",
      question: "Pick an accessory.",
      choices: [
        {
          image: feathers,
          matchingCharacteristic: Characteristic.FEATHERS,
        },
        {
          image: frills,
          matchingCharacteristic: Characteristic.FRILLS,
        },
        {
          image: crest,
          matchingCharacteristic: Characteristic.CRESTS,
        },
      ],
    },
  },
};
