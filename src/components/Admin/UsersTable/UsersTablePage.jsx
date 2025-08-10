"use client"

import React, { useState, useEffect } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import '../UsersTable/UsersTablePage.css'
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin"

function SearchInput({ placeholder = "Search", defaultValue = "", onChange }) {
  const [val, setVal] = React.useState(defaultValue)
  return (
    <div className="Admin-Das-search-input-container">
      <Search className="Admin-Das-search-input-icon" aria-hidden="true" />
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value)
          onChange?.(e.target.value)
        }}
        placeholder={placeholder}
        aria-label={placeholder}
        className="Admin-Das-search-input-field"
      />
    </div>
  )
}

function UsersTable({ rows }) {
  return (
    <div className="Admin-Das-users-table-wrapper">
      <table className="Admin-Das-users-table">
        <thead>
          <tr className="Admin-Das-users-table-header-row">
            <th className="Admin-Das-users-table-head">Name</th>
            <th className="Admin-Das-users-table-head">Email</th>
            <th className="Admin-Das-users-table-head">Role</th>
            <th className="Admin-Das-users-table-head">Registration Date</th>
            <th className="Admin-Das-users-table-head">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr
              key={r.email}
              className={`Admin-Das-users-table-row ${
                idx !== rows.length - 1 ? "Admin-Das-has-border-bottom" : ""
              }`}
            >
              <td className="Admin-Das-users-table-cell">{r.name}</td>
              <td className="Admin-Das-users-table-cell Admin-Das-users-table-cell-muted">{r.email}</td>
              <td className="Admin-Das-users-table-cell">
                <span className="Admin-Das-table-chip">{r.role}</span>
              </td>
              <td className="Admin-Das-users-table-cell">{r.date}</td>
              <td className="Admin-Das-users-table-cell">
                <span className="Admin-Das-table-chip">{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PageDot({ children, active = false, onClick }) {
  return (
    <button
      className={`Admin-Das-page-dot ${active ? "Admin-Das-active" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default function UsersTablePage() {
  const [patients, setPatients] = useState([
    { name: "Ethan Carter", email: "ethan.carter@email.com", role: "Patient", date: "2023-01-15", status: "Active" },
    { name: "Olivia Bennett", email: "olivia.bennett@email.com", role: "User", date: "2023-02-20", status: "Active" },
    { name: "Noah Thompson", email: "noah.thompson@email.com", role: "Patient", date: "2023-03-10", status: "Active" },
    { name: "Ava Rodriguez", email: "ava.rodriguez@email.com", role: "Patient", date: "2023-04-05", status: "Active" },
    { name: "Liam Walker", email: "liam.walker@email.com", role: "Patient", date: "2023-05-12", status: "Active" },
    { name: "Isabella Hayes", email: "isabella.hayes@email.com", role: "Patient", date: "2023-06-18", status: "Active" },
    { name: "Jackson Reed", email: "jackson.reed@email.com", role: "Patient", date: "2023-07-22", status: "Active" },
    { name: "Sophia Morgan", email: "sophia.morgan@email.com", role: "Patient", date: "2023-08-01", status: "Active" },
    { name: "Aiden Cooper", email: "aiden.cooper@email.com", role: "Patient", date: "2023-09-08", status: "Active" },
    { name: "Mia Foster", email: "mia.foster@email.com", role: "Patient", date: "2023-10-15", status: "Active" },
  ])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const itemsPerPage = 5

  useEffect(() => {
    setLoading(false)
  }, [])

  // فلترة حسب قيمة البحث (case insensitive)
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const currentPatients = filteredPatients.slice(startIdx, startIdx + itemsPerPage)

  function goToPage(page) {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  // إذا تغيرت قيمة البحث يرجع للصفحة الأولى تلقائياً
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  return (
    <div className="Admin-Das-app-container">
      <SidebarAdmin/>
      <main className="Admin-Das-main-content-wrapper">
        <section className="Admin-Das-content-section">
          <div
            className="Admin-Das-content-header"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <h1 className="Admin-Das-content-title">Users</h1>
          </div>

          <div className="Admin-Das-search-section" style={{ marginBottom: "16px" }}>
            <SearchInput
              placeholder="Search patients"
              onChange={(val) => {
                setSearchTerm(val)
              }}
            />
          </div>

          {loading && <p>Loading patients...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && (
            <div className="Admin-Das-card Admin-Das-users-table-card">
              <UsersTable rows={currentPatients} />
            </div>
          )}

          {!loading && !error && totalPages > 1 && (
            <div
              className="Admin-Das-pagination-container"
              style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <button
                className="Admin-Das-pagination-arrow-button"
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <PageDot key={i} active={currentPage === i + 1} onClick={() => goToPage(i + 1)}>
                  {i + 1}
                </PageDot>
              ))}

              <button
                className="Admin-Das-pagination-arrow-button"
                aria-label="Next page"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
