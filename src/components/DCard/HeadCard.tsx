import {Box} from "@mui/material";
import {ReactNode} from "react";

interface HeadCardProps {
    width?: string
    height?: string
    headHeight?: string
    head?: ReactNode
    children?: ReactNode
}

export default function HeadCard(props: HeadCardProps) {
    return (
        <Box sx={{
            display: 'inline-block',
            minWidth: '200px',
            width: props.width,
            minHeight: '200px',
            height: props.height,
            background: 'white',
            marginTop: '24px',
            borderRadius: '0.75rem',
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        }}>
            <Box sx={{
                background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                borderRadius: '0.5rem',
                minHeight: '50px',
                height: props.headHeight,
                width: '90%',
                margin: "-24px auto 0 auto",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: '0.5rem 0'
            }}>
                {props.head}
            </Box>
            <Box>
                {props.children}
            </Box>
        </Box>
    )
}