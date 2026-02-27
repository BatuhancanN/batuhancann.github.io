import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import "../styles/admin.css";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (login(username, password)) {
      navigate("/admin", { replace: true });
    } else {
      setError("Kullanici adi veya sifre hatali!");
      setPassword("");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <div className="admin-login-header">
          <i className="bx bx-lock-alt" />
          <h2>Admin Girisi</h2>
          <p>Devam etmek icin giris yapin</p>
        </div>

        {error && <div className="admin-login-error">{error}</div>}

        <div className="admin-form-group">
          <label>Kullanici Adi</label>
          <input
            className="admin-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
        </div>

        <div className="admin-form-group">
          <label>Sifre</label>
          <input
            className="admin-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="admin-btn admin-btn-primary admin-login-btn">
          <i className="bx bx-log-in" /> Giris Yap
        </button>

        <button
          type="button"
          className="admin-btn admin-btn-outline admin-login-btn"
          onClick={() => navigate("/")}
          style={{ marginTop: "0.8rem" }}
        >
          <i className="bx bx-arrow-back" /> Siteye Don
        </button>
      </form>
    </div>
  );
}
