'use client'
import { Box, Checkbox, FormControl, FormControlLabel, MenuItem, Select, TextField } from "@mui/material";


interface FilterDivProps {
    searchValue:string,
    onSearchChange:(value:string)=>void
    region:string
    onRegionChange:(value:string)=> void,
    favorites:boolean,
    onShowFavorites:(checked:boolean)=>void,
}

const FilterDiv= ({searchValue,onSearchChange,region,onRegionChange, favorites,onShowFavorites}:FilterDivProps)=> {
  const regions = ['All', 'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']

 return(
     <Box sx={{ display: "flex", flexDirection:{xs:"column", sm:"row", md:"row"}, gap: 2,  alignItems: "center", flexWrap: "wrap", px:'200px', py:'24px'}}>
      <TextField id="outlined-basic" placeholder="Search country. . ." variant="outlined" sx={{width:'240px',  marginTop: 0, marginBottom: 0,}} 
      InputProps={{sx: { height: "40px"} }}
      value={searchValue} onChange={(e)=>onSearchChange(e.target.value)}/>
      <FormControl sx={{width:'240px'}} >
        <Select labelId="demo-simple-select-label" id="demo-simple-select" 
        value={region} sx={{height:'40px',  marginTop: 0, marginBottom: 0,}} onChange={(e)=>onRegionChange(e.target.value)}>
          {regions.map((region)=>(
            <MenuItem value ={region}>{region}</MenuItem>
          ))}
        </Select>
      </FormControl>
       <FormControlLabel label='Show favorites' control={
      <Checkbox checked={favorites} onChange={(e)=>onShowFavorites(e.target.checked)} />} />
    </Box>
  );
 
}

export default FilterDiv

