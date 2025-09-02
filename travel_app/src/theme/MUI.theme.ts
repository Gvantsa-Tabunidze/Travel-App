'use client'

import { createTheme } from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
    },
    palette:{
        primary:{
            main: '#3d5afe',
            light: '#90caf9',
            dark: '#0d47a1',
            contrastText: '#FFFFFF'
        }
    }
})

export default theme