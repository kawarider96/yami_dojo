import { Box, Typography } from "@mui/joy"
import { basicTheme } from "../../SUPPORT/THEME/theme"

export function DisplayCard({jpTitle, jpText, huText}) {
    return (
        <Box sx={{
            boxShadow:'lg', 
            background: basicTheme.colorSchemes.light.palette.background['gradient-black'],
            borderRadius:'10px',
            padding:'20px'}}>
            <Typography level="h1">{jpTitle}</Typography>
            <Typography level="body-md">{jpText}</Typography>
            <Typography level="body-md">{huText}</Typography>
        </Box>
    )
}