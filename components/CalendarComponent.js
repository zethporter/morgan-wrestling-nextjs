import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Paper } from '@mui/material';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          // events={this.state.events}
          style={{ height: "100vh" }}
        />
    </Paper>
  );
}

export default CalendarComponent;