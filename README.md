# Portfolio - Rahmat Fadhil Syauqy

Portofolio profesional Rahmat Fadhil Syauqy — Software & Data Engineer. Dibangun menggunakan modern stack **React.js**, **Express.js (Backend)**, **Vite**, dan **Tailwind CSS**.

---

## 🚀 Fitur & Peningkatan

- **Frontend React 19 Modern**: Arsitektur modular per komponen (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `OtherProjects`, `Contact`, `Footer`, `ProjectModal`).
- **Backend API Server (Express.js)**:
  - Menyajikan file frontend produksi (*production build static server*).
  - Endpoint **Health Check** (`GET /api/health`).
  - Endpoint **Data Portofolio** (`GET /api/portfolio`).
  - Endpoint **Formulir Kontak** (`POST /api/contact`) yang memvalidasi input dan menyimpan pesan masuk ke `data/messages.json`.
  - Endpoint **Review Pesan** (`GET /api/messages`).
- **Interactive Lightbox Modal**:
  - Pratinjau galeri gambar proyek resolusi tinggi dengan navigasi tombol.
  - Kontrol keyboard: `ArrowLeft`, `ArrowRight`, dan `Escape` untuk menutup.
  - Dukungan sentuh (*touch swipe*) untuk pengguna HP/tablet.
  - Kunci *scroll* halaman (`overflow: hidden`) saat modal aktif.
- **ScrollSpy Navbar**: Navigasi mengambang (*floating glassmorphism*) dengan deteksi posisi scroll otomatis dan menu responsif untuk layar HP.
- **Salin Email Instan**: Fitur salin alamat email ke *clipboard* dengan notifikasi visual langsung.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vite.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/) & [Express.js 5](https://expressjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono

---

## 💻 Cara Menjalankan

### 1. Menjalankan Backend Server (Frontend + API)
Server backend akan menyajikan aplikasi React serta endpoint API di port `5000`:
```bash
# Build frontend terlebih dahulu (jika ada perubahan)
npm run build

# Jalankan server backend (foreground)
npm start

# Atau jalankan di background (daemon)
npm run start:bg

# Untuk menghentikan server background
npm run stop
```
Buka browser di: **`http://localhost:5000`**

### 2. Menjalankan Dev Server (Vite Hot-Reload)
Untuk pengembangan frontend cepat dengan Hot Module Replacement (HMR):
```bash
npm run dev
```
Buka browser di: **`http://localhost:5173`**

---

## 📡 Daftar Endpoint Backend API

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/health` | Status dan uptime server backend |
| `GET` | `/api/portfolio` | Data profil, keahlian, dan proyek |
| `POST` | `/api/contact` | Mengirim pesan kontak baru (`name`, `email`, `message`) |
| `GET` | `/api/messages` | Melihat daftar pesan yang masuk |

---

## 📄 Lisensi

Distributed under the [MIT License](LICENSE).
