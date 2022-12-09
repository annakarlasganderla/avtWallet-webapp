import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Select from './index';

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    options: [{text: 'text', data: 'teste'}]
};