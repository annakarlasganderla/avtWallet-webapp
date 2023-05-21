import { ComponentMeta, ComponentStory } from "@storybook/react";
import List from "../List";

type Meta = ComponentMeta<typeof List>;
type Story = ComponentStory<typeof List>;

export default {
	title: "AVT/Componentes/List",
	component: List,
} as Meta;

export const Default: Story = (args) => {
	return <List {...args} />;
};
Default.storyName = "Padrão";
