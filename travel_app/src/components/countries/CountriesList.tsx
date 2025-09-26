import { CountryType } from "@/interfaces/CountryType"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"
import useSideBarStore from "@/Zustand/SideBarStore"
import DraggableCountry from "../DndKit/DraggableCountry"
import useDivOpen from "@/Zustand/DivOpenStore"
import { useState } from "react"
import { wrap } from "module"




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

                <Box sx={{ display: 'flex', flexWrap:'wrap', gap:3, px: 3, py: 3, 
                justifyContent:'space-between', boxSizing: 'border-box',
                 paddingLeft: {
                    xs:'200px',                   
                    sm: '200px',
                    md:'200px', 
                    lg:'200px', 
                    xl:'200px'
                 },
                 paddingRight: {
                    xs:'200px',
                    sm:'200px',
                    md: isSidebarOpen ? '360px' : '200px', 
                    lg: isSidebarOpen ? '500px' : '200px', 
                    xl:isSidebarOpen ? '520px' : '200px', 
                 },

                }} >
                    {countries.map((country)=>
               
                        <Box key={country.name.common}  onClick={()=>openPopUp(country)}>
                            <DraggableCountry country={country}/>
                        </Box>
                    )}


                {divIsOpen ? 
                (<div style={{background:'violet', height:'200px', width:'200px', position:'fixed', top:'50%', left:'50%', 
                transform:'translate(-50%, -50%', zIndex:9999}}>{selectedCard?.capital}</div>) : null}
                </Box>
                
      
    )
}
 



export default CountriesList


