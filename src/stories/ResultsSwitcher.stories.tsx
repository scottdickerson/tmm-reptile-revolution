import type { Meta, StoryObj } from "@storybook/react";

import {
  ResultCategory,
  ResultsSwitcher,
} from "../components/results-switcher/ResultsSwitcher";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Results/ResultsSwitcher",
  component: ResultsSwitcher,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ResultsSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResultsSwitcherStory: Story = {
  args: { category: ResultCategory.SUMMARY, dinosaur: "allosaurus" },
};
