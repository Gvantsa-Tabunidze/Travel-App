'use client';

import { Box, SvgIcon, useTheme } from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function SavedTrips() {
  const theme = useTheme()

  return (
    <Box sx={{height:'280px', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center',padding:'18px'}}>
        <div style={{width:'100%'}}>
        <h3>Saved Trips</h3>
        </div>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100%', gap:'24px',}}>
            <SvgIcon sx={{fontSize:'4rem', color:theme.palette.text.disabled}}><CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon></SvgIcon>
            <div style={{display:'flex', flexDirection:'column', gap:'4px', alignItems:'center'}}>
                <h4 style={{color:theme.palette.text.secondary}}>No saved trips here</h4>
                <p style={{color:theme.palette.text.secondary, fontSize:theme.typography.body2.fontSize}}>Create and save yout first trip</p>
            </div>
        </Box>
    </Box>
  );
}


