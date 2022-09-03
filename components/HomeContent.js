import react, { useState, useEffect } from "react";
import { Typography, Box, Paper, Grid, Divider, Skeleton, Stack, SvgIcon } from "@mui/material";
import useSWR from 'swr';
import CalendarComponent from "./CalendarComponent";
import AnnouncementCard from "./AnnouncementCard";

import Trojan from './Trojan'

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeContent = () => {
  const { data, error } = useSWR('/api/calendar', fetcher);

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
  console.log(data)

  return (
    <Box sx={{ backgroundColor: "transparent", m: 0, minHeight: "90vh" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Paper
            sx={{ backgroundColor: "backgrounds.main", m: 0, p: 2 }}
            elevation={5}
          >
            <Grid container justifyContent='center'>
              <Grid sx={{ textAlign: 'right', pr: 10 }} item xs={2}>
                <Trojan sx={{ fontSize: '8em' }} />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: 'primary.main' }} variant="h1">
                  Morgan High Wrestling
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper
            elevation={0}
            sx={{ p: 2, backgroundColor: "backgrounds.main" }}
          >
            <Grid container justifyContent="space-between">
              <Paper elevation={3} sx={{ background: 'white', p: 2 }}>
                {
                  data.calendarItems.map((item, i) => (
                    <Grid item xs={12} key={i}>
                      <Stack>
                        <Typography variant='h6'>{item.name}</Typography>
                        <Typography variant='subtitle1'>{
                          item.endDate === null ? dateFormat(item.startDate) : [dateFormat(item.startDate), dateFormat(item.endDate)].join(' - ')
                        }</Typography>
                        <Typography variant='subtitle2'>{item.type}</Typography>
                        <Divider sx={{ backgroundColor: 'secondary.light', mb: 2 }} />
                      </Stack>
                    </Grid>
                  ))
                }
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box >
  );
};

export default HomeContent;
