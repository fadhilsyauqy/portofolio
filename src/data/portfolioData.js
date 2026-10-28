const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/portofolio/';
const asset = (p) => `${base.replace(/\/$/, '')}/${p.replace(/^\.?\//, '')}`;

export const portfolioData = {
  profile: {
    name: "Rahmat Fadhil Syauqy",
    role: "Software & Data Engineer",
    status: "Fresh Graduate · Aktif Mencari Pekerjaan",
    openToWork: true,
    rolesSought: [
      "Software Engineer",
      "Full-Stack Developer",
      "Backend Engineer",
      "Web Developer",
    ],
    workPreferences: "Tersedia untuk Full-Time, Kontrak, Remote, Hybrid, maupun On-site.",
    location: "Indonesia (WIB / UTC+7)",
    phone: "+62 812-7067-8170",
    phoneClean: "6281270678170",
    education: {
      degree: "S1 Teknik Informatika",
      institution: "Institut Teknologi Sumatera (ITERA)",
    },
    bio: [
      "Saya lulusan Teknik Informatika ITERA yang berfokus pada pengembangan aplikasi web full-stack dan rekayasa basis data. Terbiasa merancang sistem dari pemodelan skema relasional, logika backend yang terstruktur, hingga antarmuka web yang responsif dan berkinerja tinggi.",
      "Memiliki pengalaman membangun sistem Point-of-Sale (POS), portal manajemen presensi aparatur sipil publik, sistem informasi spasial geografis (SIG), hingga integrasi computer vision pada arsitektur cloud. Siap berkontribusi secara langsung dalam tim software engineering yang dinamis.",
    ],
    photo: asset("image/IMG_7949.png"),
    photoFallback: "https://placehold.co/600x800/f8fafc/2563eb?text=Fadhil",
    contact: {
      email: "rahmatfadhilsauqy08@gmail.com",
      github: "https://github.com/fadhilsyauqy",
      linkedin: "https://linkedin.com/in/fadhilsyauqy08",
      phone: "+62 812-7067-8170",
    },
  },

  skillsMatrix: [
    {
      category: "Bahasa Pemrograman",
      description: "Bahasa utama untuk logika sistem, backend, dan komputasi",
      skills: ["JavaScript", "PHP", "Python", "SQL", "HTML & CSS"],
    },
    {
      category: "Web Development",
      description: "Framework, runtime, dan perancangan antarmuka & REST API",
      skills: ["Node.js", "Express.js", "Laravel", "React.js", "Tailwind CSS", "Bootstrap", "REST API"],
    },
    {
      category: "Basis Data",
      description: "Pengelolaan skema relasional dan query data",
      skills: ["PostgreSQL", "MySQL", "Prisma ORM"],
    },
    {
      category: "Cloud, Tools & Analisis Data",
      description: "Infrastruktur cloud, version control, dan visualisasi data",
      skills: ["Google Cloud Platform", "Git & GitHub", "Postman", "Tableau", "Microsoft Excel", "QGIS"],
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
      coverImage: asset("image/Pos Merapi/dashboard.png"),
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/fadhilsyauqy/POS-Toko-Merapi",
      slides: [
        {
          img: asset("image/Pos Merapi/dashboard.png"),
          desc: "Dashboard analitik penjualan: ringkasan pendapatan, grafik transaksi, dan ringkasan stok.",
        },
        {
          img: asset("image/Pos Merapi/transaksi.png"),
          desc: "Modul kasir: input barang belanjaan, kalkulasi subtotal otomatis, dan pembuatan struk transaksi.",
        },
        {
          img: asset("image/Pos Merapi/kon_byr.png"),
          desc: "Modul konfirmasi dan verifikasi status pembayaran transaksi.",
        },
        {
          img: asset("image/Pos Merapi/statistik.png"),
          desc: "Laporan statistik performa produk dan visualisasi tren omzet penjualan.",
        },
        {
          img: asset("image/Pos Merapi/login.png"),
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
      coverImage: asset("image/tani/mockup.png"),
      technologies: ["Python", "Google Cloud", "Computer Vision", "REST API"],
      github: "https://github.com/TaniCare/cloud-computing",
      slides: [
        {
          img: asset("image/tani/mockup.png"),
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
      coverImage: asset("image/kpu/dashboard.png"),
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: null,
      slides: [
        {
          img: asset("image/kpu/dashboard.png"),
          desc: "Dashboard utama sistem presensi staf Komisi Pemilihan Umum (KPU) Kota Bukittinggi.",
        },
        {
          img: asset("image/kpu/form.png"),
          desc: "Formulir input data kehadiran harian dilengkapi validasi integritas input data.",
        },
        {
          img: asset("image/kpu/login.png"),
          desc: "Halaman autentikasi dengan enkripsi password dan validasi hak akses berjenjang.",
        },
        {
          img: asset("image/kpu/home.png"),
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

  cv: {
    fullName: "Rahmat Fadhil Syauqy.A",
    title: "INFORMATICS ENGINEERING GRADUATE | SOFTWARE & DATA",
    status: "Fresh Graduate · Aktif Mencari Peluang Kerja",
    location: "Indonesia (WIB / UTC+7)",
    phone: "+62 812-7067-8170",
    phoneClean: "6281270678170",
    email: "rahmatfadhilsauqy08@gmail.com",
    linkedin: "https://linkedin.com/in/fadhilsyauqy08",
    github: "https://github.com/fadhilsyauqy",
    pdfUrl: asset("CV_Rahmat_Fadhil_Syauqy.pdf"),
    pdfFileName: "CV_Rahmat_Fadhil_Syauqy.A.pdf",
    summary:
      "Fresh graduate Teknik Informatika dari Institut Teknologi Sumatera (ITERA) dengan fokus pada software development, data, database, dan cloud computing. Memiliki pengalaman membangun aplikasi web menggunakan Laravel/PHP dan JavaScript/Node.js, mengelola database MySQL/PostgreSQL, serta menerapkan Google Cloud untuk deployment aplikasi berbasis AI. Terbiasa mengembangkan solusi end-to-end, mengolah dan memvisualisasikan data, serta bekerja secara kolaboratif dalam proyek teknologi.",
    workExperience: [
      {
        role: "Cloud Computing Cohort",
        company: "Bangkit Academy",
        location: "Bandung, Indonesia",
        period: "Sep 2024 - Jan 2025",
        type: "Program Studi Independen Bersertifikat",
        bullets: [
          "Mengimplementasikan infrastruktur Google Cloud untuk mendukung deployment aplikasi AI Tani Care dan integrasi layanan machine learning.",
          "Mengintegrasikan layanan cloud untuk kebutuhan penyimpanan, komputasi, API, dan deployment aplikasi.",
          "Berkolaborasi dalam tim lintas bidang untuk mengembangkan solusi AI yang mampu mengidentifikasi penyakit tanaman melalui citra daun dengan akurasi model hingga 90%.",
        ],
      },
      {
        role: "Data & Information Planning Staff Intern",
        company: "KPU Kota Bukittinggi",
        location: "Bukittinggi, Indonesia",
        period: "Jun 2024 - Aug 2024",
        type: "Magang / Internship",
        bullets: [
          "Mengembangkan website presensi mandiri berbasis Laravel/PHP dan MySQL untuk memusatkan proses pencatatan serta pemantauan kehadiran staf.",
          "Mengelola dan memperbarui data pemilih melalui sinkronisasi berkala untuk mendukung akurasi dan konsistensi data dalam penyusunan Daftar Pemilih Tetap (DPT).",
        ],
      },
    ],
    projects: [
      {
        name: "Sistem POS Toko Merapi",
        description:
          "Aplikasi point-of-sale end-to-end untuk manajemen inventaris, transaksi real-time, laporan penjualan, autentikasi, dan hak akses pengguna.",
        bullets: [
          "Mengembangkan backend REST API menggunakan Express.js/Node.js dengan PostgreSQL dan Prisma ORM menggunakan pola arsitektur MVC.",
          "Mengimplementasikan manajemen inventaris, transaksi, laporan penjualan, serta role-based access untuk Admin dan Kasir.",
          "Menerapkan JWT authentication untuk keamanan akses pengguna serta mengintegrasikan Cloudinary untuk penyimpanan dan pengelolaan gambar pada aplikasi.",
        ],
        github: "https://github.com/fadhilsyauqy/POS-Toko-Merapi",
        tools: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "JavaScript"],
      },
      {
        name: "Tani Care - AI Plant Disease Detection",
        description:
          "Aplikasi berbasis AI untuk mendeteksi gejala penyakit tanaman melalui analisis citra daun dan di-deploy menggunakan infrastruktur cloud.",
        bullets: [
          "Berkontribusi pada pengembangan aplikasi AI untuk mendeteksi penyakit tanaman melalui analisis citra daun dengan akurasi model hingga 90%.",
          "Mengembangkan sisi cloud computing untuk menghubungkan aplikasi dengan API machine learning dan menyiapkan kebutuhan deployment pada Google Cloud.",
          "Berkolaborasi dalam tim lintas bidang yang mencakup machine learning, mobile development, dan cloud computing.",
        ],
        github: "https://github.com/TaniCare/cloud-computing",
        tools: ["Google Cloud", "JavaScript", "Python", "REST API"],
      },
      {
        name: "SIG Rawan Gempa Sumbar",
        description:
          "Sistem Informasi Geografis interaktif untuk memetakan lokasi rawan gempa di Sumatera Barat, dilengkapi pengelolaan data spasial untuk admin dan peta visual bagi pengguna.",
        bullets: [
          "Mengembangkan fitur pemetaan lokasi rawan gempa dan pengelolaan data spasial untuk kebutuhan admin dan pengguna.",
          "Mengolah data spasial menggunakan QGIS dan mengintegrasikannya ke dalam sistem berbasis web.",
        ],
        github:
          "https://github.com/fadhilsyauqy/Tugas-Besar-SIG-0ea4ad21036b5a566ff8300d236f6b20e033a389",
        tools: ["PHP", "JavaScript", "QGIS"],
      },
      {
        name: "Web Manajemen Pengguna",
        description:
          "Aplikasi CRUD dengan autentikasi, integrasi database, pelacakan IP Address, dan validasi form menggunakan pendekatan OOP pada JavaScript.",
        bullets: [
          "Membangun manajemen pengguna terstruktur dengan otentikasi sesi dan pencatatan riwayat audit akses IP.",
          "Menerapkan validasi form ketat sisi klien dengan arsitektur berorientasi objek (OOP).",
        ],
        github:
          "https://github.com/fadhilsyauqy/121140109-UAS-Pemrogaram_Web_RC",
        tools: ["PHP", "MySQL", "JavaScript (OOP)"],
      },
      {
        name: "Sistem Laporan Kehadiran KPU Kota Bukittinggi",
        description:
          "Platform internal untuk pelaporan, pelacakan, dan autentikasi kehadiran staf KPU secara terpusat.",
        bullets: [
          "Membangun alur presensi mandiri dan pengelolaan data kehadiran untuk mengurangi proses pelaporan manual.",
          "Mengembangkan aplikasi menggunakan Laravel/PHP dan MySQL dengan fokus pada kemudahan penggunaan serta konsistensi data.",
        ],
        github: null,
        tools: ["Laravel", "PHP", "MySQL"],
      },
    ],
    education: {
      degree: "Bachelor of Informatics Engineering (S1 Teknik Informatika)",
      institution: "Institut Teknologi Sumatera (ITERA)",
      location: "Lampung, Indonesia",
      gpa: "3.42 / 4.00",
      period: "Jul 2021 - Apr 2026",
      coursework:
        "Sistem Informasi, Sistem Informasi Geografis, Pemrograman Web, serta Visualisasi Data dan Informasi.",
    },
    organizationalExperience: [
      {
        role: "Staff Pengabdian Masyarakat",
        organization: "Himpunan Mahasiswa Informatika",
        location: "Lampung, Indonesia",
        period: "Mar 2023 - Feb 2024",
        bullets: [
          "Merancang dan melaksanakan program pengabdian masyarakat yang berfokus pada literasi digital dan solusi IT tepat guna.",
          "Membangun komunikasi dengan mitra dan stakeholder untuk mendukung kelancaran serta keberlanjutan kegiatan.",
        ],
      },
      {
        role: "Staff Ahli Divisi Olahraga",
        organization: "Ikatan Keluarga Minangkabau ITERA",
        location: "Lampung, Indonesia",
        period: "Mar 2023 - Feb 2024",
        bullets: [
          "Merancang dan mengawasi program latihan serta agenda olahraga organisasi.",
          "Mengelola kebutuhan teknis, perlengkapan, fasilitas, dan operasional kegiatan di lapangan.",
        ],
      },
    ],
    technicalSkills: [
      {
        category: "Programming Languages",
        skills: ["JavaScript", "PHP", "Python", "SQL"],
      },
      {
        category: "Web Development",
        skills: ["Node.js", "Express.js", "Laravel", "REST API", "Tailwind CSS", "Bootstrap"],
      },
      {
        category: "Database",
        skills: ["PostgreSQL", "MySQL", "Prisma ORM"],
      },
      {
        category: "Cloud & Tools",
        skills: ["Google Cloud Platform", "Git", "GitHub", "Postman"],
      },
      {
        category: "Data & Visualization",
        skills: ["Microsoft Excel", "Tableau", "QGIS"],
      },
      {
        category: "Design",
        skills: ["Adobe Photoshop"],
      },
    ],
  },
};
