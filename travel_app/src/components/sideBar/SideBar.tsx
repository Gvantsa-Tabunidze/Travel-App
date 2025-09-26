'use client';

import useSideBarStore from "@/Zustand/SideBarStore";
import SideBarHeader from "./SideBarHeader";
import { useTheme } from "@mui/material/styles";
import SavedTrips from "./SavedTrips";
import { Box } from "@mui/material";
import DroppableArea from "./DroppableArea";
import TripCard from "./TripCountry";




export default function Sidebar() {
  const{isOpen}=useSideBarStore()
  const theme = useTheme();
  const savedTrips = useSideBarStore((state)=>state.savedTrips)
   const removeTrip = useSideBarStore((state) => state.removeTrip)
  const editTrip = useSideBarStore((state) => state.editTrip)


  if(!isOpen) return null

    return (
    <Box sx={{ backgroundColor: theme.palette.background.paper, 
      maxWidth:'28vw', width:'28vw',  height: '100vh', position: 'fixed', 
      right: 0, top: 0,  boxShadow: '0 0 10px rgba(0,0,0,0.2)',  display: 'flex', flexDirection: 'column'}}
    >
      <SideBarHeader />    
      <div style={{padding:'18px', flex:1, overflowY:'auto'}}>
        <DroppableArea />
        {savedTrips.length > 0 ? (
          savedTrips.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.name}
              countries={trip.countries}
              date={trip.date}
              onDelete={() =>removeTrip(trip.id)}
              onEdit={() => editTrip(trip.id)} />
          ))
        ) : (
            <SavedTrips />
        )}
        
      </div>
    </Box>
  );
}
  

