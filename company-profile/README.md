# KompKita

Company profile sederhana untuk usaha jual dan servis komputer. Tampilan
menggunakan CSS biasa tanpa Tailwind. Untuk menjalankan project:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Halaman

- `/` — Beranda
- `/tentang` — Tentang KompKita
- `/layanan` — Jual komputer, servis, dan upgrade
- `/layanan/[alt]` — Detail layanan dinamis
- `/kontak` — Informasi kontak

Navbar dan footer digunakan bersama di seluruh halaman. Navigasi internal menggunakan `Link` dari Next.js, dan Navbar menandai halaman aktif berdasarkan URL.
