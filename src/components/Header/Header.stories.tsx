import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Header from './index';

export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header/>;

export const Primary = Template.bind({});

