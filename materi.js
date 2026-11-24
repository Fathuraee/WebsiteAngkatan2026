/* =====================================================
   MATERI – pencarian + filter semester
   Dipakai di materi.html. Data ada di data.js (MATERI).
   ===================================================== */

const daftarKartu  = document.getElementById("grid");
const kolomCari    = document.getElementById("q");
const wadahFilter  = document.getElementById("filters");
const pesanKosong  = document.getElementById("empty");

let semesterAktif = "Semua";

// Satu kartu mata kuliah
function kartuMateri(m) {
  const punyaLink = Boolean(m.link);
  const atribut   = punyaLink ? 'target="_blank" rel="noopener"' : "";
  const teksAksi  = punyaLink ? "Buka materi →" : "Materi segera hadir";
  const warnaAksi = punyaLink ? "text-navy" : "text-mute";

  return `
    <a href="${m.link || "#materi"}" ${atribut} class="card card-link">
      <span class="text-xs font-semibold text-accent">${m.kode} · ${m.sem}</span>
      <h3 class="font-bold mt-2">${m.mk}</h3>
      <p class="text-sm mt-1 text-mute">${m.catatan || ""}</p>
      <span class="text-sm font-semibold mt-3 inline-block ${warnaAksi}">${teksAksi}</span>
    </a>`;
}

// Tampilkan kartu sesuai pencarian + semester terpilih
function tampilkanMateri() {
  const kataKunci = kolomCari.value.trim().toLowerCase();

  const hasil = MATERI.filter(m => {
    const cocokSemester = semesterAktif === "Semua" || m.sem === semesterAktif;
    const cocokKata     = `${m.mk} ${m.kode}`.toLowerCase().includes(kataKunci);
    return cocokSemester && cocokKata;
  });

  daftarKartu.innerHTML = hasil.map(kartuMateri).join("");
  pesanKosong.classList.toggle("hidden", hasil.length > 0);
}

// Buat chip filter dari daftar semester di data.js
function buatFilter() {
  const semua = ["Semua", ...new Set(MATERI.map(m => m.sem))];

  wadahFilter.innerHTML = semua
    .map(s => `<button class="chip${s === semesterAktif ? " aktif" : ""}" data-sem="${s}">${s}</button>`)
    .join("");

  wadahFilter.onclick = e => {
    const sem = e.target.dataset.sem;
    if (!sem) return;
    semesterAktif = sem;
    [...wadahFilter.children].forEach(b => b.classList.toggle("aktif", b.dataset.sem === sem));
    tampilkanMateri();
  };
}

kolomCari.oninput = tampilkanMateri;
buatFilter();
tampilkanMateri();


