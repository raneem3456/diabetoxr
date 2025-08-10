"use client"

import { useState } from "react"
import axios from "axios"
import '../RewardsTypes/RewardsTypes.css'
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin"
const RewardsTypes = () => {
  const [formData, setFormData] = useState({
    rewardName: "Badge",
    description: "",
    rules: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:8000/api/rewards", formData)
      console.log("Reward Type saved:", response.data)
      alert("Reward type saved successfully!")
      setFormData({
        rewardName: "Badge",
        description: "",
        rules: "",
      })
    } catch (error) {
      console.error("Error saving reward type:", error)
      alert("Failed to save reward type")
    }
  }

  return (
    <div className="rewards-main-content">
      <SidebarAdmin/>
      <div className="rewards-content-wrapper">
        <h1 className="rewards-page-title">Rewards Types</h1>
        <p className="rewards-page-subtitle">
          Define different types of rewards (badges, points, discounts) with descriptions and rules.
        </p>

        <div className="rewards-form-container">
          <form onSubmit={handleSubmit}>
            {/* Reward Type Name */}
            <div className="rewards-form-group">
              <label htmlFor="rewardName" className="rewards-form-label">
                Reward Type Name
              </label>
              <select
                id="rewardName"
                name="rewardName"
                value={formData.rewardName}
                onChange={handleInputChange}
                className="rewards-form-input"
              >
                <option value="Badge">Badge</option>
                <option value="Points">Points</option>
                <option value="Discount">Discount</option>
              </select>
            </div>

            {/* Description */}
            <div className="rewards-form-group">
              <label htmlFor="description" className="rewards-form-label">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter reward description"
                className="rewards-form-input"
              />
            </div>

            {/* Rules */}
            <div className="rewards-form-group">
              <label htmlFor="rules" className="rewards-form-label">
                Rules
              </label>
              <input
                type="text"
                id="rules"
                name="rules"
                value={formData.rules}
                onChange={handleInputChange}
                placeholder="Enter reward rules"
                className="rewards-form-input"
              />
            </div>

            {/* Save Button */}
            <div className="rewards-button-container">
              <button type="submit" className="rewards-save-button">
                Save Reward Type
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RewardsTypes
