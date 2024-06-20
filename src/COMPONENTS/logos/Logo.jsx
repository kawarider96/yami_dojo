import { Box } from "@mui/joy"

export function Logo({height}) {
    return (
        <Box>
            <img className="h-full" src="/logos/logo_1.png" height={height} alt="logo"/>
        </Box>
    )
}