import { AnimatedLogo, Button, DarkButton, GriadiantButton, SubmitButton } from "../components/common"
import logo from '../assets/react.svg'
import { ThemeProvider, createGlobalStyle } from "styled-components"
const MainLayout = () => {
    const theme = {
        dark: {
            color: '#fff',
            backgroundColor: '#000'
        },
        light: {
            color: '#000',
            backgroundColor: '#fff'
        }
    }
    const GlobalStyle = createGlobalStyle`
        img{
            object-fit: cover;
        }
        button{
           letter-spacing: 3px;
        }
    `
    return (
        <main>
            <ThemeProvider theme={theme}>
                <button>Welcome</button>
                <GlobalStyle />
                <AnimatedLogo src={logo} alt="logo" />
                <Button as='a' href="#google">Hello Styled Button</Button>
                <Button $variant='outline'>Hello Styled Button</Button>
                <GriadiantButton>Welcome</GriadiantButton >
                <SubmitButton type='submit' $variant='outline'>Login</SubmitButton >
                <DarkButton>Dark Button</DarkButton>
            </ThemeProvider>
        </main>
    )
}

export default MainLayout
