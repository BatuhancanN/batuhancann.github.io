import { useState } from "react";
import useSiteStore from "../../store/useSiteStore";

export default function AdminAbout() {
  const about = useSiteStore((s) => s.data.about);
  const updateAboutParagraph = useSiteStore((s) => s.updateAboutParagraph);
  const addAboutParagraph = useSiteStore((s) => s.addAboutParagraph);
  const removeAboutParagraph = useSiteStore((s) => s.removeAboutParagraph);
  const updateStat = useSiteStore((s) => s.updateStat);

  const [newParagraph, setNewParagraph] = useState("");

  const handleAddParagraph = () => {
    if (!newParagraph.trim()) return;
    addAboutParagraph(newParagraph.trim());
    setNewParagraph("");
  };

  return (
    <div>
      <h2 className="admin-section-title">Hakkimda Bolumu</h2>

      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Paragraflar</span>
        </div>

        {about.paragraphs.map((p, i) => (
          <div className="admin-form-group" key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label>Paragraf {i + 1}</label>
              <button
                className="admin-btn admin-btn-danger"
                onClick={() => removeAboutParagraph(i)}
                style={{ marginBottom: "0.6rem" }}
              >
                <i className="bx bx-trash" />
              </button>
            </div>
            <textarea
              className="admin-textarea"
              value={p}
              onChange={(e) => updateAboutParagraph(i, e.target.value)}
            />
          </div>
        ))}

        <div className="admin-form-group">
          <label>Yeni Paragraf</label>
          <textarea
            className="admin-textarea"
            value={newParagraph}
            onChange={(e) => setNewParagraph(e.target.value)}
            placeholder="Yeni paragraf metni..."
          />
        </div>
        <button className="admin-btn admin-btn-success" onClick={handleAddParagraph}>
          <i className="bx bx-plus" /> Paragraf Ekle
        </button>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Istatistik Kartlari</span>
        </div>

        {about.stats.map((stat) => (
          <div className="admin-card" key={stat.id} style={{ background: "var(--bg-primary)" }}>
            <div className="admin-inline-group">
              <div className="admin-form-group">
                <label>Baslik</label>
                <input
                  className="admin-input"
                  value={stat.title}
                  onChange={(e) => updateStat(stat.id, "title", e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label>Alt Baslik</label>
                <input
                  className="admin-input"
                  value={stat.subtitle}
                  onChange={(e) => updateStat(stat.id, "subtitle", e.target.value)}
                />
              </div>
            </div>
            <div className="admin-form-group">
              <label>Icon (Boxicons)</label>
              <input
                className="admin-input"
                value={stat.icon}
                onChange={(e) => updateStat(stat.id, "icon", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
