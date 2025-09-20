'use client'

import { CountryType } from "@/interfaces/CountryType"
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Item from "./Item";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { forwardRef } from "react";


interface SingleCountryProps {
  country: CountryType,
  onClick:()=> void,
  style?: React.CSSProperties;
}

const SingleCountry = forwardRef<HTMLDivElement,SingleCountryProps>(({country, onClick, ...props}, ref)=> {
const {name,population,region,capital,favorite,flags}= country
    return(
    <Card 
    ref={ref}//attach ref for draggable
    onClick={onClick} //keep clickable
    sx={{ maxWidth: 345 }}
     {...props} // spread any extra props listeners, attributes
     >
      <CardHeader
        action={
            <Box>
               <IconButton aria-label="favorites">
                    <FavoriteBorderOutlinedIcon />
               </IconButton>
               <IconButton aria-label="addtotrip">
                    <AddOutlinedIcon />
               </IconButton>

            </Box>
        }
      />
      <CardMedia
        component="img"
        height="200"
        image={flags?.png}
        alt={`${name} flag`}
      />
      <CardContent>  
        <Typography variant="h3" sx={{ color: 'text.primary' }}>
         {name.official}
        </Typography>
         <Item icon={<LocationOnOutlinedIcon/>} children={region} />
         <Item icon={<CircleIcon/>} children={capital || []} />
         <Item icon={<PeopleAltOutlinedIcon/>} children={population} />
      </CardContent>
    </Card>
    )
})

export default SingleCountry