import {Avatar, Badge, Breadcrumbs, IconButton, Link, TextField} from "@mui/material";
import {Menu, Settings, Notifications} from "@mui/icons-material";
import DAppBar from "components/DAppBar/DAppBar";
import DFlexBox from "components/DFlexBox/DFlexBox";
import DSeparator from "components/DSeparator/DSeparator";

interface HomeBarProps {

}

export default function HomeBar(props: HomeBarProps) {
    return <DAppBar sx={{
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backgroundClip: 'padding-box',
        borderRadius: '0.8rem',
        height: '50px'
    }}>
        <DFlexBox alignItems={'center'}>
            <DSeparator gutter={5}>
                <IconButton>
                    <Menu/>
                </IconButton>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                    >
                        Core
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </DSeparator>
        </DFlexBox>
        <DFlexBox alignItems={'center'}>
            <DSeparator gutter={5}>
                <TextField label={'搜索'} size={'small'}/>
                <Avatar sx={{width: 24, height: 24}}>H</Avatar>
                <Settings color={'secondary'}/>
                <Badge badgeContent={0} color={'primary'}>
                    <Notifications color={'secondary'}/>
                </Badge>
            </DSeparator>
        </DFlexBox>
    </DAppBar>
}