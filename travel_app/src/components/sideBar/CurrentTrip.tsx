'use client'

import { Box, SvgIcon } from "@mui/material";
import {useTheme} from '@mui/material/styles'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function CurrentTrip() {
    const theme = useTheme()
  return (
    <Box sx={{height:'280px', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center',padding:'18px',  
    border:`2.5px dashed ${theme.palette.primary.main}`, borderRadius:'12px', backgroundColor:theme.palette.lightGreen}}>
        <div style={{width:'100%'}}>
        <h3>Current Trip</h3>
        </div>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100%', gap:'24px',}}>
            <SvgIcon sx={{fontSize:'4rem', color:theme.palette.primary.light}}><LocationOnOutlinedIcon></LocationOnOutlinedIcon></SvgIcon>
            <div style={{display:'flex', flexDirection:'column', gap:'4px', alignItems:'center'}}>
                <h4 style={{color:theme.palette.text.secondary}}>Drop countries here</h4>
                <p style={{color:theme.palette.text.secondary, fontSize:theme.typography.body2.fontSize}}>Drag countries from the list to add them to your trip</p>
            </div>
        </Box>
    </Box>
    
  );
}

