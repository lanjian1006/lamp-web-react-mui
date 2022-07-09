import {Table, TableBody, TableHead} from "@mui/material";
import DTableRow, {Column, TableRowData} from "./DTableRow";
import {useState} from "react";
import {_indexOf} from "../Utilities/ArrayAssistant";
import DTableToolBar from "./DTableToolBar";

interface DTableProps {
    columns: Column[]
    dataSource?: TableRowData[],
    cellAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right',
    cellPadding?: 'none' | 'normal',
    size?: 'small' | 'medium',
    hover?: boolean,
    stickyHeader?: boolean,
    maxRows?: number | undefined,
    border?: boolean
}

export default function DTable(props: DTableProps) {
    const [selectList, setSelectList] = useState<any[]>([])
    const [checkAll, setCheckAll] = useState<boolean>(false)
    const rowMap = new Map<string | number, number>(new Map())
    const rows = props.dataSource?.slice(0, props.maxRows ?? props.dataSource?.length)
    const rowIdList: any[] = []
    const rowsCount = rows?.length ?? 0

    const onRowClick = (id: any) => {
        const _index = _indexOf(selectList, id, 0)
        let newSelectList: any[] = []
        if (_index === -1) {
            selectList.splice(-1, -1, id)
        } else {
            selectList.splice(_index, 1)
        }
        newSelectList = newSelectList.concat(selectList)
        setCheckAll(newSelectList.length === rowsCount)
        setSelectList(newSelectList)
    }
    const onHeadCheck = (id: any) => {
        if (id === undefined) {
            let newCheckAll = !checkAll
            let newSelectList: any[] = []
            if (!newCheckAll) {
                setSelectList([])
            } else {
                newSelectList = newSelectList.concat(rowIdList)
                setSelectList(newSelectList)
            }
            setCheckAll(newCheckAll)
        }
    }

    return <Table size={props.size} stickyHeader={props.stickyHeader}>
        <TableHead>
            {
                selectList.length > 0 ? <DTableToolBar
                    type={'head'}
                    columnCount={props.columns.length}
                    cellPadding={props.cellPadding}
                    cellAlign={props.cellAlign}
                    onHeadCheck={onHeadCheck}
                    check={checkAll}
                    indeterminate={selectList.length < rowsCount && selectList.length > 0}
                /> : <DTableRow
                    type={'head'}
                    columns={props.columns}
                    border={props.border}
                    cellPadding={props.cellPadding}
                    cellAlign={props.cellAlign}
                    check={checkAll}
                    indeterminate={selectList.length < rowsCount && selectList.length > 0}
                    onHeadCheck={onHeadCheck}
                />
            }
        </TableHead>
        <TableBody>
            {
                rows?.map((row, rowIndex) => {
                    const rowId = row['id']
                    rowIdList.push(rowId)
                    rowMap.set(rowId, rowIndex)
                    return <DTableRow
                        key={rowIndex}
                        type={'body'}
                        columns={props.columns}
                        rowData={row}
                        hover={props.hover}
                        border={props.border}
                        cellPadding={props.cellPadding}
                        cellAlign={props.cellAlign}
                        rowIndex={rowIndex}
                        onClick={onRowClick}
                        check={checkAll || _indexOf(selectList, rowId, 0) !== -1}
                    />
                })
            }
        </TableBody>
    </Table>
}