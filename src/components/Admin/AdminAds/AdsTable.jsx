import React, { useState, useEffect } from "react";

const AdsTable = () => {
  const [ads, setAds] = useState([
    { id: 1, title: "Summer Campaign", status: "Active", targeting: "All users" },
    { id: 2, title: "Back to School", status: "Inactive", targeting: "Users aged 13-18" },
    { id: 3, title: "Holiday Promotion", status: "Active", targeting: "Users in the US" },
    { id: 4, title: "New Year's Resolution", status: "Inactive", targeting: "Users with type 2 diabetes" },
    { id: 5, title: "Spring Into Health", status: "Active", targeting: "Users with A1C > 7" },
  ]);

  // حالة التحرير: id الإعلان + بيانات مؤقتة للتعديل
  const [editingAd, setEditingAd] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editStatus, setEditStatus] = useState("Inactive");
  const [editTargeting, setEditTargeting] = useState("");

  const handleAdd = () => {
    const newAd = {
      id: Date.now(),
      title: "New Campaign",
      status: "Inactive", // هنا الحالة تبدأ Inactive
      targeting: "New targeting",
    };
    setAds((prev) => [...prev, newAd]);
  };

  const startEditing = (ad) => {
    setEditingAd(ad.id);
    setEditTitle(ad.title);
    setEditStatus(ad.status);
    setEditTargeting(ad.targeting);
  };

  const cancelEditing = () => {
    setEditingAd(null);
  };

  const saveEdit = () => {
    if (!window.confirm("Are you sure you want to save changes?")) return;

    setAds((prev) =>
      prev.map((ad) =>
        ad.id === editingAd
          ? { ...ad, title: editTitle, status: editStatus, targeting: editTargeting }
          : ad
      )
    );

    // هنا يمكن تضيف كود الإرسال للباك اند عبر fetch/axios
    // مثال:
    // fetch(`/api/ads/${editingAd}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: editTitle, status: editStatus, targeting: editTargeting }),
    // }).then(...)

    setEditingAd(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ad?")) {
      setAds((prev) => prev.filter((ad) => ad.id !== id));
    }
  };

  return (
    <div className="admin-ads-table-container">
      <div style={{ marginBottom: 16 }}>
        <button onClick={handleAdd} className="admin-ads-create-button">
          Create Ad
        </button>
      </div>
      <table className="admin-ads-table">
        <thead>
          <tr className="admin-ads-header-row">
            <th className="admin-ads-head">Title</th>
            <th className="admin-ads-head">Status</th>
            <th className="admin-ads-head">Targeting Criteria</th>
            <th className="admin-ads-head admin-ads-text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) =>
            editingAd === ad.id ? (
              <tr key={ad.id} className="admin-ads-row">
                <td className="admin-ads-cell">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={{ width: "90%" }}
                  />
                </td>
                <td className="admin-ads-cell">
                  <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td className="admin-ads-cell">
                  <input
                    type="text"
                    value={editTargeting}
                    onChange={(e) => setEditTargeting(e.target.value)}
                    style={{ width: "90%" }}
                  />
                </td>
                <td className="admin-ads-cell admin-ads-text-right">
                  <button onClick={saveEdit} className="admin-ads-action-link" style={{ marginRight: 8 }}>
                    Save
                  </button>
                  <button onClick={cancelEditing} className="admin-ads-action-link">
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={ad.id} className="admin-ads-row">
                <td className="admin-ads-cell admin-ads-font-medium">{ad.title}</td>
                <td className="admin-ads-cell">
                  <span
                    className={`admin-ads-badge ${
                      ad.status === "Active" ? "admin-ads-badge-active" : "admin-ads-badge-inactive"
                    }`}
                  >
                    {ad.status}
                  </span>
                </td>
                <td className="admin-ads-cell admin-ads-text-muted">{ad.targeting}</td>
                <td className="admin-ads-cell admin-ads-text-right">
                  <button onClick={() => startEditing(ad)} className="admin-ads-action-link" style={{ marginRight: 8 }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(ad.id)} className="admin-ads-action-link">
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
          {ads.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "1rem" }}>
                No ads available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdsTable;
