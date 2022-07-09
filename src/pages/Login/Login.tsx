import {Box} from "@mui/material"
import bgImg from "assets/bg-sign-in-basic.jpeg"
import {DHeadCard} from "components/DCard"
import LoginForm from "./LoginForm"
import HeadCard from "./OAuthCard"

export default function Login() {

    const OAuthCard = <HeadCard/>

    return <Box sx={{
        height: '100vh',
        width: '100vw',
        background: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)) center center / cover no-repeat, url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <DHeadCard
            head={OAuthCard}
            width={'400px'}>
            <LoginForm/>
        </DHeadCard>
    </Box>
}
