/* =====================================================
   DATA MATA KULIAH  →  file yang paling sering diedit
   =====================================================
   Cara menambah mata kuliah:
   1. Salin satu baris { ... },
   2. Tempel di bawahnya, ubah isinya.
   3. Simpan, lalu refresh browser.

   sem     : nama semester (chip filter dibuat otomatis)
   kode    : kode mata kuliah
   mk      : nama mata kuliah
   link    : tautan folder materi (Google Drive, dll).
             Isi "" jika belum ada.
   catatan : keterangan singkat (boleh kosong)
*/
const MATERI = [
  // ----- Semester 1 -----
  { sem: "Semester 1", kode: "TL345", mk: "Fisika I",                    link: "https://drive.google.com/drive/folders/1h3KxsgIoaptMauFgemkizy6geRkGoTwZ?usp=drive_link", catatan: "Fisika Dasar" },
  { sem: "Semester 1", kode: "KU110", mk: "Pendidikan Pancasila",        link: "https://drive.google.com/drive/folders/1CsCqqPyU8CU-S1RaalPZPSGbizEdjri5?usp=drive_link", catatan: "" },
  { sem: "Semester 1", kode: "KU106", mk: "Pendidikan Bahasa Indonesia", link: "https://drive.google.com/drive/folders/1HDchGw3b1zYmgU_QAphT6wdzL2v3Beh2?usp=drive_link", catatan: "" },
  { sem: "Semester 1", kode: "TL343", mk: "Kalkulus I",                  link: "https://drive.google.com/drive/folders/1NZQACshKa-btDW1t1tiMH71lMPdIhPwD?usp=drive_link", catatan: "" },
  { sem: "Semester 1", kode: "KU108", mk: "Olahraga dan Kebugaran",      link: "https://drive.google.com/drive/folders/1MKtJNLKewWyTwC98x5-gE0-NDMPB4SHw?usp=drive_link", catatan: "" },
  { sem: "Semester 1", kode: "DK300", mk: "Landasan Pendidikan",         link: "https://drive.google.com/drive/folders/1aO-beCt300KfpB2M7jSdOlMHWenBrzQQ?usp=drive_link", catatan: "" },
  { sem: "Semester 1", kode: "TL347", mk: "Kimia",                       link: "https://drive.google.com/drive/folders/1Se6JzvUMn_tc0RYF7vgnDR-yM4-Ysiml?usp=drive_link", catatan: "" },
  { sem: "Semester 1", kode: "KU100", mk: "Pendidikan Agama Islam",      link: "https://drive.google.com/drive/folders/1ntSzDGa4l5MoxFCzvqkM6bnrdwnt7UFe?usp=drive_link", catatan: "" },

  // ----- Semester 2 -----
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  { sem: "Semester 2", kode: "TLXXX", mk: "Sistem Komunikasi",            link: "", catatan: ""},
  
];


/* =====================================================
   DATA ANGKATAN (halaman Beranda)
   Ganti isi placeholder dengan data asli.
   ===================================================== */

// Angka ringkas di bagian "Tentang angkatan"
const STATISTIK = [
  { angka: "2026", label: "Tahun masuk" },
  { angka: "107",   label: "Mahasiswa" },
  { angka: "05",   label: "Kelas" },
  { angka: "10",   label: "Pengurus" },
];


/* =====================================================
   DATA ORGANIGRAM (halaman struktur.html)
   Setiap [ ... ] adalah satu baris tingkat, dari atas ke bawah.
   Tambah orang dengan menyalin satu baris { ... }.
   ===================================================== */
const ORGANIGRAM = [
  [ { jabatan: "Ketua Angkatan", nama: "Mario Briliant Manik", kelas: "1B" } ],
  [ { jabatan: "Wakil Ketua",    nama: "Farrel Fadhilah Kurnia", kelas: "1A" },
    { jabatan: "Wakil Ketua",    nama: "Mutiara Damayanti", kelas: "1A" }],
  [ { jabatan: "Sekretaris",     nama: "Nama Lengkap", kelas: "1B" },
    { jabatan: "Bendahara",      nama: "Nama Lengkap", kelas: "1B" } ],
  [ { jabatan: "Ketua Kelas A",  nama: "Abyan Lukman Fauzan", kelas: "1A" },
    { jabatan: "Ketua Kelas B",  nama: "Fadhil Fathurahman", kelas: "1B" },
    { jabatan: "Ketua Kelas C",  nama: "Nama Lengkap", kelas: "1C" } ],
];


/* =====================================================
   DATA KEGIATAN (halaman kegiatan.html)
   tanggal   : teks bebas, mis. "12 Oktober 2026"
   kategori  : dipakai untuk chip filter (dibuat otomatis)
   judul     : nama kegiatan
   deskripsi : keterangan singkat
   link      : tautan dokumentasi (foto/Drive). Isi "" jika belum ada
   Kegiatan terbaru taruh paling atas.
   ===================================================== */
const KEGIATAN = [
  { tanggal: "Oktober 2026", kategori: "Kaderisasi", judul: "METASISKO 2026", deskripsi: "Deskripsi singkat kegiatan.", link: "https://www.instagram.com/metasisko_upi?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==" },
  { tanggal: "Oktober 2026", kategori: "Akademik",    judul: "Nama Kegiatan 2", deskripsi: "Deskripsi singkat kegiatan.", link: "" },
  { tanggal: "September 2026", kategori: "Kebersamaan", judul: "Nama Kegiatan 3", deskripsi: "Deskripsi singkat kegiatan.", link: "" },
];
