import {
  Box,
  Typography,
  IconButton,
  Grid,
  Stack
} from '@mui/material';
import { SiFacebook, SiGuilded, SiInstagram } from 'react-icons/si'
import { openInNewTab, openInSameTab } from './utils';

const Footer = () => {
  return (
    <div className="h-15 p-3 pb-10 text-3xl md:text-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-maroon-800">
      <div className="bg-transparent mx-auto p-2 flex flex-row justify-center space-x-3">
        <SiFacebook onClick={() => openInNewTab("https://www.facebook.com/groups/1422093051346115/")} className="fill-gold-600 hover:fill-gold-400 cursor-pointer" />
        <SiInstagram onClick={() => openInNewTab("https://www.instagram.com/morgantrojanwrestling/")} className="fill-gold-600 hover:fill-gold-400 cursor-pointer" />
        <a href="/team-communication"><SiGuilded className="fill-gold-600 hover:fill-gold-400 cursor-pointer" /></a>
      </div>
    </div>
  )
}

export default Footer;