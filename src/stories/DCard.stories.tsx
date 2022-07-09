import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DHeadCard} from "../components/DCard";

export default {
    title: 'Example/DCard',
    component: DHeadCard,
} as ComponentMeta<typeof DHeadCard>;

const Template: ComponentStory<typeof DHeadCard> = (args) => <DHeadCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
