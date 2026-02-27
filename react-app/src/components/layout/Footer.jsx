import useSiteStore from "../../store/useSiteStore";

export default function Footer() {
  const footer = useSiteStore((s) => s.data.footer);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <a className="footer-logo" onClick={scrollToTop} style={{ cursor: "pointer" }}>
          B<span>.</span>CAN
        </a>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
