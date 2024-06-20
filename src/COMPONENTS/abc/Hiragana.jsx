import { useState, useEffect, useRef } from "react";
import { hiraganaAlphabet } from "../../SUPPORT/DATA/abc-data";
import { SpeechButton } from "../buttons/SpeechButton";
import { Box, Grid, Typography, Button } from "@mui/joy";
import { basicTheme } from "../../SUPPORT/THEME/theme";

export function Hiragana() {
  const audioRef = useRef(new Audio());

  const handlePlay = (romanji) => {
      const audio = audioRef.current;
      audio.src = `/hiragana_sounds/${romanji}.mp3`;
      audio.play();
  };


    return (
        <Grid container sx={{padding:'20px'}}>
            <Grid xs={12}>
                <Typography level="h1" sx={{textAlign:'center'}}>HIRAGANA</Typography>
            </Grid>
        
            <Grid xs={12} sm={12} md={8} sx={{padding:'20px'}}>
                    <Typography level="body-sm">
                        A hiragana a japán írásrendszer egyik alapvető eleme, amelyet főként japán
                        szavak és nyelvtani elemek írására használnak. A hiragana írásjegyek az
                        egyszerűbb és lekerekítettebb formájukról ismertek, és mindegyik egy-egy
                        szótagot jelöl. A hiragana ABC összesen 46 alapvető karakterből áll, amelyeket a
                        japán ábécé összes szótagjának leírására használnak.<br/><br/>
                        DAKUTEN<br/>
                        A dakuten, más néven "zöngésítő jel", egy kis két vonal, amelyet a hiragana karakter jobb
                        felső sarkába helyeznek. A dakuten zöngét ad a mássalhangzóknak<br/><br/>
                        HANDAKUTEN<br/>
                        A handakuten, más néven "pöttyös jel", egy kis kör, amely szintén a hiragana karakter jobb
                        felső sarkába kerül. A handakuten a h-sorozatú mássalhangzókat p-sorozatúvá alakítja.
                    </Typography>
            </Grid>

            <Grid xs={12} sm={12} md={4} sx={{alignContent:'center', marginTop:'10px', marginBottom:'20px'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                            <Box sx={{height:'50px', width:'50px', boxShadow:'lg', backgroundColor:'#f3ff00', borderRadius:'10px'}}></Box>
                            <Typography level="h3">DAKUTEN</Typography>
                        </Box>
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                            <Box sx={{height:'50px', width:'50px', boxShadow:'lg', backgroundColor:'#FC4100', borderRadius:'10px'}}></Box>
                            <Typography level="h3">HANDAKUTEN</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid container xs={12} sx={{display:'flex', gap:'10px', justifyContent:'center'}}>
                {hiraganaAlphabet.map((item, index) => (
                    <Grid xs={12} sm={3} md={3} lg={2}
                        onClick={() => handlePlay(item.romanji)}
                        key={index}
                        sx={{
                            display:'flex', 
                            gap:'20px', 
                            alignItems:'center', 
                            justifyContent:'center', 
                            position:'relative',
                            width:'100%',
                            padding:'20px',
                            borderRadius:'10px',
                            textAlign:'center',
                            transition:'all 0.3s',
                            cursor:'pointer',
                            '&:hover': {transform: 'scale(1.01)'},
                            background: basicTheme.colorSchemes.light.palette.background['gradient-lime'],
                            boxShadow: basicTheme.shadow.lg,
                        }}
                        className={` ${item.hiragana ? 'bg-dark-card-bg shadow-xl' : ''}`}
                    >
                        {item.hiragana && (
                            <Button
                             sx={{position:'absolute', top:'10px', left:'10px', background:basicTheme.colorSchemes.light.palette.background['gradient-black'], padding:'10px', shadow:basicTheme.shadow.lg}}>
                                <span class="material-symbols-outlined" style={{color:'white'}}>
                                    volume_up
                                </span>
                            </Button>
                        )}
                        <Box>
                            <Typography level="h2" sx={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>{item.hiragana}</Typography>
                            <Typography level="body-sm">{item.romanji}</Typography>
                        </Box>
                        {item.dakuten && (
                            <Box>
                                <Typography level="h2" sx={{color:'#f3ff00', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>{item.dakuten}</Typography>
                                <Typography level="body-sm">{item.dakuten_romanji}</Typography>
                            </Box>
                        )}
                        {item.handakuten && (
                            <Box>
                                <Typography level="h2" sx={{color:'#FC4100', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>{item.handakuten}</Typography>
                                <Typography level="body-sm">{item.handakuten_romanji}</Typography>
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
