import react, { useState } from "react";
import Events from './Events'
import Announcements from './Announcements'
import Links from './Links'


const Dashboard = () => {

  return (
    <>
      <Events />
      <Announcements />
      <Links />
    </>
  )
}

export default Dashboard;
