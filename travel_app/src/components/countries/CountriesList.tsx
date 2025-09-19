import { CountryType } from "@/interfaces/CountryType"
import SingleCountry from "./SingleCountryCard"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"
import useSideBarStore from "@/Zustand/SideBarStore"



interface CountriesListProps{
    countries: CountryType[],
    sideBarOpen:boolean
}
const CountriesList = ({countries,sideBarOpen}:CountriesListProps)=> {
    const isSidebarOpen = useSideBarStore((state) => state.isOpen)

    return(
        <Box
            sx={{
                transition: 'margin-right 0.3s ease',
                marginRight: isSidebarOpen ? '25%' : '0'
            }}
            >
                <Grid container spacing={4}>
                    {countries.map((country)=>
                    <Box key={country.name.common} sx={{display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <SingleCountry  country={country} />
                    </Box>
                    )}
                </Grid>
        </Box>
    )
}
 
export default CountriesList