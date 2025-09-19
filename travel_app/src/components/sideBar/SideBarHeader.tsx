'use client'

import useSideBarStore from '@/Zustand/SideBarStore';
import { useTheme } from '@mui/material/styles'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from '@mui/material';



function SideBarHeader(){
const {isOpen, toggle}=useSideBarStore()
const theme = useTheme();

   return (
    <div style={{ backgroundColor: theme.palette.primary.main, padding:'18px', color:theme.palette.primary.contrastText}}
    >
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3>Trip Planner</h3>
        <IconButton
        sx={{color:theme.palette.primary.contrastText}}
        onClick={toggle}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <p style={{fontSize:theme.typography.body2.fontSize}}>
        Drag countries here to add them to your trip
      </p>
    </div>
  );
   
};

export default SideBarHeader;