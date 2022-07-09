import Collapse from "@mui/material/Collapse";
import DMenuItem from "./DMenuItem";
import React, {ReactNode} from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from '@mui/icons-material/ExpandMore'
import {Box} from "@mui/material";
import {SxProps, Theme} from "@mui/material/styles";

interface DSubMenuProps {
    children?: ReactNode
    prefixIcon?: ReactNode
    primary?: string
    handleClick?: (id: any) => void
    selected?: boolean
    open?: boolean
    id?: any,
    hoverColor?: string
    selectColor?: string
    color?: string
    openColor?: string
    sx?: SxProps<Theme>
}

export default function DSubMenu(props: DSubMenuProps) {
    const handleClick = () => {
        props.handleClick?.(props.id ?? props.primary)
    }
    const postIcons = props.open ? <ExpandLess/> : <ExpandMore/>

    return <>
        <DMenuItem
            handleClick={handleClick}
            prefixIcon={props.prefixIcon}
            primary={props.primary}
            postIcon={postIcons}
            selected={props.selected}
            hoverColor={props.hoverColor}
            backgroundColor={props.open ? props.openColor : ''}
            selectColor={props.selectColor}
            color={props.color}
            sx={props.sx}
        />
        <Collapse in={props.open}>
            <Box sx={{pl: 2}}>
                {
                    props.children
                }
            </Box>
        </Collapse>
    </>
}