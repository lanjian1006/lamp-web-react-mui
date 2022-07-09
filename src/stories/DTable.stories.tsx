import { ComponentMeta, ComponentStory } from "@storybook/react";
import {DTable} from "../components";
import {Column} from "../components";
import {Paper, TableContainer} from "@mui/material";

export default {
    title: 'Example/DTable',
    component: DTable
} as ComponentMeta<typeof DTable>;

const Template: ComponentStory<typeof DTable> = (args) => <TableContainer component={Paper}>
    <DTable {...args} />
</TableContainer>

const Columns: Column[] = [
    {
        field: 'id',
        fieldName: 'ID',
        width: '100'
    },
    {
        field: 'firstName',
        fieldName: 'First Name',
        fixed: 'right',
        width: '200'
    },
    {
        field: 'lastName',
        fieldName: 'Last Name',
        width: '200'
    },
    {
        field: 'age',
        fieldName: 'Age'
    }
]
const tableDataSource = [
    {
        id: '1',
        firstName: 'Jian',
        lastName: 'Lan',

    },
    {
        id: '2',
        firstName: 'Ting',
        lastName: 'Cheng'
    },
    {
        id: '3',
        firstName: 'Ting',
        lastName: 'Cheng'
    },
    {
        id: '4',
        firstName: 'Ting',
        lastName: 'Cheng'
    },
    {
        id: '5',
        firstName: 'Ting',
        lastName: 'Cheng'
    }
]
export const Primary = Template.bind({});
Primary.args = {
    columns: Columns,
    dataSource: tableDataSource
};
