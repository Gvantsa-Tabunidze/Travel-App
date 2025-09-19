'use client';

import useSideBarStore from "@/Zustand/SideBarStore";
import SideBarHeader from "./SideBarHeader";
import { useTheme } from "@mui/material/styles";
import CurrentTrip from "./CurrentTrip";
import SavedTrips from "./SavedTrips";
import { Box } from "@mui/material";




export default function Sidebar() {
  const{isOpen}=useSideBarStore()
  const theme = useTheme();


  if(!isOpen) return null

    return (
    <Box sx={{ backgroundColor: theme.palette.background.paper, 
      maxWidth:'25vw', width:'25vw',  height: '100vh', position: 'fixed', 
      right: 0, top: 0,  boxShadow: '0 0 10px rgba(0,0,0,0.2)',  display: 'flex',
        flexDirection: 'column'}}
    >
      <SideBarHeader />    
      <div style={{padding:'18px'}}>
        <CurrentTrip />
        <SavedTrips />
      </div>
    </Box>
  );
}
  

