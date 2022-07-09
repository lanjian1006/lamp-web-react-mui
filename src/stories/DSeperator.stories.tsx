import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DSeparator from "../components/DSeparator/DSeparator";


export default {
    title: 'Example/DSeperator',
    component: DSeparator,
} as ComponentMeta<typeof DSeparator>;

const Template: ComponentStory<typeof DSeparator> = (args) => <DSeparator {...args} />;

const list : Array<string> = ['a', 'b', 'c', 'd', 'e']
export const Primary = Template.bind({});
Primary.args = {
    children: list
};
