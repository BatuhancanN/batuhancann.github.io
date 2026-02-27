import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSiteStore from "../store/useSiteStore";
import useAuthStore from "../store/useAuthStore";
import AdminHero from "../components/admin/AdminHero";
import AdminAbout from "../components/admin/AdminAbout";
import AdminSkills from "../components/admin/AdminSkills";
import AdminProjects from "../components/admin/AdminProjects";
import "../styles/admin.css";

const TABS = [
  { id: "hero", label: "Hero", icon: "bx-home" },
  { id: "about", label: "Hakkimda", icon: "bx-user" },
  { id: "skills", label: "Yetenekler", icon: "bx-code-alt" },
  { id: "projects", label: "Projeler", icon: "bx-folder" },
];

const TAB_COMPONENTS = {
  hero: AdminHero,
  about: AdminAbout,
  skills: AdminSkills,
  projects: AdminProjects,
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const resetToDefaults = useSiteStore((s) => s.resetToDefaults);
  const logout = useAuthStore((s) => s.logout);

  const ActiveComponent = TAB_COMPONENTS[activeTab];

  const handleReset = () => {
    if (window.confirm("Tum veriler varsayilana sifirlanacak. Emin misiniz?")) {
      resetToDefaults();
      showToast("Veriler sifirlandi!");
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="admin-layout">
      <div className="admin-header">
        <h1>
          Admin <span>Panel</span>
        </h1>
        <div className="admin-header-actions">
          <button className="admin-btn admin-btn-danger" onClick={handleReset}>
            <i className="bx bx-reset" /> Sifirla
          </button>
          <button
            className="admin-btn admin-btn-outline"
            onClick={() => {
              logout();
              navigate("/admin/login", { replace: true });
            }}
          >
            <i className="bx bx-log-out" /> Cikis
          </button>
          <button className="admin-btn admin-btn-back" onClick={() => navigate("/")}>
            <i className="bx bx-arrow-back" /> Siteye Don
          </button>
        </div>
      </div>

      <div className="admin-body">
        <aside className="admin-sidebar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`admin-sidebar-item${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`bx ${tab.icon}`} />
              {tab.label}
            </button>
          ))}
        </aside>

        <main className="admin-content">
          <ActiveComponent />
        </main>
      </div>

      {toast && <div className="admin-toast">{toast}</div>}
    </div>
  );
}
