import React, {ReactNode} from "react";
import {Box} from "@mui/material";

interface SeparatorProps {
    children?: Array<ReactNode>,
    gutter?: number,
    position?: 'left' | 'center' | 'right',
    sx?: Object
}

export default function DSeparator(props: SeparatorProps) {
    return <Box sx={{
        display: 'flex',
        justifyContent: props.position,
        alignItems: 'center',
        ...props.sx
    }}>
        {
            props.children?.map((child, index) => {
                return <Box
                    key={index}
                    sx={{
                        marginLeft: `${props.gutter ?? 0 / 2}px`,
                        marginRight: `${props.gutter ?? 0 / 2}px`
                    }}>
                    {child}
                </Box>
            })
        }
    </Box>
}
