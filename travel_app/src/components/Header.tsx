'use client'

import useSideBarStore from '@/Zustand/SideBarStore';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Button, SvgIcon } from '@mui/material'



const Header = () => {
  const {toggle} = useSideBarStore()

  return (
       <Box sx={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center', padding:'16px 200px 16px 200px', 
      boxSizing:'border-box', borderBottom: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 4px rgba(138, 132, 132, 0.05)'}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <SvgIcon fontSize='large' color='primary'><LocationOnOutlinedIcon></LocationOnOutlinedIcon></SvgIcon>
          <h3>Travel Planner</h3>
        </Box>
        <Button sx={{textTransform:'none', fontWeight:600, color:'primary', fontSize:'18px', padding:'4px 20px', borderRadius:'8px'}} 
        variant='contained'
        onClick={toggle}
        >
          Plan a trip
          </Button>
      </Box>
    
  )
}

export default Header


