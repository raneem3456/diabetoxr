"use client"

import { useState } from "react"
import "../ContentManagement/ContentManagement.css"
import { Search } from "lucide-react"
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin"

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState("Knowledge Library")
  const [searchQuery, setSearchQuery] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})
  const [modalType, setModalType] = useState("")
  const [currentDataSet, setCurrentDataSet] = useState("")

  const [knowledgeLibraryData, setKnowledgeLibraryData] = useState([
    { title: "Understanding Diabetes", category: "Diabetes Education", status: "Published", lastUpdated: "2023-08-15" },
    { title: "Healthy Eating for Diabetes", category: "Nutrition", status: "Draft", lastUpdated: "2023-09-20" },
    { title: "Exercise and Diabetes", category: "Fitness", status: "Published", lastUpdated: "2023-10-05" },
  ])

  const [interactiveContentData, setInteractiveContentData] = useState([
    { gameTitle: "Sugar Rush Challenge", description: "A fun game to test knowledge about sugar levels.", status: "Published", lastUpdated: "2023-11-15" },
    { gameTitle: "Healthy Habits Quiz", description: "A quiz to promote healthy lifestyle choices.", status: "Draft", lastUpdated: "2023-12-01" },
  ])

  const [specialistPlansData, setSpecialistPlansData] = useState([
    { planName: "Type 1 Diabetes Plan", specialist: "Dr. Emily Carter", status: "Published", lastUpdated: "2023-10-20" },
    { planName: "Type 2 Diabetes Plan", specialist: "Dr. Robert Davis", status: "Published", lastUpdated: "2023-11-05" },
  ])

  const handleEdit = (data, type, dataset) => {
    setModalType(type)
    setModalData(data || {})
    setCurrentDataSet(dataset)
    setShowModal(true)
  }

  const handleSave = () => {
    const updateData = (data, setData) => {
      if (modalType === "add") {
        setData([...data, modalData])
      } else if (modalType === "edit") {
        setData(data.map((item, idx) => idx === modalData.index ? modalData : item))
      }
    }

    if (currentDataSet === "knowledge") {
      updateData(knowledgeLibraryData, setKnowledgeLibraryData)
    } else if (currentDataSet === "interactive") {
      updateData(interactiveContentData, setInteractiveContentData)
    } else if (currentDataSet === "specialist") {
      updateData(specialistPlansData, setSpecialistPlansData)
    }

    setShowModal(false)
  }

  const filteredKnowledge = knowledgeLibraryData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="Admin-Content-dashboard-container">
        <SidebarAdmin/>
      <div className="Admin-Content-main-content">
        <h1 className="Admin-Content-page-title">Content Management</h1>

        <div className="Admin-Content-main-tabs">
          {["Knowledge Library", "Interactive Content", "Specialist Plans"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`Admin-Content-tab-button ${activeTab === tab ? "Admin-Content-tab-active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Knowledge Library */}
        {activeTab === "Knowledge Library" && (
          <div className="Admin-Content-tab-content">
            <div className="Admin-Content-search-container">
              <Search className="Admin-Content-search-icon" />
              <input
                type="text"
                placeholder="Search content"
                className="Admin-Content-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="Admin-Content-table-container">
              <table className="Admin-Content-data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredKnowledge.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>
                        <span className={`Admin-Content-status-badge ${item.status === "Published" ? "Admin-Content-status-published" : "Admin-Content-status-draft"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.lastUpdated}</td>
                      <td>
                        <button onClick={() => handleEdit({ ...item, index }, "edit", "knowledge")} className="Admin-Content-edit-button">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="Admin-Content-action-button-container">
              <button onClick={() => handleEdit({}, "add", "knowledge")} className="Admin-Content-primary-button">Add New Content</button>
            </div>
          </div>
        )}

        {/* Interactive Content */}
        {activeTab === "Interactive Content" && (
          <div className="Admin-Content-tab-content">
            <div className="Admin-Content-table-container">
              <table className="Admin-Content-data-table">
                <thead>
                  <tr>
                    <th>Game Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {interactiveContentData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.gameTitle}</td>
                      <td>{item.description}</td>
                      <td>
                        <span className={`Admin-Content-status-badge ${item.status === "Published" ? "Admin-Content-status-published" : "Admin-Content-status-draft"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.lastUpdated}</td>
                      <td>
                        <button onClick={() => handleEdit({ ...item, index }, "edit", "interactive")} className="Admin-Content-edit-button">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="Admin-Content-action-button-container">
              <button onClick={() => handleEdit({}, "add", "interactive")} className="Admin-Content-primary-button">Add New Content</button>
            </div>
          </div>
        )}

        {/* Specialist Plans */}
        {activeTab === "Specialist Plans" && (
          <div className="Admin-Content-tab-content">
            <div className="Admin-Content-table-container">
              <table className="Admin-Content-data-table">
                <thead>
                  <tr>
                    <th>Plan Name</th>
                    <th>Specialist</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {specialistPlansData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.planName}</td>
                      <td>{item.specialist}</td>
                      <td>
                        <span className={`Admin-Content-status-badge ${item.status === "Published" ? "Admin-Content-status-published" : "Admin-Content-status-draft"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.lastUpdated}</td>
                      <td>
                        <button onClick={() => handleEdit({ ...item, index }, "edit", "specialist")} className="Admin-Content-edit-button">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="Admin-Content-action-button-container">
              <button onClick={() => handleEdit({}, "add", "specialist")} className="Admin-Content-primary-button">Add New Plan</button>
            </div>
          </div>
        )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>{modalType === "add" ? "Add New" : "Edit"}</h3>
              {Object.keys(modalData).map((key, i) => {
                if (key === "index") return null
                return (
                  <input
                    key={i}
                    type="text"
                    placeholder={key}
                    value={modalData[key] || ""}
                    onChange={(e) => setModalData({ ...modalData, [key]: e.target.value })}
                  />
                )
              })}
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentManagement
