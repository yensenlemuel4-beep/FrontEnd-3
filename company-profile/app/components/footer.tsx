import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <Link href="/" className="brand">
          KompKita
        </Link>
        <p>Jual dan servis komputer terpercaya.</p>
      </div>
    </footer>
  );
}
