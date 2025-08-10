"use client"

import React, { useState, useEffect } from "react"
import {
  BarChart2,
} from "lucide-react"
import '../ReportsAnalyticsPage/ReportsAnalyticsPage.css'
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin"

// Tabs component كما في كودك السابق (مختصر هنا للاختصار)
const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)
  const tabsList = React.Children.toArray(children).find((child) => child.type === TabsList)
  const tabsContent = React.Children.toArray(children).filter((child) => child.type === TabsContent)
  return (
    <div className="Rep-admin-tabs-container">
      {tabsList && React.cloneElement(tabsList, { activeTab, setActiveTab })}
      {tabsContent.map((content) => React.cloneElement(content, { key: content.props.value, activeTab }))}
    </div>
  )
}
const TabsList = ({ activeTab, setActiveTab, children }) => (
  <div className="Rep-admin-tabs-list">
    {React.Children.map(children, (child) => React.cloneElement(child, { activeTab, setActiveTab }))}
  </div>
)
const TabsTrigger = ({ value, activeTab, setActiveTab, children }) => (
  <button
    className={`Rep-admin-tabs-trigger ${activeTab === value ? "Rep-admin-tabs-trigger-active" : ""}`}
    onClick={() => setActiveTab(value)}
    role="tab"
    aria-selected={activeTab === value}
    id={`tab-${value}`}
    aria-controls={`panel-${value}`}
  >
    {children}
  </button>
)
const TabsContent = ({ value, activeTab, children }) => (
  <div
    className={`Rep-admin-tabs-content ${activeTab === value ? "Rep-admin-tabs-content-active" : ""}`}
    role="tabpanel"
    id={`panel-${value}`}
    aria-labelledby={`tab-${value}`}
    hidden={activeTab !== value}
  >
    {children}
  </div>
)

