/* =========================================================
   DATA — edit content here without touching HTML/CSS.
   ========================================================= */

// Data guru BK — jangan mengubah ejaan nama.
const COUNSELORS = [
  {
    name: "Puji Astuti, S.Pd., Gr",
    role: "Guru Bimbingan dan Konseling",
    photo: "images/guru-1-puji-astuti.jpg",
    note: "Profil lengkap akan segera dilengkapi oleh admin BK."
  },
  {
    name: "Rangga Harin Nugrogo, S.Pd., Gr",
    role: "Guru Bimbingan dan Konseling",
    photo: "images/guru-2-rangga-harin.jpg",
    note: "Profil lengkap akan segera dilengkapi oleh admin BK."
  },
  {
    name: "Wahyu Suci Lestari, S.Pd., Gr",
    role: "Guru Bimbingan dan Konseling",
    photo: "images/guru-3-wahyu-suci.jpg",
    note: "Profil lengkap akan segera dilengkapi oleh admin BK."
  },
  {
    name: "Amara Indah Pransiska, S.Pd.",
    role: "Guru Bimbingan dan Konseling",
    photo: "images/guru-4-amara-indah.jpg",
    note: "Profil lengkap akan segera dilengkapi oleh admin BK."
  },
  {
    name: "Vin Rahma Wijayaningsih, S.Sos., Gr",
    role: "Guru Bimbingan dan Konseling",
    photo: "images/guru-5-vin-rahma.jpg",
    note: "Profil lengkap akan segera dilengkapi oleh admin BK."
  }
];

// Layanan Bimbingan dan Konseling
const SERVICES = [
  { icon: "user", title: "Layanan Pribadi", desc: "Membantu siswa memahami dan mengembangkan dirinya." },
  { icon: "users", title: "Layanan Sosial", desc: "Membantu siswa membangun hubungan sosial yang sehat dan positif." },
  { icon: "book-open", title: "Layanan Belajar", desc: "Membantu siswa mengatasi hambatan belajar dan meningkatkan strategi belajar." },
  { icon: "briefcase", title: "Layanan Karir", desc: "Membantu siswa mengenali minat, bakat, potensi, serta merencanakan studi lanjut dan karir." },
  { icon: "presentation", title: "Bimbingan Klasikal", desc: "Layanan BK yang diberikan kepada seluruh siswa dalam suasana pembelajaran yang interaktif." },
  { icon: "message-circle", title: "Konseling Individu", desc: "Layanan pendampingan secara pribadi antara siswa dengan guru BK." },
  { icon: "users-round", title: "Konseling Kelompok", desc: "Layanan yang membantu siswa melalui dinamika kelompok." },
  { icon: "handshake", title: "Konsultasi", desc: "Layanan konsultasi bagi siswa, orang tua, guru, dan pihak terkait." }
];

// Program Bimbingan dan Konseling
const PROGRAMS = [
  { icon: "presentation", title: "Bimbingan Klasikal", desc: "Layanan bimbingan yang diberikan secara terjadwal di dalam kelas." },
  { icon: "message-circle", title: "Konseling Individu", desc: "Pendampingan personal sesuai kebutuhan masing-masing siswa." },
  { icon: "users-round", title: "Konseling Kelompok", desc: "Pendampingan melalui dinamika dan diskusi kelompok kecil." },
  { icon: "briefcase", title: "Bimbingan Karir", desc: "Pengenalan pilihan studi lanjut dan dunia kerja." },
  { icon: "compass", title: "Pemetaan Minat dan Bakat", desc: "Membantu siswa mengenali potensi diri secara terarah." },
  { icon: "hand-heart", title: "Pendampingan Siswa", desc: "Pendampingan berkelanjutan untuk perkembangan peserta didik." },
  { icon: "shield-check", title: "Pencegahan Bullying", desc: "Upaya preventif menciptakan lingkungan sekolah yang aman." },
  { icon: "sparkles", title: "Pendidikan Karakter", desc: "Penguatan nilai, akhlak, dan Profil Pelajar Pancasila." },
  { icon: "users", title: "Pengembangan Keterampilan Sosial", desc: "Melatih komunikasi dan interaksi sosial yang sehat." },
  { icon: "graduation-cap", title: "Persiapan Studi Lanjut", desc: "Pendampingan menuju perguruan tinggi atau jenjang berikutnya." },
  { icon: "book-open", title: "Pendampingan Masalah Belajar", desc: "Membantu siswa mengatasi kesulitan dalam proses belajar." },
  { icon: "home", title: "Kolaborasi dengan Orang Tua", desc: "Komunikasi berkelanjutan bersama keluarga peserta didik." },
  { icon: "handshake", title: "Kolaborasi dengan Wali Kelas dan Guru Mapel", desc: "Sinergi bersama seluruh warga sekolah dalam mendampingi siswa." }
];

