import {Checkbox, TableRow, Typography} from "@mui/material";
import {ReactNode} from "react";
import TableCell, {TableCellProps} from "@mui/material/TableCell";

type Column = {
    field: string,
    fieldName: string,
    width?: number | string,
    fixed?: 'right' | 'left'
    cusDefine?: {
        filedName?: (row?: any) => string | number | boolean | ReactNode
    }
}

class TableRowData {
    [key: string]: any
}

interface DTableRowProps {
    children?: ReactNode
    columns?: Column[]
    rowData?: TableRowData
    rowIndex?: number
    type: 'head' | 'body'
    cellProps?: TableCellProps
    hover?: boolean
    onClick?: (id: any) => void
    onHeadCheck?: (id: any) => void
    border?: boolean
    cellAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
    cellPadding?: 'checkbox' | 'none' | 'normal'
    indeterminate?: boolean
    check?: boolean
}

export default function DTableRow(props: DTableRowProps) {
    const cellSX = {
        borderRight: props.border ? 'solid 1px #ddd' : 'none',
        '&:last-child': {
            borderRight: 'none'
        }
    }
    const onRowClick = () => {
        props.onClick?.(props.rowData?.['id'])
    }
    const onHeadCheck = () => {
        props.onHeadCheck?.(props.rowData?.['id'])
    }

    return <TableRow
        selected={props.type === 'head' ? false : props.check}
        hover={props.hover}
        onClick={onRowClick}
        sx={{
            background: props.type === 'head' ? '#ccc' : 'none'
        }}
    >
        {
            <TableCell
                width={'38px'}
                padding={'checkbox'}
                align={'center'}
                key={'row-check'}
                sx={{...cellSX, pr: '4px'}}>
                <Checkbox
                    size={'small'}
                    checked={props.check}
                    indeterminate={props.indeterminate}
                    onClick={onHeadCheck}
                />
            </TableCell>
        }
        {
            props.children ?? props.columns?.map((column, cindex) => <TableCell
                padding={props.cellPadding}
                align={props.cellAlign}
                width={column.width}
                key={column.field + cindex}
                sx={cellSX}>
                {
                    props.type === 'head' ?
                        <Typography sx={{height: '29.5px', lineHeight: '29.5px'}}>
                            {column.fieldName}
                        </Typography>:
                        column.cusDefine?.filedName?.(props.rowData) ?? props.rowData?.[column.field]
                }
            </TableCell>)
        }
    </TableRow>
}

export type{
    Column,
    TableRowData,
    DTableRowProps
}