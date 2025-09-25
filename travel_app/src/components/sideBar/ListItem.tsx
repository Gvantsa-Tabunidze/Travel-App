'use client'

import { Avatar, Box, Icon, IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


interface ListItemProps {
  name: string;
  region: string;
  flags?: string
  onDelete?: () => void;
}


export default function ListItem({name,region,flags,onDelete}:ListItemProps) {
    return(
        <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1.5}
      bgcolor="grey.50"
      borderRadius={1}
      sx={{
        transition: "all 0.2s",
      }}
    >
      {/* Left side: drag handle + flag + info */}
      <Box display="flex" alignItems="center" gap={1.5}>
        {/* Drag Handle */}
        <Box
          role="button"
          tabIndex={0}
          aria-roledescription="sortable"
          sx={{
            cursor: "grab",
            p: 0.5,
            borderRadius: 1,
            color: "grey.400",
            "&:hover": { color: "grey.600", bgcolor: "grey.200" },
            "&:active": { cursor: "grabbing" },
          }}
        >
          <DragIndicatorIcon size='small' />
        </Box>

        {/* Flag */}
        <Avatar
          src={flags}
          alt={`Flag of ${name}`}
          variant="rounded"
          sx={{
            width: 32,
            height: 24,
            border: "1px solid",
            borderColor: "grey.300",
            objectFit: "cover",
          }}
        />

        {/* Country Info */}
        <Box>
          <Typography variant="body1" fontWeight={500} color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {region}
          </Typography>
        </Box>
      </Box>

      {/* Delete Button */}
      <IconButton
        onClick={onDelete}
        sx={{
          p: 0.5,
          color: "error.main",
          "&:hover": { color: "error.dark", bgcolor: "error.lighter" },
        }}
      > 
        <DeleteOutlinedIcon size='small'/>
       </IconButton>
    </Box>
    )
}


