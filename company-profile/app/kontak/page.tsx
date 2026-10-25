import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "Kontak",
};

export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="contact-grid">
        <SectionHeading
          eyebrow="Kontak"
          title="Butuh komputer atau bantuan servis?"
          description="Hubungi kami untuk bertanya tentang produk, konsultasi komputer, atau menjadwalkan servis."
        />
        <div className="info-panel">
          <p className="eyebrow">Hubungi KompKita</p>
          <p className="contact-copy">
            Silakan hubungi atau kunjungi toko kami untuk bertanya tentang
            komputer, servis, dan upgrade perangkat.
          </p>
        </div>
      </div>
    </div>
  );
}
