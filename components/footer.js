import {
  Box,
  Typography,
  IconButton,
  Grid,
  Stack
} from '@mui/material';
import { SiFacebook, SiGuilded, SiInstagram } from 'react-icons/si'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', height: '15vh', p: 3 }}>
      <Grid container justifyContent='center'>
        <Stack direction='horizontal'>
          <IconButton href="https://www.facebook.com/groups/1422093051346115/" size="large" sx={{ '&:hover': { color: 'secondary.light' } }} color='secondary' >
            <SiFacebook />
          </IconButton>
          <IconButton href="https://www.instagram.com/morgantrojanwrestling/" size="large" sx={{ '&:hover': { color: 'secondary.light' } }} color='secondary' >
            <SiInstagram />
          </IconButton>
          <IconButton href="/team-communication" size="large" sx={{ '&:hover': { color: 'secondary.light' } }} color='secondary' >
            <SiGuilded />
          </IconButton>
        </Stack>
      </Grid>
    </Box>
  )
}

export default Footer;