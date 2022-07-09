import Box from "@mui/material/Box";
import {SxProps, Theme} from "@mui/material/styles";

interface DAppBarProps {
    children?: JSX.Element | JSX.Element[] | string
    sx?: SxProps<Theme>
}

export default function DAppBar(props: DAppBarProps) {
    return <Box sx={[
        {
            display: 'flex',
            position: 'sticky',
            padding: '4px 16px',
            marginRight: '16px'
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
    ]}>
        {
            props.children
        }
    </Box>
}