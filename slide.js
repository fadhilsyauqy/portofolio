// Database data gambar untuk masing-masing projek
const projectData = {
    project1: {
        title: "Sistem POS Toko Merapi",
        slides: [
            {
                img: "image/Pos Merapi/dashboard.png",
                desc: "Dashboard visualisasi data penjualan dan laporan keuangan.",
            },
            {
                img: "image/Pos Merapi/transaksi.png",
                desc: "Modul transaksi penjualan dan pembuatan bukti pembayaran.",
            },
            {
                img: "image/Pos Merapi/kon_byr.png",
                desc: "Modul konfirmasi pembayaran.",
            },
            {
                img: "image/Pos Merapi/statistik.png",
                desc: "Modul statistik penjualan.",
            },
        ],
    },
    project3: {
        title: "Sistem Laporan Kehadiran KPU Kota Bukittinggi",
        slides: [
            {
                img: "image/kpu/login.png",
                desc: "Halaman login dengan autentikasi berbasis peran untuk akses yang aman.",
            },
            {
                img: "image/kpu/form.png",
                desc: "Form input data kehadiran dengan validasi real-time untuk memastikan integritas data.",
            },
            {
                img: "image/kpu/dashboard.png",
                desc: "Tampilan setelah login dengan dashboard yang menampilkan logo KPU Kota Bukittinggi.",
            },
        ],
    },
};

let currentProject = "";
let currentSlideIndex = 0;

// Fungsi untuk Membuka Modal Slider
function openSlider(projectId) {
    currentProject = projectId;
    currentSlideIndex = 0;

    const modal = document.getElementById("sliderModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    renderSlide();
}

// Fungsi untuk Menutup Modal
function closeSlider() {
    const modal = document.getElementById("sliderModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
}

// Fungsi Render Konten Gambar dan Teks
function renderSlide() {
    const data = projectData[currentProject];
    const currentSlide = data.slides[currentSlideIndex];

    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalDescription").innerText = currentSlide.desc;

    const contentArea = document.getElementById("sliderContent");
    contentArea.innerHTML = `
        <img src="${currentSlide.img}" alt="Slide ${currentSlideIndex + 1}" 
             class="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-fadeIn" />
    `;

    // Ganti bagian ini di dalam fungsi renderSlide() pada slide.js Anda
    const dotsContainer = document.getElementById("sliderDots");
    dotsContainer.innerHTML = "";
    data.slides.forEach((_, index) => {
        const dot = document.createElement("button");
        // Navigasi dengan klik titik
        dot.onclick = () => {
            currentSlideIndex = index;
            renderSlide();
        };

        // WARNA CERAH TERBARU:
        // Aktif: bg-slate-900 (Gelap) | Tidak Aktif: bg-slate-300 (Abu-abu muda)
        dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlideIndex
                ? "bg-slate-900 w-6"
                : "bg-slate-300 hover:bg-slate-400"
            }`;
        dotsContainer.appendChild(dot);
    });
}

function changeSlide(direction) {
    const totalSlides = projectData[currentProject].slides.length;
    currentSlideIndex += direction;

    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    renderSlide();
}

// Menutup modal otomatis jika area luar modal diklik (Background hitam)
document.getElementById("sliderModal").addEventListener("click", function (e) {
    if (e.target === this) {
        closeSlider();
    }
});

// Menambahkan support navigasi Keyboard (Esc untuk close, Panah Kiri/Kanan)
document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("sliderModal");
    if (!modal.classList.contains("hidden")) {
        if (event.key === "Escape") closeSlider();
        if (event.key === "ArrowRight") changeSlide(1);
        if (event.key === "ArrowLeft") changeSlide(-1);
    }
});
