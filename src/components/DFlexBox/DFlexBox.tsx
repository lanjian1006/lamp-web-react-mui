import Box from "@mui/material/Box";
import {ReactNode} from "react";
import {SxProps, Theme} from "@mui/material/styles";

interface DFlexBoxProps {
    children?: ReactNode,
    justifyContent?: string
    alignItems?: string
    sx?: SxProps<Theme>
}

export default function DFlexBox(props: DFlexBoxProps) {
    return <Box sx={[
        {
            display: 'flex',
            justifyContent: props.justifyContent,
            alignItems: props.alignItems
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
    ]}>
        {
            props.children
        }
    </Box>
}