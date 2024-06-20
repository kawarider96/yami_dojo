import { Navbar } from "../navbars/Navbar";
import { Box } from "@mui/joy";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { basicTheme } from "../../SUPPORT/THEME/theme";

export function MainLayout({children}) {
    return (

        <Box sx={{
            background:'linear-gradient(to right, #000000, #434343)',
            height:'100dvh',
            width:'100vw',
            boxSizing:'border-box',
            margin:0,
            padding:0,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',}}>
            <Navbar/>
            {children}
        </Box>

    )
}