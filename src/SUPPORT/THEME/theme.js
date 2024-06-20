import { extendTheme } from '@mui/joy/styles';

const details = {
  shadows: {
    xs: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    sm: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    md: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    lg: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    xl: 'rgba(0, 0, 0, 0.25) 0px 30px 60px, rgba(0, 0, 0, 0.22) 0px 18px 18px',
  },
}

export const basicTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "#0f0",
          500: '#0f0',
        },
        text: {
          primary: "#ffffff",
          secondary: "#0f0", // Például piros szín
        },
        background: {
            'gradient-black': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,212,255,0) 100%)',
            'gradient-lime': 'linear-gradient(to right, #11998e, #38ef7d)',
        },
      },
      typography: {
        'h1': {
          color: "#0f0",
          fontSize: "50px",
          fontWeight: 900,
        },
        'h2': {
          fontSize: "50px",
          fontWeight: 900,
        },
        'h3': {
          fontSize: "40px",
          fontWeight: 900,
        },
        'body-lg': {
          color: "#ffffff",
          fontSize: "40px",
          fontWeight: 400,
        },
      },
    },
  },
      components: {
        JoyButton: {
          styleOverrides: {
            root: {
              color: 'black',
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: details.shadows.xl,
            },
          },
        },
      },

  shadow: {
    xs: details.shadows.xs,
    sm: details.shadows.sm,
    md: details.shadows.md,
    lg: details.shadows.lg,
    xl: details.shadows.xl,
  },
  
});
