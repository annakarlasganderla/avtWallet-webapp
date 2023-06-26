import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStory<typeof Button>;

export default {
    title: "AVT/Component/Button",
    component: Button,
} as Meta;

export const Default: Story = (args) => {
    return <Button {...args} />
};
Default.storyName = "Padrão";
