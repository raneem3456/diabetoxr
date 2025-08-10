"use client"


const EventsTable = ({ events, onEdit, onDelete }) => {
  return (
    <div className="event-table-container">
      <div className="event-table-card">
        <table className="event-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date/Time</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="event-table-row">
                <td className="event-table-name">{event.name}</td>
                <td className="event-table-datetime">{event.dateTime.toLocaleString()}</td>
                <td className="event-table-description">{event.description}</td>
                <td className="event-table-actions">
                  <button className="event-action-btn" onClick={() => onEdit(index)}>
                    Edit
                  </button>
                  <span className="event-action-separator">|</span>
                  <button className="event-action-btn delete" onClick={() => onDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EventsTable
