"use client"

import { useState } from "react"
import "../Event/Event.css"
import CalendarComp from "./CalendarComp"
import EventsTable from "./EventsTable"
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin"

const Event = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [events, setEvents] = useState([
    {
      name: "Diabetes Education Workshop",
      dateTime: new Date(2025, 8, 15, 10, 0),
      description: "A workshop for patients to learn about managing diabetes.",
    },
    {
      name: "Nutrition Counseling Session",
      dateTime: new Date(2025, 8, 22, 14, 0),
      description: "Individual counseling sessions with a registered dietitian.",
    },
    {
      name: "Support Group Meeting",
      dateTime: new Date(2025, 8, 5, 18, 0),
      description: "A support group meeting for patients and their families.",
    },
    // بيانات إضافية افتراضية
    {
      name: "Annual Checkup Reminder",
      dateTime: new Date(2024, 6, 15, 9, 30),
      description: "Reminder for annual diabetes checkup.",
    },
    {
      name: "Exercise Group Session",
      dateTime: new Date(2024, 6, 22, 16, 0),
      description: "Group exercise session at community center.",
    },
  ])

  const [formData, setFormData] = useState({ name: "", dateTime: "", description: "" })
  const [editingIndex, setEditingIndex] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const filteredEvents = events.filter(
    (event) =>
      event.dateTime.toDateString() === selectedDate.toDateString()
  )

  const handleAddEvent = () => {
    setFormData({ name: "", dateTime: "", description: "" })
    setEditingIndex(null)
    setShowForm(true)
  }

  const handleEditEvent = (index) => {
    const event = filteredEvents[index]
    setFormData({
      name: event.name,
      dateTime: event.dateTime.toISOString().slice(0, 16),
      description: event.description,
    })
    setEditingIndex(index)
    setShowForm(true)
  }

  const handleDeleteEvent = (index) => {
    const eventToDelete = filteredEvents[index]
    setEvents(events.filter(e => e !== eventToDelete))
  }

  const handleSaveEvent = () => {
    const newEvent = {
      name: formData.name,
      dateTime: new Date(formData.dateTime),
      description: formData.description,
    }

    if (!newEvent.name || !formData.dateTime) {
      alert("Please fill in Event Name and Date/Time")
      return
    }

    if (editingIndex !== null) {
      const updatedEvents = [...events]
      const originalIndex = events.indexOf(filteredEvents[editingIndex])
      updatedEvents[originalIndex] = newEvent
      setEvents(updatedEvents)
    } else {
      setEvents([...events, newEvent])
    }

    setShowForm(false)
  }

  return (
    <div className="event-page">
      <SidebarAdmin/>
      <div className="flex-Event">
      <h1 className="event-calendar-header">Events</h1>

      <CalendarComp
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <div className="events-section">
        <div className="events-header">
          <h2 className="section-title">Events on {selectedDate.toDateString()}</h2>
          <button className="add-event-btn" onClick={handleAddEvent}>
            Add Event
          </button>
        </div>

        <EventsTable
          events={filteredEvents}
          onEdit={handleEditEvent}
          onDelete={handleDeleteEvent}
        />
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editingIndex !== null ? "Edit Event" : "Add Event"}</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="datetime-local"
              value={formData.dateTime}
              onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <div className="modal-actions">
              <button onClick={handleSaveEvent}>Save</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Event
