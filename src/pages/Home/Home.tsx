import {DMenu, MenuNode} from "components";
import {useState} from "react";
import Box from '@mui/material/Box';
import HomeBar from "./HomeBar";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import HtmlIcon from '@mui/icons-material/Html';
import StorageIcon from '@mui/icons-material/Storage';
import logo from 'assets/logo.png';
import DFlexBox from "../../components/DFlexBox/DFlexBox";
import {Stack, Typography} from "@mui/material";
import {Book} from "@mui/icons-material";
import {Outlet} from "react-router-dom";

export default function Home() {
    const [menuSrc, setMenuSrc] = useState<MenuNode[]>([
        {
            id: '1',
            name: '租户管理',
            icon: <AccountBalanceIcon htmlColor={'white'}/>,
            children: [
                {
                    id: '1-1',
                    name: '数据源维护',
                    icon: <StorageIcon htmlColor={'white'}/>
                }
            ]
        },
        {
            id: '2',
            name: '应用管理',
            icon: <AppsIcon htmlColor={'white'}/>
        },
        {
            id: '3',
            name: '系统管理',
            icon: <SettingsIcon htmlColor={'white'}/>,
            children: [
                {
                    id: '3-1',
                    name: '字典管理',
                    icon: <Book htmlColor={'white'}/>
                }
            ]
        },
        {
            id: '4',
            name: '开发者管理',
            icon: <DeveloperBoardIcon htmlColor={'white'}/>
        },
        {
            id: '5',
            name: '了解Lamp',
            icon: <WbIncandescentIcon htmlColor={'white'}/>
        },
        {
            id: '6',
            name: '静态示例',
            icon: <HtmlIcon htmlColor={'white'}/>
        },

    ])

    return <Box sx={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        minHeight: '100vh',
        backgroundColor: 'rgb(240, 242, 245)'
    }}>
        <Box sx={{
            gridColumn: '1',
            borderRadius: '1rem',
            margin: '16px 16px 16px',
            boxSizing: 'border-box',
            height: `cal(${'100%-16px-16px'})`,
            background: `linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))`,
            padding: '0 16px'
        }}>
            <DFlexBox alignItems={'center'} sx={{ mt: 3, mb: 3 }}>
                <img src={logo} style={{width: '36px', height: '36px'}}/>
                <Typography sx={{color: 'white', fontSize: '20px', marginLeft: '8px'}}>
                    开发运营系统
                </Typography>
            </DFlexBox>
            <DMenu
                focusMode
                dataSource={menuSrc}
                hoverColor={'rgba(255,255,255,0.2)'}
                selectColor={'rgba(26, 115, 232)'}
                color={'white'}
                sx={{
                    borderRadius: '6px',
                    marginBottom: '5px',
                    height: '46.75px'
                }}
            />
        </Box>
        <Stack sx={{
            gridColumn: '2',
            padding: '16px 0 16px'
        }}>
            <HomeBar/>
            <Box sx={{
                marginTop: 2,
                marginRight: 2,
                backgroundColor: 'white',
                borderRadius: '0.8rem',
                padding: '16px',
                flexGrow: '10'
            }}>
                <Outlet />
            </Box>
        </Stack>
    </Box>
}