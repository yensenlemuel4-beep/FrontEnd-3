import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <SectionHeading
        eyebrow="Tentang KompKita"
        title="Teman untuk semua kebutuhan komputer"
        description="KompKita membantu pelanggan memilih, memperbaiki, dan merawat komputer untuk belajar, bekerja, maupun bermain."
      />
      <div className="info-grid">
        <div className="info-panel">
          <p className="eyebrow">Misi kami</p>
          <h2 className="panel-title">
            Membantu komputer Anda kembali siap digunakan.
          </h2>
          <p className="about-copy">
            Kami memberikan layanan komputer yang jujur, praktis, dan mudah
            dipahami oleh setiap pelanggan.
          </p>
        </div>
        <div className="info-panel">
          <p className="eyebrow">Layanan kami</p>
          <ul>
            <li className="service-step">
              <span>01</span>
              Menjual komputer dan laptop sesuai kebutuhan.
            </li>
            <li className="service-step">
              <span>02</span>
              Memperbaiki komputer dan laptop.
            </li>
            <li className="service-step">
              <span>03</span>
              Melakukan upgrade dan perawatan perangkat.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
