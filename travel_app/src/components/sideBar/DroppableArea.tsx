'use client'

import { Box, SvgIcon } from "@mui/material";
import {useTheme} from '@mui/material/styles'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useDroppable } from "@dnd-kit/core";


//Dropable component
interface UseDroppableArguments {
  id: string | number;
  disabled?: boolean;
  data?: Record<string, any>;
}

export default function DroppableArea() {
    const theme = useTheme()
    const {setNodeRef,isOver} = useDroppable({
      id:'sideBar'
    })


  return (
    <Box 
    ref={setNodeRef}
    
    sx={{height:'280px', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center',padding:'18px',  
    border: isOver ? `2.5px dashed ${theme.palette.primary.main}`: `2.5px dashed ${theme.palette.primary.light}`, borderRadius:'12px', backgroundColor:theme.palette.lightGreen}}>
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

