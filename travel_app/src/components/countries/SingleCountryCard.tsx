'use client'

import { CountryType } from "@/interfaces/CountryType"
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, useTheme } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Item from "./Item";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import useFavoritesStore from "@/Zustand/FavoritesStore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import useSideBarStore from "@/Zustand/SideBarStore";




interface SingleCountryProps {
  country: CountryType,
}


const SingleCountry = ({country}:SingleCountryProps)=> {
const {name,population,region,capital,flags}= country
const toggleFavs = useFavoritesStore((state)=>state.toggleFavorites)
const favs = useFavoritesStore((state)=>state.favorites)
const isSidebarOpen = useSideBarStore((state) => state.isOpen)

const toggle =(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.stopPropagation()
  toggleFavs(country)
}

//Check if the card is favorite
const cardIsFav = favs.some((card)=> card.name.common === country.name.common)

    return(
    <Card 
    sx={{ 
      width: '320px',
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
             
               <IconButton aria-label="favorites" onClick={toggle}>
                 {cardIsFav ? <FavoriteIcon color="error"/> :  <FavoriteBorderOutlinedIcon />}
               </IconButton>
            </Box>
        }
      />
      <CardMedia
        component="img"
        height="160"
        image={flags?.png}
        alt={`${name} flag`}
      />
      <CardContent>  
        <Typography variant="h6" sx={{ color: 'text.primary' }} noWrap>
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



