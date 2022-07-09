import {ListItemText} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, {ReactNode} from "react";
import {SxProps, Theme} from '@mui/material/styles'

interface DMenuItemProps {
    prefixIcon?: ReactNode
    postIcon?: ReactNode
    primary?: string
    handleClick?: (id: any) => void
    selected?: boolean
    id?: any,
    hoverColor?: string
    selectColor?: string
    backgroundColor?: string
    color?: string
    sx?: SxProps<Theme>
}

export default function DMenuItem(props: DMenuItemProps) {
    const handleClick = () => {
        props.handleClick?.(props.id ?? props.primary)
    }

    return <ListItem
        sx={[
            {
                padding: '2px 0px',
                backgroundColor: `${props.selected !== undefined ? props.selected ? props.selectColor : props.backgroundColor : props.backgroundColor}`, // selectColor > backgroundColor
                color: props.color,
                fontSize: '12px',
                '&:hover': {
                    backgroundColor: props.selected ? '' : props.hoverColor ?? props.backgroundColor // hoverColor > backgroundColor
                }
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ]}>
        <ListItemButton onClick={handleClick} selected={props.selected}>
            <ListItemIcon color={props.color}>
                {props.prefixIcon}
            </ListItemIcon>
            <ListItemText primary={props.primary}/>
            {props.postIcon}
        </ListItemButton>
    </ListItem>
}

export type{
    DMenuItemProps
}