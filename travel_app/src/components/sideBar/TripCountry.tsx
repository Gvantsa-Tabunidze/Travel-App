'use client'

import { Box, Button, IconButton, Typography, Avatar, useTheme } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CountryName, CountryType, Flags } from '@/interfaces/CountryType';

interface TripCardProps {
  title: string;
  countries: CountryType[];
  date: string;
  onDelete: () => void;
  onEdit?
  : () => void;
}

export default function TripCard({ title, countries, date, onDelete, onEdit }: TripCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop:'20px',
        p: 2,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 4,
        transition: 'background-color 0.2s',
        '&:hover': { backgroundColor: theme.palette.action.hover },
      }}
    >
      {/* Header: Title + Delete button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="subtitle1" fontWeight={500} color="text.primary">
          {title}
        </Typography>
        <IconButton size="small" onClick={onDelete} sx={{ color: theme.palette.error.main }}>
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Subtext: countries count and date */}
      <Typography variant="body2" color="text.secondary" mb={1}>
        {countries.length} {countries.length === 1 ? 'country' : 'countries'} • {new Date(date).toLocaleDateString()}
      </Typography>

      {/* Flags */}
      <Box display="flex" gap={1} mb={2}>
        {countries.map((c) => (
          <Avatar
            key={c.name.common}
            src={c.flags?.svg}
            alt={`Flag of ${c.name.common}`}
            variant="rounded"
            sx={{
              width: 24,
              height: 16,
              border: `1px solid ${theme.palette.grey[300]}`,
            }}
          />
        ))}
      </Box>

      {/* Load Trip button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: 'none',
          fontSize: '0.875rem',
          backgroundColor: theme.palette.primary.main,
          '&:hover': { backgroundColor: theme.palette.primary.dark },
        }}
        onClick={onEdit}
      >
        Edit Trip
      </Button>
    </Box>
  );
}
