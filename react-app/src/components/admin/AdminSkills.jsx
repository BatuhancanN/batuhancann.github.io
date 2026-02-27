import { useState } from "react";
import useSiteStore from "../../store/useSiteStore";

export default function AdminSkills() {
  const skills = useSiteStore((s) => s.data.skills);
  const updateSkillCategory = useSiteStore((s) => s.updateSkillCategory);
  const addSkillItem = useSiteStore((s) => s.addSkillItem);
  const removeSkillItem = useSiteStore((s) => s.removeSkillItem);
  const addSkillCategory = useSiteStore((s) => s.addSkillCategory);
  const removeSkillCategory = useSiteStore((s) => s.removeSkillCategory);

  const [newItems, setNewItems] = useState({});
  const [newCategory, setNewCategory] = useState({ id: "", title: "", icon: "bx-code-alt" });

  const handleAddItem = (catId) => {
    const item = newItems[catId];
    if (!item?.name) return;
    addSkillItem(catId, { name: item.name, icon: item.icon || "bx-code-alt" });
    setNewItems({ ...newItems, [catId]: { name: "", icon: "" } });
  };

  const handleAddCategory = () => {
    if (!newCategory.id || !newCategory.title) return;
    addSkillCategory({ ...newCategory, items: [] });
    setNewCategory({ id: "", title: "", icon: "bx-code-alt" });
  };

  return (
    <div>
      <h2 className="admin-section-title">Yetenekler Bolumu</h2>

      {skills.categories.map((cat) => (
        <div className="admin-card" key={cat.id}>
          <div className="admin-card-header">
            <span className="admin-card-title">
              <i className={`bx ${cat.icon}`} style={{ marginRight: "0.8rem", color: "var(--accent-light)" }} />
              {cat.title}
            </span>
            <button
              className="admin-btn admin-btn-danger"
              onClick={() => removeSkillCategory(cat.id)}
            >
              <i className="bx bx-trash" /> Kategoriyi Sil
            </button>
          </div>

          <div className="admin-inline-group">
            <div className="admin-form-group">
              <label>Kategori Adi</label>
              <input
                className="admin-input"
                value={cat.title}
                onChange={(e) => updateSkillCategory(cat.id, "title", e.target.value)}
              />
            </div>
            <div className="admin-form-group">
              <label>Icon</label>
              <input
                className="admin-input"
                value={cat.icon}
                onChange={(e) => updateSkillCategory(cat.id, "icon", e.target.value)}
              />
            </div>
          </div>

          <div className="admin-chip-list" style={{ marginBottom: "1.2rem" }}>
            {cat.items.map((item, i) => (
              <div className="admin-chip" key={i}>
                <i className={`bx ${item.icon}`} />
                {item.name}
                <button onClick={() => removeSkillItem(cat.id, i)}>
                  <i className="bx bx-x" />
                </button>
              </div>
            ))}
          </div>

          <div className="admin-inline-group">
            <div className="admin-form-group">
              <input
                className="admin-input"
                placeholder="Yetenek adi"
                value={newItems[cat.id]?.name || ""}
                onChange={(e) =>
                  setNewItems({ ...newItems, [cat.id]: { ...newItems[cat.id], name: e.target.value } })
                }
              />
            </div>
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <input
                className="admin-input"
                placeholder="Icon (bxl-react)"
                value={newItems[cat.id]?.icon || ""}
                onChange={(e) =>
                  setNewItems({ ...newItems, [cat.id]: { ...newItems[cat.id], icon: e.target.value } })
                }
                style={{ flex: 1 }}
              />
              <button className="admin-btn admin-btn-primary" onClick={() => handleAddItem(cat.id)}>
                <i className="bx bx-plus" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="admin-card" style={{ borderStyle: "dashed" }}>
        <div className="admin-card-header">
          <span className="admin-card-title">Yeni Kategori Ekle</span>
        </div>
        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>ID</label>
            <input
              className="admin-input"
              value={newCategory.id}
              onChange={(e) => setNewCategory({ ...newCategory, id: e.target.value })}
              placeholder="devops"
            />
          </div>
          <div className="admin-form-group">
            <label>Baslik</label>
            <input
              className="admin-input"
              value={newCategory.title}
              onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
              placeholder="DevOps"
            />
          </div>
        </div>
        <div className="admin-form-group">
          <label>Icon</label>
          <input
            className="admin-input"
            value={newCategory.icon}
            onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
          />
        </div>
        <button className="admin-btn admin-btn-success" onClick={handleAddCategory}>
          <i className="bx bx-plus" /> Kategori Ekle
        </button>
      </div>
    </div>
  );
}
