import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DFlexBox from "components/DFlexBox/DFlexBox";
import {useEffect, useState} from "react";
import {getCaptcha, login, LoginModel, validateCode} from "services/auth/services";
import {Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Stack} from "@mui/material";
import {Formik} from "formik";
import * as yup from 'yup';
import {ResponseType} from "services/axios.config";
import { AxiosPromise } from "axios";

interface FormikFormProps {
    username?: string
    password?: string
    captcha?: string
}

export default function LoginForm() {
    const [imgSrc, setImgSrc] = useState<string>('')
    const [showCaptchaWarning, setShowCaptchaWarning] = useState<boolean>(false)
    const [randomKey, setRandomKey] = useState<string>((Math.random() * 10**18).toFixed(0).toString())

    const FormControlStyle: Object = {
        marginTop: '16px'
    }
    const toGetCaptcha = () => {
        getCaptcha(randomKey).then((res: any) => {
            setImgSrc(res)
        })
    }
    const validateCaptcha = async (code: string) => {
        return await validateCode(code, randomKey).then((res: ResponseType) => {
            return res.data
        })
    }
    const userLogin = async (code: string, username: string, pasword: string): Promise<ResponseType> => {
        const loginModel: LoginModel = {
            username: username,
            password: pasword,
            code: code
        }
        return await login(loginModel, randomKey)
    }
    const handleCaptchaClose = () => {
        setShowCaptchaWarning(false)
        toGetCaptcha()
    }

    // 目前的react18.0版本，useEffect会执行两次，只有关闭严格模式才能恢复正常
    useEffect(() => {
        toGetCaptcha()
    }, [])

    return <Formik
        initialValues={{
            username: '',
            password: '',
            captcha: ''
        }}
        validationSchema={yup.object({
            username: yup.string().max(20, '用户名不等超过20字符').required('请输入用户名'),
            password: yup.string().min(4, '用户密码不得少于4字符').required('请输入密码'),
            captcha: yup.string().required('请输入验证码')
        })}
        onSubmit={async values => {
            userLogin(values.captcha, values.username, values.password).then(res => {
                if(res.isSuccess){

                } else {
                    
                }
            }).catch(error => {
                console.log(error);
            })
        }}
    >
        {
            formik => (
                <Stack sx={{margin: '0 30px', padding: '40px 0'}}>
                    <Dialog
                        open={showCaptchaWarning}
                        onClose={handleCaptchaClose}
                    >
                        <DialogTitle>
                            {
                                '警告'
                            }
                        </DialogTitle>
                        <DialogContent>
                            {
                                '验证码错误，请重新输入！'
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCaptchaClose}>关闭</Button>
                        </DialogActions>
                    </Dialog>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            label={'账号'}
                            size='small'
                            fullWidth
                            key={'username'}
                            {...formik.getFieldProps('username')}
                            error={Boolean(formik.errors.username) && formik.touched.username }
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                            label={'密码'}
                            type={'password'}
                            size='small'
                            fullWidth
                            key={'password'}
                            {...formik.getFieldProps('password')}
                            error={Boolean(formik.errors.password) && formik.touched.password}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={FormControlStyle}
                        />
                        <DFlexBox sx={FormControlStyle}>
                            <TextField
                                label={'验证码'}
                                size='small'
                                fullWidth
                                key={'validation'}
                                {...formik.getFieldProps('captcha')}
                                error={formik.touched.captcha && Boolean(formik.errors.captcha)}
                                helperText={formik.touched.captcha && formik.errors.captcha}
                            />
                            <img
                                onClick={toGetCaptcha}
                                src={imgSrc}
                                alt='img'
                                style={{width: '200px', height: '40px', marginLeft: '8px', cursor: 'pointer'}}
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
                            type={'submit'}
                            fullWidth
                            sx={{
                                background: `linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))`,
                                display: 'block'
                            }}>
                            登陆
                        </Button>
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
                    </form>
                </Stack>
            )
        }
    </Formik>

}