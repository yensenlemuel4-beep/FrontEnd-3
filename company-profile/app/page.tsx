import Link from "next/link";
import SectionHeading from "./components/section-heading";
import ServiceCard from "./components/service-card";
import { services } from "./lib/services";

export default function Home() {
  return (
    <div className="page-container">
      <section className="home-hero">
        <p className="eyebrow">KompKita</p>
        <h1>
          Solusi komputer untuk rumah dan bisnis Anda.
        </h1>
        <p>
          Kami menyediakan komputer berkualitas, layanan perbaikan, dan upgrade
          perangkat dengan harga yang jelas dan pelayanan ramah.
        </p>
        <Link
          href="/layanan"
          className="text-link"
        >
          Lihat layanan kami
        </Link>
      </section>

      <section className="home-services">
        <SectionHeading
          eyebrow="Layanan"
          title="Apa yang kami lakukan"
          description="Pilih layanan yang sesuai dengan kebutuhan bisnis Anda."
        />
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.alt} service={service} />
          ))}
        </div>
      </section>

      <section className="home-contact">
        <h2>Komputer Anda bermasalah?</h2>
        <p>
          Hubungi kami untuk konsultasi atau jadwalkan perbaikan.
        </p>
        <Link
          href="/kontak"
          className="text-link"
        >
          Hubungi KompKita
        </Link>
      </section>
    </div>
  );
}
