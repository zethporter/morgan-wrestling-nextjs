import react, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  Skeleton,
  Card,
  CardActionArea,
  Snackbar,
  Alert
} from "@mui/material";
import { FiFrown } from 'react-icons/fi'
import useSWR from 'swr';

import Trojan from './Trojan'

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeContent = () => {
  const { data, error } = useSWR('/api/calendar', fetcher);
  const [linkAlert, setLinkAlert] = useState(false);
  const today = new Date();
  const twoDaysAhead = new Date();
  twoDaysAhead.setDate(today.getDate() + 2)
  const openInNewTab = url => {
    url ? window.open(url, '_blank', 'noopener,noreferrer') : setLinkAlert(true)
  };

  const dateFormat = (date) => {
    if (date === undefined || date === null) {
      return ''
    } else {
      return new Intl.DateTimeFormat('en-US').format(new Date(date))
    }
  }

  if (!data) return (
    <Box sx={{ backgroundColor: "transparent", m: 0, minHeight: "90vh" }}>
      <Grid item xs={12}>
        <Skeleton height={200} />
      </Grid>
      <Grid container justifyContent='space-between' sx={{ px: 5 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant='rounded' height={300} sx={{ m: 1 }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant='rounded' height={300} sx={{ m: 1 }} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant='rounded' height={300} sx={{ m: 1 }} />
        </Grid>
      </Grid>
    </Box>
  )
  if (error) return <p>No profile data</p>;

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
      <Snackbar
        onClick={() => openInNewTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={linkAlert}
        autoHideDuration={2500}
        onClose={() => setLinkAlert(false)}
      >
        <Alert severity="error">
          <Typography sx={{ textAlign: 'center' }} variant='body2'>There is no more information for this event...</Typography>
        </Alert>
      </Snackbar>

      <Grid item xs={12} md={10}>
        <Paper
          sx={{ backgroundColor: "background.default", p: 2 }}
          elevation={5}
        >
          <Grid container justifyContent='center' sx={{ textAlign: 'center' }}>
            <Grid item xs={12} md={3} justifyItems='center'>
              <Trojan sx={{ width: '70%', height: 'auto' }} />
            </Grid>
            <Grid alignSelf='center' item xs={12} md={9}>
              <Typography variant='h1' sx={{ color: 'primary.main', fontWeight: 600 }}>
                Morgan High Wrestling
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={10}>
        <Paper
          elevation={0}
          sx={{ p: 2, backgroundColor: "background.default" }}
        >
          <Grid container justifyContent='center'>
            <Grid item xs={12} md={10} lg={11} xl={9}>
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <Typography sx={{ color: 'primary.main', fontWeight: 500, textAlign: 'center' }} variant='h3'>Schedule</Typography>
                  <Divider sx={{ backgroundColor: 'primary.light', mb: 2 }} />
                </Grid>
                {
                  data.calendarItems.map((item, i) => {
                    let disabled = null;
                    new Date(item.startDate) > twoDaysAhead
                      ? disabled = {
                        background: 'default',
                        elevation: 5
                      }
                      : disabled = {
                        background: item.home ? 'oldHome' : 'oldAway',
                        elevation: 1
                      };

                    return (
                      <Grid key={i} item xs={12} md={6} lg={4} sx={{ px: 1 }}>
                        <Paper elevation={disabled.elevation} sx={{ mb: 1 }}>
                          <Card sx={{ backgroundColor: `background.${disabled.background}`, borderLeft: '5px solid', borderColor: item.home ? 'primary.light' : 'secondary.light' }}>
                            <CardActionArea sx={{ p: 2 }} onClick={() => openInNewTab(item.link)}>
                              <Typography sx={{ color: 'primary.main' }} noWrap variant='h6'>{item.name}</Typography>
                              <Divider sx={{ backgroundColor: item.home ? 'primary.light' : 'secondary.light', mb: 2 }} />
                              <Grid container justifyContent='space-between'>
                                <Typography noWrap variant='subtitle1'>{
                                  item.endDate === null ? dateFormat(item.startDate) : [dateFormat(item.startDate), dateFormat(item.endDate)].join(' - ')
                                }</Typography>
                                <Typography variant='subtitle2'>{item.type}</Typography>
                              </Grid>
                            </CardActionArea>
                          </Card>
                        </Paper>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomeContent;