// Berita & Pengumuman — data dummy, mudah diedit/dikembangkan.
const NEWS = [
  {
    category: "Informasi Layanan",
    date: "12 Agustus 2026",
    title: "Layanan Konsultasi BK Semester Ganjil Telah Dibuka",
    summary: "BK membuka jadwal konsultasi bagi siswa yang ingin berkonsultasi secara langsung maupun melalui email resmi.",
    icon: "megaphone"
  },
  {
    category: "Kegiatan",
    date: "5 Agustus 2026",
    title: "Bimbingan Klasikal: Mengenal Potensi Diri",
    summary: "Kegiatan bimbingan klasikal dilaksanakan di seluruh kelas untuk membantu siswa memahami minat dan bakatnya.",
    icon: "presentation"
  },
  {
    category: "Studi Lanjut",
    date: "28 Juli 2026",
    title: "Persiapan Informasi Studi Lanjut dan Perguruan Tinggi",
    summary: "BK mulai menyiapkan informasi seputar jalur masuk perguruan tinggi bagi siswa kelas akhir.",
    icon: "graduation-cap"
  },
  {
    category: "Pengembangan Diri",
    date: "20 Juli 2026",
    title: "Kegiatan Pengembangan Diri dan Keterampilan Sosial",
    summary: "Rangkaian kegiatan untuk melatih rasa percaya diri, komunikasi, dan kerja sama antar siswa.",
    icon: "sparkles"
  },
  {
    category: "Pengumuman",
    date: "14 Juli 2026",
    title: "Jadwal Layanan BK Tahun Ajaran Baru",
    summary: "Pengumuman resmi terkait jadwal layanan Bimbingan dan Konseling pada tahun ajaran baru.",
    icon: "calendar"
  },
  {
    category: "Anti-Bullying",
    date: "8 Juli 2026",
    title: "Kampanye Sekolah Aman dan Bebas Perundungan",
    summary: "BK mengajak seluruh warga sekolah untuk bersama-sama menciptakan lingkungan yang aman dan inklusif.",
    icon: "shield-check"
  }
];

// FAQ
const FAQS = [
  {
    q: "Apakah siswa boleh datang ke ruang BK tanpa dipanggil?",
    a: "Ya. Siswa dapat datang secara mandiri untuk berkonsultasi dengan guru BK."
  },
  {
    q: "Apakah cerita kepada guru BK bersifat rahasia?",
    a: "Guru BK menjaga kerahasiaan informasi peserta didik sesuai dengan prinsip dan etika layanan Bimbingan dan Konseling."
  },
  {
    q: "Apakah orang tua dapat berkonsultasi dengan guru BK?",
    a: "Ya. Orang tua dapat berkomunikasi dan berkonsultasi dengan guru BK untuk mendukung perkembangan peserta didik."
  },
  {
    q: "Bagaimana cara menghubungi guru BK?",
    a: "Kamu dapat datang langsung ke ruang BK, atau menghubungi melalui email resmi BK yang tercantum pada bagian Kontak."
  }
];
