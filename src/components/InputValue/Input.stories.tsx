import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InputValue from './index';

export default {
    title: 'Input',
    component: InputValue,
} as ComponentMeta<typeof InputValue>;

const Template: ComponentStory<typeof InputValue> = (args) => <InputValue {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    options: [{text: 'text', data: 'teste'}]
};

