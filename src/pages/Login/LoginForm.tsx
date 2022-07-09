import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DFlexBox from "components/DFlexBox/DFlexBox";
import {useEffect, useState} from "react";
import {getCaptcha} from "services/auth/services";
import {LoginModel} from "services/auth/services";
import {FormControl} from "@mui/material";
import {Formik, useFormik} from "formik";

interface FormikFormProps {
    username: string
    passwords: string
}

export default function LoginForm() {
    const [imgSrc, setImgSrc] = useState<string>('')
    const [loginModel, setLoginModel] = useState<LoginModel>()
    const FormControlStyle: Object = {
        marginTop: '16px'
    }
    const toGetCaptcha = () => {
        getCaptcha().then((res) => {
            setImgSrc('data:image/png;base64,' +
                btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')))
        })
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            passwords: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    useEffect(() => {
        toGetCaptcha()
    }, [])

    return <Formik
        initialValues={{
            username: '',
            passwords: ''
        }}
        onSubmit={(values) => {
            console.log(values)
        }}>
        <FormGroup sx={{margin: '0 30px', padding: '40px 0'}}>
            <TextField
                label={'账号'}
                size='small'
                fullWidth
                key={'account'}
            />
            <TextField
                label={'密码'}
                type={'password'}
                size='small'
                fullWidth
                key={'password'}
                sx={FormControlStyle}
            />
            <DFlexBox sx={FormControlStyle}>
                <TextField
                    label={'验证码'}
                    size='small'
                    fullWidth
                    key={'validation'}
                />
                <img
                    onClick={toGetCaptcha}
                    src={imgSrc}
                    alt='img'
                    style={{width: '200px', height: '40px', marginLeft: '8px'}}
                />
            </DFlexBox>
            <FormControl
                sx={{margin: '8px 0'}}
            >
                <FormControlLabel
                    sx={{color: '#888'}}
                    key={'remember_me'}
                    label={'记住我'}
                    control={
                        <Switch/>
                    }/>
            </FormControl>
            <Button
                variant='contained'
                size='large'
                sx={{
                    background: `linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))`
                }}>登陆</Button>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '16px 0 0',
                        color: '#888'
                    }}>
                    <Typography>
                        还未注册？
                    </Typography>
                    <Button variant='text'>注册</Button>
                </Box>
            </Container>
        </FormGroup>
    </Formik>

}