import {Box, IconButton, Typography} from "@mui/material";
import DSeparator from "../../components/DSeparator/DSeparator";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export default function OAuthCard() {

    return <Box>
        <Typography
            variant='h5'
            sx={{
                padding: '16px 20px 8px',
                color: 'white',
                textAlign: 'center',
                fontWeight: '800'
            }}>
            用户登陆
        </Typography>
        <DSeparator
            position={'center'}
            gutter={10}
            sx={{color: 'white', margin: '16px auto 30px', textAlign: 'center'}}>
            <IconButton size={'small'}>
                <FacebookIcon fontSize={'small'} sx={{color: 'white'}}/>
            </IconButton>
            <IconButton size={'small'}>
                <GitHubIcon fontSize={'small'} sx={{color: 'white'}}/>
            </IconButton>
            <IconButton size={'small'}>
                <GoogleIcon fontSize={'small'} sx={{color: 'white'}}/>
            </IconButton>
        </DSeparator>
    </Box>
}