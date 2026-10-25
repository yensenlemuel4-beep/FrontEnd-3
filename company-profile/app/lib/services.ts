export type Service = {
  alt: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    alt: "jual-komputer",
    number: "01",
    title: "Jual komputer",
    summary: "Pilih komputer dan laptop sesuai kebutuhan serta anggaran Anda.",
    description:
      "Kami menyediakan komputer desktop dan laptop untuk belajar, bekerja, dan bermain. Tim kami siap membantu memilih perangkat yang sesuai dengan kebutuhan dan anggaran Anda.",
    benefits: [
      "Pilihan komputer dan laptop untuk berbagai kebutuhan",
      "Konsultasi spesifikasi sebelum membeli",
      "Informasi harga yang jelas",
    ],
  },
  {
    alt: "servis-komputer",
    number: "02",
    title: "Servis komputer",
    summary: "Perbaikan komputer dan laptop yang lambat atau bermasalah.",
    description:
      "Kami membantu memeriksa dan memperbaiki masalah komputer atau laptop, mulai dari perangkat yang lambat hingga gangguan pada sistem dan perangkat keras.",
    benefits: [
      "Pemeriksaan masalah perangkat",
      "Perbaikan perangkat keras dan perangkat lunak",
      "Konsultasi sebelum pengerjaan",
    ],
  },
  {
    alt: "upgrade-komputer",
    number: "03",
    title: "Upgrade komputer",
    summary: "Tingkatkan performa komputer dengan komponen yang tepat.",
    description:
      "Performa komputer dapat ditingkatkan dengan pilihan komponen yang sesuai. Kami membantu memilih dan memasang komponen agar perangkat lebih cepat dan nyaman digunakan.",
    benefits: [
      "Upgrade RAM dan penyimpanan SSD",
      "Pemasangan komponen komputer",
      "Saran upgrade sesuai kebutuhan dan anggaran",
    ],
  },
];
