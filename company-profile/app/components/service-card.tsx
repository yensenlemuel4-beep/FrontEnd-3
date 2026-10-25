import Link from "next/link";
import type { Service } from "../lib/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/layanan/${service.alt}`}
      className="service-card"
    >
      <p className="service-number">Layanan {service.number}</p>
      <h3>{service.title}</h3>
      <p className="service-card-description">{service.summary}</p>
      <span className="service-card-link">Selengkapnya →</span>
    </Link>
  );
}
