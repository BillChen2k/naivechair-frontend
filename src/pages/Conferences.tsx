import React from 'react';
import {
  Button, LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {Link, Outlet} from 'react-router-dom';
import useAxios from '@/services/hooks/useAxios';
import endpoints from '@/config/endpoints';
import IConference, {parseConferences} from '@/types/conference.type';
import useAuth from '@/services/hooks/useAuth';
import ConferenceList from '@/components/conference/ConferenceList';

function Conferences() {
  const auth = useAuth();
  if (auth.accessControl(['author', 'referee'])) {
    return auth.forbidden403;
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h2">Conferences</Typography>
      <ConferenceList action={{
        text: 'Details',
        routerPath: '/conferences/:conferenceId',
      }} />
    </Stack>
  );
}

export default Conferences;
