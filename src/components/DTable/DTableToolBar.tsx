import {IconButton} from "@mui/material";
import DTableRow, {DTableRowProps} from "./DTableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from "@mui/material/TableCell";

interface DTableToolBarProps extends DTableRowProps {
    columnCount: number
}

export default function DTableToolBar(props: DTableToolBarProps) {
    return <DTableRow
        type={'head'}
        onHeadCheck={props.onHeadCheck}
        check={props.check}
        cellPadding={props.cellPadding}
        cellAlign={props.cellAlign}
        indeterminate={props.indeterminate}
    >
        <TableCell colSpan={props.columnCount} sx={{textAlign: 'right'}} padding={props.cellPadding}>
            <IconButton size={'small'}>
                <DeleteIcon fontSize={'small'}/>
            </IconButton>
        </TableCell>
    </DTableRow>
}