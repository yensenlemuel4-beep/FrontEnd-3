import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";
import ServiceCard from "../components/service-card";
import { services } from "../lib/services";

export const metadata: Metadata = {
  title: "Layanan",
};

export default function ServicesPage() {
  return (
    <div className="page-container">
      <SectionHeading
        eyebrow="Layanan kami"
        title="Jual dan servis komputer"
        description="Pilih layanan komputer yang Anda butuhkan."
      />
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.alt} service={service} />
        ))}
      </div>
    </div>
  );
}
