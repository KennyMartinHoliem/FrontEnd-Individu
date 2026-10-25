export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} PT Maju Bersama</p>
      </div>
    </footer>
  );
}
