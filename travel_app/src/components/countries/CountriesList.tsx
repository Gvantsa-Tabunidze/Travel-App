import { CountryType } from "@/interfaces/CountryType"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"
import useSideBarStore from "@/Zustand/SideBarStore"
import DraggableCountry from "../DndKit/DraggableCountry"
import useDivOpen from "@/Zustand/DivOpenStore"
import { useState } from "react"




interface CountriesListProps{
    countries: CountryType[],
    sideBarOpen:boolean
}

const CountriesList = ({countries,sideBarOpen}:CountriesListProps)=> {
    const isSidebarOpen = useSideBarStore((state) => state.isOpen)
    const divIsOpen = useDivOpen((state) => state.divIsOpen); 
    const toggleDiv = useDivOpen((state) => state.toggle);     
    const [selectedCard, setSelectedCard] =  useState<CountryType | null >(null)

    const openPopUp=(country:CountryType)=>{
        toggleDiv()
        setSelectedCard(country)
    }

    return(
        <Box
            sx={{
                transition: 'margin-right 0.3s ease',
                marginRight: isSidebarOpen ? '25%' : '0',
                overflow:'visible',
            }}>
                <Grid container spacing={4}>
                    {countries.map((country)=>
                    <Box key={country.name.common} sx={{display: 'flex', flexDirection: 'column', height: '100%', overflow:'visible', pointerEvents:'auto' }} onClick={()=>openPopUp(country)}>
                      <DraggableCountry country={country}/>
                    </Box>
                    )}
                </Grid>
                {divIsOpen ? 
                (<div style={{background:'violet', height:'200px', width:'200px', position:'fixed', top:'50%', left:'50%', 
                transform:'translate(-50%, -50%', zIndex:9999}}>{selectedCard?.capital}</div>) : null}
        </Box>
    )
}
 



export default CountriesList