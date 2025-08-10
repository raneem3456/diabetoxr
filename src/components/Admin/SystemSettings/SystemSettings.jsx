import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SystemSettings/SystemSettings.css";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";

const SystemSettings = () => {
  const [admins, setAdmins] = useState([]);
  const [showAdminsList, setShowAdminsList] = useState(false);
  const [lastSuspiciousLogin, setLastSuspiciousLogin] = useState(null);

  // الحالات الخاصة بالحقول
  const [appName, setAppName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  useEffect(() => {
    axios
      .get("/api/admins")
      .then((res) => {
        setAdmins(Array.isArray(res.data.admins) ? res.data.admins : []);
      })
      .catch(() => setAdmins([]));

    axios
      .get("/api/admins/last-suspicious-login")
      .then((res) => setLastSuspiciousLogin(res.data.lastAttempt))
      .catch(() => {});
  }, []);

  const handleSaveChanges = () => {
    // هنا مثال إرسال البيانات إلى الباك اند
    const payload = {
      appName,
      supportEmail,
      contactPhone,
    };

    // مثال: طباعة القيم بالكونسول
    console.log("Saving settings:", payload);

    // يمكنك استبدال هذا الطلب بطلب axios.post أو axios.put حسب API الخاص بك
    /*
    axios.post('/api/settings', payload)
      .then(res => {
        alert('Settings saved successfully!');
      })
      .catch(err => {
        alert('Failed to save settings.');
      });
    */
  };

  return (
    <div className="admin-sett-dashboard-container">
      <SidebarAdmin/>
      <div className="admin-sett-main-content">
        <div className="admin-sett-content-wrapper">
          {/* Header */}
          <div className="admin-sett-header">
            <h1 className="admin-sett-page-title">System Settings</h1>
          </div>

          {/* General Section */}
          <div className="admin-sett-settings-section">
            <h2 className="admin-sett-section-title">General</h2>
            <div className="admin-sett-form-fields">
              <div className="admin-sett-form-field">
                <label htmlFor="app-name" className="admin-sett-field-label">
                  App Name
                </label>
                <input
                  id="app-name"
                  type="text"
                  className="admin-sett-field-input"
                  placeholder="Enter app name"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                />
              </div>

              <div className="admin-sett-form-field">
                <label htmlFor="support-email" className="admin-sett-field-label">
                  Support Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  className="admin-sett-field-input"
                  placeholder="Enter support email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                />
              </div>

              <div className="admin-sett-form-field">
                <label htmlFor="contact-phone" className="admin-sett-field-label">
                  Contact Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  className="admin-sett-field-input"
                  placeholder="Enter contact phone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
            </div>
            <button className="admin-sett-save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>

          {/* System Section */}
          <div className="admin-sett-settings-section">
            <h2 className="admin-sett-section-title">System</h2>
            <div className="admin-sett-expandable-items">
              <div className="admin-sett-expandable-item">
                <div className="admin-sett-item-content">
                  <div className="admin-sett-item-main">Policies</div>
                  <div className="admin-sett-item-sub">Last updated 2 months ago</div>
                </div>
                <span className="admin-sett-chevron">›</span>
              </div>
            </div>
          </div>

          {/* Admin Section */}
          <div className="admin-sett-settings-section">
            <h2 className="admin-sett-section-title">Admin</h2>
            <div className="admin-sett-expandable-items">
              <div
                className="admin-sett-expandable-item admin-sett-with-border"
                onClick={() => setShowAdminsList((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                <div className="admin-sett-item-content">
                  <div className="admin-sett-item-main">Permissions</div>
                  <div className="admin-sett-item-sub">
                    {Array.isArray(admins) ? `${admins.length} admins` : "0 admins"}
                  </div>
                </div>
                <span className="admin-sett-chevron">›</span>
              </div>

              {showAdminsList && (
                <div
                  className="admin-sett-admins-list"
                  style={{ paddingLeft: "20px", marginTop: "10px" }}
                >
                  {admins.length === 0 && <p>No admins found.</p>}
                  <ul>
                    {admins.map((admin) => (
                      <li key={admin.id}>
                        {admin.name} - Last login:{" "}
                        {admin.lastLogin ? new Date(admin.lastLogin).toLocaleString() : "N/A"}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="admin-sett-expandable-item">
                <div className="admin-sett-item-content">
                  <div className="admin-sett-item-main">Suspicious login attempts</div>
                  <div className="admin-sett-item-sub">
                    {lastSuspiciousLogin
                      ? `Last attempt ${new Date(lastSuspiciousLogin).toLocaleString()}`
                      : "No suspicious attempts"}
                  </div>
                </div>
                <span className="admin-sett-chevron">›</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