const ReportsAnalyticsPage = () => {
  // بيانات Feature Usage (افتراضية)
  const [featureUsageData, setFeatureUsageData] = useState({
    totalUsagePercent: 80,
    period: "Last 30 Days",
    changePercent: 10,
    features: [
      { name: "Feature A", usage: 24 },
      { name: "Feature B", usage: 28 },
      { name: "Feature C", usage: 20 },
      { name: "Feature D", usage: 22 },
      { name: "Feature E", usage: 26 },
    ],
  })

  // بيانات الحوادث الحرجة (افتراضية)
  const [criticalIncidents, setCriticalIncidents] = useState([
    {
      patientId: "Patient 123",
      incidentType: "Emergency Button Pressed",
      timestamp: "2024-01-15 10:00 AM",
      details: "Patient reported severe symptoms",
      detailsLink: "#",
    },
    {
      patientId: "Patient 456",
      incidentType: "Emergency Button Pressed",
      timestamp: "2024-01-20 02:30 PM",
      details: "Patient reported hypoglycemia",
      detailsLink: "#",
    },
    {
      patientId: "Patient 789",
      incidentType: "Emergency Button Pressed",
      timestamp: "2024-02-05 08:45 AM",
      details: "Patient reported hyperglycemia",
      detailsLink: "#",
    },
    {
      patientId: "Patient 101",
      incidentType: "Emergency Button Pressed",
      timestamp: "2024-02-10 06:15 PM",
      details: "Patient reported dizziness",
      detailsLink: "#",
    },
    {
      patientId: "Patient 112",
      incidentType: "Emergency Button Pressed",
      timestamp: "2024-02-18 11:30 AM",
      details: "Patient reported chest pain",
      detailsLink: "#",
    },
  ])

  // بيانات Error Logs (افتراضية)
  const [errorLogs, setErrorLogs] = useState([
    {
      timestamp: "2024-03-01 12:00 AM",
      errorType: "Data Sync Error",
      details: "Failed to sync data with server",
    },
    {
      timestamp: "2024-03-05 03:00 PM",
      errorType: "Notification Error",
      details: "Failed to send medication reminder",
    },
    {
      timestamp: "2024-03-10 09:00 AM",
      errorType: "Data Upload Error",
      details: "Failed to upload blood glucose data",
    },
    {
      timestamp: "2024-03-15 06:00 PM",
      errorType: "Data Retrieval Error",
      details: "Failed to retrieve patient data",
    },
    {
      timestamp: "2024-03-20 11:00 AM",
      errorType: "System Error",
      details: "Unexpected system error occurred",
    },
  ])

  useEffect(() => {
    async function fetchData() {
      try {
        // يمكن إلغاء التعليق وتحميل البيانات الحقيقية من الباك أند هنا
      } catch (error) {
        console.error("Failed to fetch data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="Rep-admin-container">
      <SidebarAdmin/>
      <main className="Rep-admin-main-content">
        <h1 className="Rep-admin-main-title">Reports & Analytics</h1>

        {/* Performance Reports Section */}
        <section className="Rep-admin-section">
          <h2 className="Rep-admin-section-title">Performance Reports</h2>
          <Tabs defaultValue="feature-usage">
            <TabsList>
              <TabsTrigger value="feature-usage">Feature Usage</TabsTrigger>
              <TabsTrigger value="specialist-ratings">Specialist Ratings</TabsTrigger>
            </TabsList>
            <TabsContent value="feature-usage">
              <div className="Rep-admin-feature-usage-header">
                <span className="Rep-admin-feature-usage-label">Feature Usage</span>
                <span className="Rep-admin-feature-usage-percentage">{featureUsageData.totalUsagePercent}%</span>
              </div>
              <div className="Rep-admin-feature-usage-period">
                <span className="Rep-admin-feature-usage-days">{featureUsageData.period}</span>
                <span className="Rep-admin-feature-usage-change">+{featureUsageData.changePercent}%</span>
              </div>
              <div className="Rep-admin-bar-chart-container">
                {featureUsageData.features.map((feature) => (
                  <div key={feature.name} className="Rep-admin-bar-item">
                    <div className={`Rep-admin-bar Rep-admin-h-${feature.usage}`}></div>
                    <span className="Rep-admin-bar-label">{feature.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="specialist-ratings">
              <p className="Rep-admin-specialist-ratings-placeholder">Specialist Ratings content will go here.</p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Critical Incident Reports Section */}
        <section className="Rep-admin-section">
          <h2 className="Rep-admin-section-title">Critical Incident Reports</h2>
          <div className="Rep-admin-table-container">
            <table>
              <thead>
                <tr>
                  <th className="Rep-admin-table-header">Patient ID</th>
                  <th className="Rep-admin-table-header">Incident Type</th>
                  <th className="Rep-admin-table-header">Timestamp</th>
                  <th className="Rep-admin-table-header">Details</th>
                </tr>
              </thead>
              <tbody>
                {criticalIncidents.map((incident, idx) => (
                  <tr key={idx}>
                    <td className="Rep-admin-table-cell">{incident.patientId}</td>
                    <td className="Rep-admin-table-cell-muted">{incident.incidentType}</td>
                    <td className="Rep-admin-table-cell-muted">{incident.timestamp}</td>
                    <td className="Rep-admin-table-cell-muted">
                      <a href={incident.detailsLink} className="Rep-admin-table-link">
                        {incident.details}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Error Logs Section */}
        <section className="Rep-admin-section">
          <h2 className="Rep-admin-section-title">Error Logs</h2>
          <div className="Rep-admin-table-container">
            <table>
              <thead>
                <tr>
                  <th className="Rep-admin-table-header">Timestamp</th>
                  <th className="Rep-admin-table-header">Error Type</th>
                  <th className="Rep-admin-table-header">Details</th>
                </tr>
              </thead>
              <tbody>
                {errorLogs.map((log, idx) => (
                  <tr key={idx}>
                    <td className="Rep-admin-table-cell-muted">{log.timestamp}</td>
                    <td className="Rep-admin-table-cell-muted">{log.errorType}</td>
                    <td className="Rep-admin-table-cell-muted">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ReportsAnalyticsPage
