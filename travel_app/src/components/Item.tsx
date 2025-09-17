'use client'

import { ListItem, ListItemIcon } from "@mui/material"

export interface ItemProps{
    icon:React.ReactNode,
    children:string | number | string[] 
}

const Item:React.FC<ItemProps> = ({icon, children})=> {
 return(
    <ListItem alignItems='flex-start'>
        <ListItemIcon>
            {icon}
        </ListItemIcon>
        {children}
    </ListItem>
 )
}

export default Item