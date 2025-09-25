'use client'

import { Box, SvgIcon } from "@mui/material";
import {useTheme} from '@mui/material/styles'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useDroppable } from "@dnd-kit/core";
import useSideBarStore from "@/Zustand/SideBarStore";
import DroppedList from "./DroppedList";


export default function DroppableArea() {
    const theme = useTheme()
    const {setNodeRef,isOver} = useDroppable({ id:'sideBar'})
    const items = useSideBarStore((state)=>state.items)

  

  return (
  <>
  
    <Box ref={setNodeRef}
    sx={{minHeight:'280px', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center',padding:'18px',  
    border: isOver ? `2.5px dashed ${theme.palette.primary.main}`: `2.5px dashed ${theme.palette.primary.light}`, borderRadius:'12px', backgroundColor:theme.palette.lightGreen}}>
        <div style={{width:'100%'}}>
        <h3>Current Trip</h3>
        </div>
        {items.length === 0 ? (
        <Box sx={{minHeight:'200px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100%', gap:'24px',}}>
            <SvgIcon sx={{fontSize:'4rem', color: isOver ? theme.palette.primary.main : theme.palette.primary.light}}><LocationOnOutlinedIcon></LocationOnOutlinedIcon></SvgIcon>
            <div style={{display:'flex', flexDirection:'column', gap:'4px', alignItems:'center'}}>
                <h4 style={{color:theme.palette.text.secondary}}>Drop countries here</h4>
                <p style={{color:theme.palette.text.secondary, fontSize:theme.typography.body2.fontSize}}>Drag countries from the list to add them to your trip</p>
            </div>
        </Box>
         ) : <DroppedList droppedCountries={items} />  
      }
        
    </Box>

    
  </>
    
  );
}

