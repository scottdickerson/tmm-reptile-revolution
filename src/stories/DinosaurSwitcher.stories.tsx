import { DinosaurSwitcher } from "@/components/dinosaur-switcher/DinosaurSwitcher";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Results/DinosaurSwitcher",
  component: DinosaurSwitcher,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof DinosaurSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsSwitcherStory: Story = {
  args: {},
};
