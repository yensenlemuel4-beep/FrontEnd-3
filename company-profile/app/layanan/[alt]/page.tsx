import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../lib/services";

type ServicePageProps = {
  params: Promise<{ alt: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ alt: service.alt }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { alt } = await params;
  const service = services.find((item) => item.alt === alt);

  return {
    title: service?.title ?? "Layanan tidak ditemukan",
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { alt } = await params;
  const service = services.find((item) => item.alt === alt);

  if (!service) {
    notFound();
  }

  return (
    <div className="page-container">
      <Link
        href="/layanan"
        className="detail-back"
      >
        ← Semua layanan
      </Link>
      <div className="detail-grid">
        <div>
          <p className="eyebrow">Layanan {service.number}</p>
          <h1 className="page-title">
            {service.title}
          </h1>
          <p className="detail-description">{service.description}</p>
          <Link
            href="/kontak"
            className="text-link"
          >
            Diskusikan kebutuhan Anda
          </Link>
        </div>
        <div className="info-panel detail-benefits">
          <h2>Yang akan Anda dapatkan</h2>
          <ul>
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
