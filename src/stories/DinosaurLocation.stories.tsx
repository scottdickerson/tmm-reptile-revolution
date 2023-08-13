import { DinosaurLocation } from "@/components/dinosaur-location/DinosaurLocation";
import { dinosaurs } from "@/data/dinosaurs";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Results/DinosaurLocation",
  component: DinosaurLocation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof DinosaurLocation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsLocationStory: Story = {
  args: {
    dinosaur: dinosaurs.sauropod,
  },
};
