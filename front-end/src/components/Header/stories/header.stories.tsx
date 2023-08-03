import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../Header";

type Meta = ComponentMeta<typeof Header>;
type Story = ComponentStory<typeof Header>;

export default {
	title: "AVT/Componentes/Header",
	component: Header,
} as Meta;

export const Default: Story = (args) => {
	return <Header {...args} />;
};
