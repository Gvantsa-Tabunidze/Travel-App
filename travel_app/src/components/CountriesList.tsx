import { CountryType } from "@/interfaces/CountryType"
import SingleCountry from "./SingleCountryCard"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"



interface CountriesListProps{
    countries: CountryType[]
}
const CountriesList = ({countries}:CountriesListProps)=> {
   

    return(
        <Grid container spacing={4}>
            {countries.map((country)=>
             <Box sx={{display: 'flex', flexDirection: 'column', height: '100%' }}>
              <SingleCountry country={country} />
            </Box>
            )}
        </Grid>
    )
}

export default CountriesList