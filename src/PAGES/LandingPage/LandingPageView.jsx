import { Box, Grid, Typography } from "@mui/joy";
import { DisplayCard } from "../../COMPONENTS/cards/DisplayCard";


export function LandingPageView() {
    return (
        <Grid 
        container  
        sx={{
            backgroundImage:'url(images/bg-wide.png)', 
            backgroundSize:'cover', 
            backgroundRepeat:'no-repeat', 
            backgroundPosition:'center',
            height:'100%',
            flex:1,
            }}
        >
            <Grid xs={12} sx={{padding:'20px'}}>
                <DisplayCard 
                    jpTitle={'生徒さん、ようこそ！私たちと一緒にいて、簡単に日本語を学びましょう。'}
                    jpText={'(Seito-san, youkoso! Watashitachi to issho ni ite, kantan ni nihongo o manabimashou.)'}
                    huText={'Azaz: Üdvözöllek tanítvány, tarts velünk és tanulj japánul könnyedén!'}
                />
            </Grid>

            <Grid xs={12}>
                <Box sx={{textAlign:'center'}}>
                    <Typography level="h1">つくりて</Typography>
                </Box>
                <Box>
                    <Typography sx={{textAlign:'center'}}>Királyfalvi Krisztián</Typography>
                    <Typography sx={{textAlign:'center'}}> 06 70 36 77 966</Typography>
                    <Typography sx={{textAlign:'center'}}> fejlesztő</Typography>
                </Box>
            </Grid>

        </Grid>
    )
}   