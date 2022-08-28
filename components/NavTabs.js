import React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
    height: '3px'
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: '80%',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledTab = styled((props) => <Tab
  disableRipple
  {...props}
/>)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);


const NavTabs = ({tab}) => {
  const [value, setValue] = React.useState(tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledTabs value={value} onChange={handleChange} centered>
      <StyledTab href="/" label='Home' />
      <StyledTab href="/calendar" label='Calendar' />
      <StyledTab label='Links' />
    </StyledTabs>
  )
}

export default NavTabs;