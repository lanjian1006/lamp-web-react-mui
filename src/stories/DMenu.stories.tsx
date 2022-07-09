import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DMenu, MenuNode } from 'components/DMenu';
import BuildIcon from '@mui/icons-material/Build';

export default {
    title: 'Example/DMenu',
    component: DMenu,
} as ComponentMeta<typeof DMenu>;

const Template: ComponentStory<typeof DMenu> = (args) => <DMenu {...args} />;

const menuJson: MenuNode[] = [{
    id: 'fruit',
    icon: <BuildIcon fontSize='small' />,
    name: 'Fruit',
    children: [
        {
            icon: <BuildIcon fontSize='small' />,
            name: 'Apple',
            id: 'apple'
        },
        {
            icon: <BuildIcon fontSize='small' />,
            name: 'Peach',
            id: 'peach',
        },
        {
            icon: <BuildIcon fontSize='small' />,
            name: 'Orange Class',
            id: 'orange_class',
            children: [
                {
                    icon: <BuildIcon fontSize='small' />,
                    name: 'Orange',
                    id: 'orange'
                },
                {
                    id: 'pomolo',
                    icon: <BuildIcon fontSize='small' />,
                    name: 'Pomelo',
                },
                {
                    id: 'linmo',
                    icon: <BuildIcon fontSize='small' />,
                    name: 'Linmo',
                },
            ]
        },
    ]
}]
export const Primary = Template.bind({});
Primary.args = {
    dataSource: menuJson
};
