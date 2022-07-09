import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ReactNode} from "react";

interface TableContainerProps{
    children?: ReactNode
    title?: string
    description?: string
}

export default function TableContainer(props: TableContainerProps){
    return <Box>
        <Typography variant={'h6'}>
            {props.title}
        </Typography>
        <Typography variant={'subtitle1'}>
            {props.description}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
            {
                props.children
            }
        </Box>
    </Box>
}