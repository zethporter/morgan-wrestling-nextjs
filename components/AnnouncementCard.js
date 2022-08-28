import {
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  Chip,
  Stack
} from '@mui/material'

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const AnnouncementCard = ({ announcement }) => {
  const imageUrl = announcement.cover ? announcement.cover.type === 'file' ? announcement.cover.file.url : announcement.cover.external.url : null
  return (
    announcement.name
      ? <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ m: 1, p: 0, minHeight: '30vh' }}>
          {
            announcement.cover === null || announcement.cover === undefined
              ? <></>
              : <CardMedia component='img' image={imageUrl} height='140' alt='not Loaded' />
          }
          <CardContent>
            <Typography gutterBottom variant='h6' >
              {announcement.icon ? announcement.icon.type === 'emoji' ? announcement.icon.emoji + ' ' : '' : ''}{announcement.name}
            </Typography>
            <Typography variant='body2'>{announcement.content}</Typography>
            <Grid sx={{ mt: 1 }} container justifyContent='space-between'>
              <Grid item xs={4}>
                {
                  announcement.link
                    ? <Button onClick={() => openInNewTab(announcement.link)} color='primary'>Info</Button>
                    : <></>
                }
              </Grid>
              <Grid item>
                {
                  announcement.importance
                    ? <Chip
                      label={announcement.importance}
                      sx={{
                        backgroundColor: 'chips.' + `${announcement.importanceColor}` + '.fill',
                        color: 'chips.' + `${announcement.importanceColor}` + '.text',
                        fontWeight: 600
                      }}
                    />
                    : <></>
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      : <></>
  )
}

export default AnnouncementCard