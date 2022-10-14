import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    id: "remember"
  },
  argTypes: {},
  decorators: [
    Story => {
      return (
        <label htmlFor="remember" className="flex gap-2 items-center">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </label>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}