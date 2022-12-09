import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from './index';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> teste</Button>;

export const Primary = Template.bind({});

Primary.args = {
    type: 'submit'
};