import { useState } from "react";
import useSiteStore from "../../store/useSiteStore";

export default function AdminHero() {
  const hero = useSiteStore((s) => s.data.hero);
  const updateHero = useSiteStore((s) => s.updateHero);
  const updateSocialLink = useSiteStore((s) => s.updateSocialLink);
  const addSocialLink = useSiteStore((s) => s.addSocialLink);
  const removeSocialLink = useSiteStore((s) => s.removeSocialLink);

  const [newTypedString, setNewTypedString] = useState("");
  const [newSocial, setNewSocial] = useState({ id: "", url: "", icon: "", label: "" });

  const handleAddTypedString = () => {
    if (!newTypedString.trim()) return;
    updateHero("typedStrings", [...hero.typedStrings, newTypedString.trim()]);
    setNewTypedString("");
  };

  const handleRemoveTypedString = (index) => {
    updateHero("typedStrings", hero.typedStrings.filter((_, i) => i !== index));
  };

  const handleAddSocial = () => {
    if (!newSocial.id || !newSocial.url) return;
    addSocialLink({ ...newSocial });
    setNewSocial({ id: "", url: "", icon: "", label: "" });
  };

  return (
    <div>
      <h2 className="admin-section-title">Hero Bolumu</h2>

      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Genel Bilgiler</span>
        </div>

        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>Badge</label>
            <input
              className="admin-input"
              value={hero.badge}
              onChange={(e) => updateHero("badge", e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label>Karsilama</label>
            <input
              className="admin-input"
              value={hero.greeting}
              onChange={(e) => updateHero("greeting", e.target.value)}
            />
          </div>
        </div>

        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>Ad</label>
            <input
              className="admin-input"
              value={hero.name}
              onChange={(e) => updateHero("name", e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label>Soyad</label>
            <input
              className="admin-input"
              value={hero.surname}
              onChange={(e) => updateHero("surname", e.target.value)}
            />
          </div>
        </div>

        <div className="admin-form-group">
          <label>Aciklama</label>
          <textarea
            className="admin-textarea"
            value={hero.description}
            onChange={(e) => updateHero("description", e.target.value)}
          />
        </div>

        <div className="admin-inline-group">
          <div className="admin-form-group">
            <label>GitHub URL</label>
            <input
              className="admin-input"
              value={hero.githubUrl}
              onChange={(e) => updateHero("githubUrl", e.target.value)}
            />
          </div>
          <div className="admin-form-group">
            <label>CV URL</label>
            <input
              className="admin-input"
              value={hero.cvUrl}
              onChange={(e) => updateHero("cvUrl", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Typed.js Metinleri</span>
        </div>

        <div className="admin-chip-list">
          {hero.typedStrings.map((str, i) => (
            <div className="admin-chip" key={i}>
              {str}
              <button onClick={() => handleRemoveTypedString(i)}>
                <i className="bx bx-x" />
              </button>
            </div>
          ))}
        </div>

        <div className="admin-inline-group" style={{ marginTop: "1.2rem" }}>
          <div className="admin-form-group">
            <input
              className="admin-input"
              placeholder="Yeni metin ekle..."
              value={newTypedString}
              onChange={(e) => setNewTypedString(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTypedString()}
            />
          </div>
          <div>
            <button className="admin-btn admin-btn-primary" onClick={handleAddTypedString}>
              <i className="bx bx-plus" /> Ekle
            </button>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Sosyal Medya</span>
        </div>

        {hero.socialLinks.map((link) => (
          <div className="admin-card" key={link.id} style={{ background: "var(--bg-primary)" }}>
            <div className="admin-card-header">
              <span className="admin-card-title">
                <i className={`bx ${link.icon}`} /> {link.label}
              </span>
              <button
                className="admin-btn admin-btn-danger"
                onClick={() => removeSocialLink(link.id)}
              >
                <i className="bx bx-trash" /> Sil
              </button>
            </div>
            <div className="admin-inline-group">
              <div className="admin-form-group">
                <label>URL</label>
                <input
                  className="admin-input"
                  value={link.url}
                  onChange={(e) => updateSocialLink(link.id, "url", e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <label>Icon (Boxicons)</label>
                <input
                  className="admin-input"
                  value={link.icon}
                  onChange={(e) => updateSocialLink(link.id, "icon", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="admin-card" style={{ background: "var(--bg-primary)", borderStyle: "dashed" }}>
          <div className="admin-card-header">
            <span className="admin-card-title">Yeni Sosyal Medya Ekle</span>
          </div>
          <div className="admin-inline-group">
            <div className="admin-form-group">
              <label>ID</label>
              <input
                className="admin-input"
                value={newSocial.id}
                onChange={(e) => setNewSocial({ ...newSocial, id: e.target.value })}
                placeholder="twitter"
              />
            </div>
            <div className="admin-form-group">
              <label>Label</label>
              <input
                className="admin-input"
                value={newSocial.label}
                onChange={(e) => setNewSocial({ ...newSocial, label: e.target.value })}
                placeholder="Twitter"
              />
            </div>
          </div>
          <div className="admin-inline-group">
            <div className="admin-form-group">
              <label>URL</label>
              <input
                className="admin-input"
                value={newSocial.url}
                onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })}
                placeholder="https://twitter.com/..."
              />
            </div>
            <div className="admin-form-group">
              <label>Icon</label>
              <input
                className="admin-input"
                value={newSocial.icon}
                onChange={(e) => setNewSocial({ ...newSocial, icon: e.target.value })}
                placeholder="bxl-twitter"
              />
            </div>
          </div>
          <button className="admin-btn admin-btn-success" onClick={handleAddSocial}>
            <i className="bx bx-plus" /> Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
