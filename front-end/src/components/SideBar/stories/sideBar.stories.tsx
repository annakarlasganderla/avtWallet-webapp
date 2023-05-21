import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideBar from "../SideBar";

type Meta = ComponentMeta<typeof SideBar>;
type Story = ComponentStory<typeof SideBar>;

export default {
	title: "AVT/Componentes/SideBar",
	component: SideBar,
} as Meta;

export const Default: Story = () => {
	return <SideBar />;
};
Default.storyName = "Padrão";
