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
}


const SingleCountry = ({country}:SingleCountryProps)=> {
const {name,population,region,capital,favorite,flags}= country



    return(
    <Card 
    sx={{ 
      maxWidth: 345,
      '&:hover': {
        boxShadow: 6,
        overflow:'visible',
        pointerEvents:'auto'
      }
    }}
     >
      <CardHeader
        action={
            <Box>
               <IconButton aria-label="favorites"
               onClick={(e)=>e.stopPropagation()}>
                    <FavoriteBorderOutlinedIcon />
               </IconButton>
               <IconButton aria-label="addtotrip"
               onClick={(e)=>e.stopPropagation()}>
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
}

export default SingleCountry