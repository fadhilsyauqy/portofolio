export const portfolioData = {
  profile: {
    name: "Rahmat Fadhil Syauqy",
    role: "Software & Data Engineer",
    status: "Aktif mencari posisi: Software Engineer / Web Developer",
    openToWork: true,
    rolesSought: [
      "Software Engineer",
      "Full-Stack Developer",
      "Backend Engineer",
      "Web Developer",
    ],
    workPreferences: "Tersedia untuk Full-Time, Kontrak, Remote, Hybrid, maupun On-site.",
    location: "Indonesia (WIB / UTC+7)",
    education: {
      degree: "S1 Teknik Informatika",
      institution: "Institut Teknologi Sumatera (ITERA)",
    },
    bio: [
      "Saya lulusan Teknik Informatika ITERA yang berfokus pada pengembangan aplikasi web full-stack dan rekayasa basis data. Terbiasa merancang sistem dari pemodelan skema relasional, logika backend yang terstruktur, hingga antarmuka web yang responsif dan berkinerja tinggi.",
      "Memiliki pengalaman membangun sistem Point-of-Sale (POS), portal manajemen presensi aparatur sipil publik, sistem informasi spasial geografis (SIG), hingga integrasi computer vision pada arsitektur cloud. Siap berkontribusi secara langsung dalam tim software engineering yang dinamis.",
    ],
    photo: "./image/IMG_7949.png",
    photoFallback: "https://placehold.co/600x800/f8fafc/2563eb?text=Fadhil",
    contact: {
      email: "rahmatfadhilsauqy08@gmail.com",
      github: "https://github.com/fadhilsyauqy",
      linkedin: "https://linkedin.com/in/fadhilsyauqy08",
    },
  },

  skillsMatrix: [
    {
      category: "Frontend & Web",
      items: [
        { name: "React.js", note: "SPA, Hooks, State" },
        { name: "JavaScript (ES6+)", note: "Modern DOM, Async, OOP" },
        { name: "Tailwind CSS", note: "Utility-first, Responsive" },
        { name: "HTML5 & CSS3", note: "Semantic, Accessibility" },
        { name: "Bootstrap", note: "Rapid Prototyping" },
      ],
    },
    {
      category: "Backend & Runtime",
      items: [
        { name: "Node.js & Express", note: "REST API, Middleware" },
        { name: "PHP & Laravel", note: "MVC, Eloquent, Auth" },
        { name: "Python", note: "Automation, OOP, Data" },
        { name: "RESTful Architecture", note: "API Design & Contract" },
      ],
    },
    {
      category: "Database & Storage",
      items: [
        { name: "PostgreSQL", note: "Relational, Indexing" },
        { name: "MySQL", note: "Schema Design, Queries" },
        { name: "Data Modeling", note: "Normalisasi 1NF-3NF, ERD" },
        { name: "Query Optimization", note: "Joins, Aggregations" },
      ],
    },
    {
      category: "Cloud, GIS & Tools",
      items: [
        { name: "Google Cloud (GCP)", note: "Cloud Deployment" },
        { name: "Git & GitHub", note: "Version Control, CI/CD" },
        { name: "QGIS", note: "Spatial & GeoJSON Mapping" },
        { name: "Tableau & Excel", note: "Data Analysis & Viz" },
      ],
    },
  ],

  featuredProjects: [
    {
      id: "pos-merapi",
      index: "01",
      title: "Sistem POS Toko Merapi",
      category: "Full-Stack Web & Database",
      timeline: "Proyek Sistem Informasi Retail",
      summary:
        "Aplikasi Point-of-Sale menyeluruh untuk operasional retail Toko Merapi. Mengotomatisasi kasir, pemrosesan transaksi real-time, pencatatan invoice digital, verifikasi pembayaran, serta analitik omzet berkala.",
      highlights: [
        "Arsitektur backend modular berbasis Node.js dan Express dengan pemisahan route dan controller yang rapi.",
        "Pemodelan basis data relasional PostgreSQL dengan integritas transaksi dan relasi tabel penjualan/inventaris.",
        "Dashboard visual interaktif untuk rekapitulasi data penjualan harian dan laporan omzet produk.",
      ],
      coverImage: "./image/Pos Merapi/dashboard.png",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/fadhilsyauqy/POS-Toko-Merapi",
      slides: [
        {
          img: "./image/Pos Merapi/dashboard.png",
          desc: "Dashboard analitik penjualan: ringkasan pendapatan, grafik transaksi, dan ringkasan stok.",
        },
        {
          img: "./image/Pos Merapi/transaksi.png",
          desc: "Modul kasir: input barang belanjaan, kalkulasi subtotal otomatis, dan pembuatan struk transaksi.",
        },
        {
          img: "./image/Pos Merapi/kon_byr.png",
          desc: "Modul konfirmasi dan verifikasi status pembayaran transaksi.",
        },
        {
          img: "./image/Pos Merapi/statistik.png",
          desc: "Laporan statistik performa produk dan visualisasi tren omzet penjualan.",
        },
        {
          img: "./image/Pos Merapi/login.png",
          desc: "Antarmuka autentikasi pengguna POS dengan proteksi sesi.",
        },
      ],
    },
    {
      id: "tani-care",
      index: "02",
      title: "Tani Care",
      category: "Cloud Computing & AI",
      timeline: "Capstone Project",
      summary:
        "Sistem deteksi penyakit tanaman berbasis computer vision dan machine learning. Mengidentifikasi anomali serta gejala patogen pada daun tanaman melalui analisis citra visual, di-deploy pada infrastruktur Cloud.",
      highlights: [
        "Pipeline pengolahan citra daun dan inferensi model machine learning berbasis Python.",
        "Penyebaran arsitektur server inferensi pada Google Cloud Platform (GCP).",
        "Kolaborasi tim lintas disiplin untuk integrasi model cerdas ke platform siap pakai.",
      ],
      coverImage: "./image/tani/mockup.png",
      technologies: ["Python", "Google Cloud", "Computer Vision", "REST API"],
      github: "https://github.com/TaniCare/cloud-computing",
      slides: [
        {
          img: "./image/tani/mockup.png",
          desc: "Antarmuka aplikasi Tani Care dan alur pemindaian citra daun untuk deteksi penyakit tanaman.",
        },
      ],
    },
    {
      id: "kpu-bukittinggi",
      index: "03",
      title: "Sistem Presensi KPU Kota Bukittinggi",
      category: "Internal Enterprise System",
      timeline: "Proyek Sistem Pemerintahan",
      summary:
        "Platform manajemen sumber daya manusia internal untuk otomatisasi pelaporan kehadiran, tracking absensi staf, dan rekapitulasi data presensi pada Komisi Pemilihan Umum (KPU) Kota Bukittinggi.",
      highlights: [
        "Autentikasi Role-Based Access Control (RBAC) untuk membedakan hak akses pegawai biasa dan administrator.",
        "Formulir pencatatan presensi dengan validasi real-time untuk menjamin kepatuhan dan integritas waktu.",
        "Dashboard rekapitulasi terstruktur dengan penyimpanan data audit presensi di MySQL.",
      ],
      coverImage: "./image/kpu/dashboard.png",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: null,
      slides: [
        {
          img: "./image/kpu/dashboard.png",
          desc: "Dashboard utama sistem presensi staf Komisi Pemilihan Umum (KPU) Kota Bukittinggi.",
        },
        {
          img: "./image/kpu/form.png",
          desc: "Formulir input data kehadiran harian dilengkapi validasi integritas input data.",
        },
        {
          img: "./image/kpu/login.png",
          desc: "Halaman autentikasi dengan enkripsi password dan validasi hak akses berjenjang.",
        },
        {
          img: "./image/kpu/home.png",
          desc: "Halaman beranda portal presensi staf KPU Kota Bukittinggi.",
        },
      ],
    },
  ],

  otherProjects: [
    {
      id: "mbak-tembak",
      title: "Game MbakTembak",
      category: "2D Game Development",
      summary:
        "Game aksi 2D yang dikembangkan dari awal menggunakan Python. Menerapkan arsitektur Object-Oriented Programming (OOP) murni untuk perancangan game loop, sprite animasi, collision detection, dan state manager.",
      stack: ["Python", "OOP Architecture", "Pygame", "Vector Art"],
      github:
        "https://github.com/fadhilsyauqy/Tugas-Besar-Pemrograman-Berorientasi-Objek",
    },
    {
      id: "sig-gempa",
      title: "SIG Rawan Gempa Sumbar",
      category: "Geographic Information System",
      summary:
        "Sistem Informasi Geografis berbasis web yang memetakan zona rawan gempa bumi di Provinsi Sumatera Barat. Mengintegrasikan layer spasial GeoJSON, data seismik, dan manajemen koordinat untuk visualisasi publik.",
      stack: ["PHP", "JavaScript", "QGIS", "GeoJSON"],
      github:
        "https://github.com/fadhilsyauqy/Tugas-Besar-SIG-0ea4ad21036b5a566ff8300d236f6b20e033a389",
    },
    {
      id: "user-management",
      title: "Web Manajemen Pengguna & Audit IP",
      category: "Security & CRUD Application",
      summary:
        "Aplikasi web pengelolaan data pengguna dinamis yang dilengkapi sistem pelacakan IP address untuk audit keamanan akses. Menekankan sanitasi input form dan arsitektur kode OOP pada JavaScript sisi klien.",
      stack: ["PHP", "MySQL", "JavaScript OOP", "Audit Security"],
      github:
        "https://github.com/fadhilsyauqy/121140109-UAS-Pemrogaram_Web_RC",
    },
  ],
};
