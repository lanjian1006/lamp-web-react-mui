import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DFlexBox from "components/DFlexBox/DFlexBox";
import { useEffect, useState } from "react";
import { getCaptcha, login, LoginModel, validateCode } from "services/auth/services";
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Stack } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup';
import { ResponseType } from "services/axios.config";
import { setUser, store } from "stores/userStore";
import { useNavigate, redirect } from "react-router-dom";

interface FormikFormProps {
    username?: string
    password?: string
    captcha?: string
}

export default function LoginForm() {
    const [imgSrc, setImgSrc] = useState<string>('')
    const [showCaptchaWarning, setShowCaptchaWarning] = useState<boolean>(false)
    const [warningMsg, setWarningMsg] = useState<string>('')
    const [randomKey, setRandomKey] = useState<string>((Math.random() * 10 ** 18).toFixed(0).toString())
    const navigate = useNavigate()

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

    // ?????????react18.0?????????useEffect????????????????????????????????????????????????????????????
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
            username: yup.string().max(20, '?????????????????????20??????').required('??????????????????'),
            password: yup.string().min(4, '????????????????????????4??????').required('???????????????'),
            captcha: yup.string().required('??????????????????')
        })}
        onSubmit={async values => {
            userLogin(values.captcha, values.username, values.password).then(res => {
                if (res.isSuccess) {
                    store.dispatch(setUser(res.data))
                    navigate("/")
                } else {
                    setWarningMsg(res.msg ?? '')
                    setShowCaptchaWarning(true)
                }
            }).catch(error => {
                setWarningMsg(error.msg ?? '')
                setShowCaptchaWarning(true)
            })
        }}
    >
        {
            formik => (
                <Stack sx={{ margin: '0 30px', padding: '40px 0' }}>
                    <Dialog
                        open={showCaptchaWarning}
                        onClose={handleCaptchaClose}
                    >
                        <DialogTitle>
                            {
                                '??????'
                            }
                        </DialogTitle>
                        <DialogContent>
                            {
                                warningMsg
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCaptchaClose}>??????</Button>
                        </DialogActions>
                    </Dialog>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            label={'??????'}
                            size='small'
                            fullWidth
                            key={'username'}
                            {...formik.getFieldProps('username')}
                            error={Boolean(formik.errors.username) && formik.touched.username}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                            label={'??????'}
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
                                label={'?????????'}
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
                                style={{ width: '200px', height: '40px', marginLeft: '8px', cursor: 'pointer' }}
                            />
                        </DFlexBox>
                        <FormControl
                            sx={{ margin: '8px 0' }}
                        >
                            <FormControlLabel
                                sx={{ color: '#888' }}
                                key={'remember_me'}
                                label={'?????????'}
                                control={
                                    <Switch/>
                                } />
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
                            ??????
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
                                    ???????????????
                                </Typography>
                                <Button variant='text'>??????</Button>
                            </Box>
                        </Container>
                    </form>
                </Stack>
            )
        }
    </Formik>

}
