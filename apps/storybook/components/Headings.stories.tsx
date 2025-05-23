import { Heading } from '@package/ui'
import type { Meta, StoryObj } from '@storybook/react'
import { View } from 'react-native'

const meta = {
  title: 'Heading',
  component: Heading,
  args: {
    variant: 'h1',
    children: 'H1',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1',
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2',
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3',
  },
}
