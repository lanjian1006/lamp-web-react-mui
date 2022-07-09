import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DMenuItem from "../components/DMenu/DMenuItem";
import BuildIcon from '@mui/icons-material/Build';
import { MenuList } from '@mui/material';

export default {
    title: 'Example/DMenuItem',
    component: DMenuItem,
} as ComponentMeta<typeof DMenuItem>;

const Template: ComponentStory<typeof DMenuItem> = (args) => <MenuList><DMenuItem {...args} /></MenuList>;
const handleClick = (e: React.MouseEvent) => {
    console.log(e);
}

export const Primary = Template.bind({});
Primary.args = {
    prefixIcon: <BuildIcon fontSize='small'/>,
    primary: 'Build Project',
    handleClick: handleClick
};
