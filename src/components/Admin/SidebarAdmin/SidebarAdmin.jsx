import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users2,
  Folder,
  MessageCircle,
  Megaphone,
  ClipboardList,
  Gift,
  CalendarDays,
  BarChart3,
  Settings,
  UserCircle,
  Menu,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import '../SidebarAdmin/SidebarAdmin.css'

const SidebarAdmin = ({ adminId, onItemClick }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [adminData, setAdminData] = useState({
    name: '',
    role: '',
    imageUrl: '',
  });

  useEffect(() => {
    async function fetchAdminData() {
      try {
        const response = await fetch('/api/admin-profile');
        const data = await response.json();
        setAdminData({
          name: data.name,
          role: data.role,
          imageUrl: data.imageUrl,
        });
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    }
    fetchAdminData();
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const actualAdminId = adminId || "123";

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: `/dashboard/admin/${actualAdminId}/AdminDashboard` },
    { id: "patients", label: "Patients", icon: Users2, path: `/dashboard/admin/${actualAdminId}/UsersTablePage` },
    { id: "contentManagement", label: "Content Management", icon: Folder, path: `/dashboard/admin/${actualAdminId}/ContentManagement` },
    { id: "consultations", label: "Consultations", icon: MessageCircle, path: `/dashboard/admin/${actualAdminId}/Consultations` },
    { id: "ads", label: "Ads", icon: Megaphone, path: `/dashboard/admin/${actualAdminId}/AdminAds` },
    { id: "surveys", label: "Surveys", icon: ClipboardList, path: `/dashboard/admin/${actualAdminId}/Survey` },
    { id: "rewards", label: "Rewards", icon: Gift, path: `/dashboard/admin/${actualAdminId}/RewardsTypes` },
    { id: "events", label: "Events", icon: CalendarDays, path: `/dashboard/admin/${actualAdminId}/Event` },
    { id: "reports", label: "Reports & Analytics", icon: BarChart3, path: `/dashboard/admin/${actualAdminId}/ReportsAnalyticsPage` }, 
    { id: "settings", label: "Settings", icon: Settings, path: `/dashboard/admin/${actualAdminId}/SystemSettings` },
    { id: "support", label: "Support", icon: MessageCircle, path: `/dashboard/admin/${actualAdminId}/DiabCareAdmin` }, // Added Support item
    { id: "logout", label: "Logout", icon: LogOut, path: `/login` },
  ];

  return (
    <div className={`sidebar1 ${collapsed ? 'collapsed' : ''}`}>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <Menu />
      </button>

      {!collapsed && (
        <div className="user-profile-NU">
          <div className="avatar-NU">
            {adminData.imageUrl ? (
              <img src={adminData.imageUrl} alt="Admin Avatar" className="avatar-img" />
            ) : (
              <UserCircle className="avatar-icon" />
            )}
          </div>
          <div className="user-info-NU">
            <h3>{adminData.name || 'Loading...'}</h3>
            <p>{adminData.role || 'Admin'}</p>
          </div>
        </div>
      )}

      <nav className="nav-menu">
        {navItems.map(({ id, label, icon: Icon, path }) => (
          <Link
            key={id}
            to={path}
            className={`nav-item ${location.pathname.startsWith(path) ? "active" : ""}`}
            onClick={() => {
              if (onItemClick) onItemClick(id);
            }}
          >
            <Icon className="nav-icon" />
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SidebarAdmin;
