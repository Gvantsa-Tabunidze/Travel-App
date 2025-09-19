'use client'

import { createTheme } from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
        h1: {
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01562em',
        },
        h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.00833em',
        },
        h3: {
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.3,
        },
        subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        },
        subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.43,
        },

        body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        },
        body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        },

        button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        },

        caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
        },
        overline: {
        fontSize: '0.75rem',
        fontWeight: 500,
        lineHeight: 2.66,
        textTransform: 'uppercase',
        },
    },
    palette:{
        primary:{
            main: '#26a69a',
            light: '#80cbc4',
            dark: '#00695c',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#616161', 
            light: '#9e9e9e',
            dark: '#424242',
            contrastText: '#FFFFFF',
            },
        text: {
            primary: '#212121',
            secondary: '#616161',
            disabled: '#cfd8dc',
            },
        background: {
            default: '#fafafa',
            paper: '#fff'
            },
            lightGreen:'#e0f2f1'
    }
})

export default theme