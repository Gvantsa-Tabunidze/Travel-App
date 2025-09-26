'use client'

import { CountryType } from "@/interfaces/CountryType"
import ListItem from "./ListItem"
import useSideBarStore from "@/Zustand/SideBarStore"
import { Box, Button, TextField, Typography, useTheme } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useEffect, useState } from "react"

interface DroppedItemsListProps{
    droppedCountries: CountryType[],
    
}
export default function DroppedList({droppedCountries}:DroppedItemsListProps){
  const theme = useTheme();
  const removeItem = useSideBarStore((state) => state.removeItem)
  const clearAll = useSideBarStore((state) => state.clearItems)
  const saveTrip = useSideBarStore((state)=>state.saveTrip)
  const currentTripName = useSideBarStore((state)=>state.currentTripName)  

  const [isClicked, setIsClicked] = useState(false)
  const [TripValue, setTripValue] = useState(currentTripName)
  

const onCancel =()=>{
    setIsClicked(false)
    setTripValue('')
}

const onSave = ()=>{
    saveTrip(TripValue)
}

useEffect(() => {
  setTripValue(currentTripName); // prefill when editing
}, [currentTripName]);

    return(
        <Box  sx={{minHeight:'280px', width:'100%'}}>
            <Box display="flex" justifyContent='flex-end' mb={2}>    
                <Button color="error" size="small" onClick={clearAll}>
            {`Clear All ( ${droppedCountries.length} )`}
                </Button>
            </Box>
            <ul style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                {droppedCountries.map(({name,region,flags})=><ListItem key={name.common} name={name.common} region={region} flags={flags?.svg} onDelete={()=>removeItem(name.common)}/>) }
            </ul>
            <Button variant="contained" onClick={()=>setIsClicked(true)}
            sx={{ backgroundColor: theme.palette.primary.dark, width:'100%', marginTop:'40px'}}>
                <span style={{display:'flex', gap:'8px'}}><SaveOutlinedIcon/>Save Trip</span>
            </Button>
            {isClicked ? (
                <Box sx={{display:'flex', flexDirection:'column', gap:'12px'}}>
                  <TextField fullWidth sx={{marginTop:'20px'}} type="text" placeholder="Name your trip . . ." value={TripValue} onChange={(e)=>setTripValue(e.target.value)} />
                    <Box sx={{display:'flex', gap:'12px'}}>
                        <Button variant="contained" disabled={TripValue.trim().length===0} onClick={onSave}>Save</Button>
                        <Button variant="outlined" onClick={onCancel}>Cancel</Button>
                    </Box>
                </Box>
            ) : null}
        </Box>
    )
}

