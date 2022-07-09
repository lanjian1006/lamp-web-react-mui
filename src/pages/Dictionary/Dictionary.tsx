import {Column, DTable} from "components";
import {useState} from "react";
import TableContainer from "components/TableContainer/TableContainer";
import {Button} from "@mui/material";

const onCheck = (event: any) => {
    event.stopPropagation()
}

const columns: Column[] = [
    {
        field: 'type',
        fieldName: '字典类型',
    },
    {
        field: 'status',
        fieldName: '状态',
        width: 120,
        cusDefine: {
            filedName: (row) => {
                return row.status === '1' ? '是' : '否'
            }
        }
    },
    {
        field: 'action',
        fieldName: '操作',
        width: 80,
        cusDefine: {
            filedName: () => {
                return <Button variant={'text'} onClick={onCheck}>查看</Button>
            }
        }
    }
]

export default function Dictionary() {

    const [src, setSrc] = useState([
        {
            id: '1',
            type: '民族',
            status: '1'
        },
        {
            id: '2',
            type: '学历',
            status: '0'
        }
    ])

    return <TableContainer title={'数字字典'} description={'系统字典有两级，第一级是字典类型，第二级是字典具体的字典。'}>
        <DTable
            columns={columns}
            dataSource={src}
            border
            cellAlign={'center'}
            size={'small'} />
    </TableContainer>
}