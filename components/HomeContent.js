import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import CalendarComponent from './CalendarComponent';
import AnnouncementCard from './AnnouncementCard'

const HomeContent = ({ Announcements }) => {
  return (
    <Box sx={{ backgroundColor: "transparent", m: 0, minHeight: '90vh' }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <Paper sx={{ backgroundColor: 'backgrounds.main', m: 0, p: 2 }} elevation={5}>
            <Typography sx={{ textAlign: 'center' }} variant="h3">Morgan High Wrestling</Typography>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper elevation={0} sx={{ p: 2, backgroundColor: 'backgrounds.main' }}>
            <Grid container justifyContent='space-between'>
              {
                Announcements.map(announcement => (
                  <AnnouncementCard key={announcement.id} announcement={announcement} />
                ))
              }
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeContent