"use client"

import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const CalendarComp = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="event-calendar-container">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="event-calendar"
      />
    </div>
  )
}

export default CalendarComp
