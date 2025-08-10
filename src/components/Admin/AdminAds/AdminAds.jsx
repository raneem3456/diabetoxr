import AdsTable from "./AdsTable";
import '../AdminAds/styles.css'
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
const AdminAds = () => {
  return (
    <div className="admin-ads-container">
        <SidebarAdmin/>
      <main className="admin-ads-main-content">
        <h1 className="admin-ads-title">Ads Management</h1>
        <AdsTable />
      </main>
    </div>
  );
};

export default AdminAds;
