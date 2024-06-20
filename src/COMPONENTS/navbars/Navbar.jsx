import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Stack, Box, Button } from "@mui/joy";
import { Logo } from "../logos/Logo";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const lgScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const xlScreen = useMediaQuery(theme.breakpoints.down('xl'));

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const buttons = [
        {
            title: 'Főoldal',
            action: () => navigate('/')
        },
        {
            title: 'ABC',
            action: () => navigate('/abc')
        },
        {
            title: 'Szótár',
            action: () => navigate('/words')
        },
        {
            title: 'Gyakorló teszt',
            action: () => navigate('/training')
        }
    ]


    if (smScreen) {
        return (
        <Stack direction="row" spacing={1} sx={{
            padding:'10px', 
            alignItems:'center', 
            justifyContent:'space-around',
            boxShadow:'lg',
            width:'100vw'
            }}>
            <Logo height={'100px'}/>
            <Button variant="solid" sx={{}} onClick={toggleMenu}>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </Button>
            <Box sx={{
                width:'100%', 
                justifyContent:'space-evenly', 
                display:'grid', 
                gap:'10px',
                position:'absolute',
                zIndex:'50',
                padding:'20px',
                transition:'all 0.5s ease-in-out',
                top:'0%',
                left: '50%',
                transform:isOpen ? 'translate(-50%, 50%)' : 'translate(-200%, 50%)',
                background:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,212,255,0) 100%)'}}>
                {buttons.map((button, index) => (
                    <Button variant="solid" sx={{flex:1}} key={index} onClick={button.action}>{button.title}</Button>
                ))}
            </Box>
        </Stack>
    );
    } else {
        return (
            <Stack direction="row" spacing={1} sx={{padding:'10px', alignItems:'center', boxShadow:'lg'}}>
                <Logo height={'100px'}/>
                <Box sx={{width:'100%', justifyContent:'space-evenly', display:'flex', gap:'10px'}}>
                    {buttons.map((button, index) => (
                        <Button variant="solid" sx={{flex:1}} key={index} onClick={button.action}>{button.title}</Button>
                    ))}
                </Box>
            </Stack>
        );
    }

}


