import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: {
    default: "KompKita | Jual dan Servis Komputer",
    template: "%s | KompKita",
  },
  description:
    "KompKita melayani penjualan, perbaikan, dan upgrade komputer untuk kebutuhan rumah maupun bisnis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
