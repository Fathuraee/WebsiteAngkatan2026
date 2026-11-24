/* =====================================================
   KEGIATAN – daftar kegiatan + filter kategori
   Dipakai di kegiatan.html. Data ada di data.js (KEGIATAN).
   ===================================================== */

const daftarKegiatan = document.getElementById("daftarKegiatan");
const filterKategori = document.getElementById("filterKategori");
let kategoriAktif = "Semua";

function kartuKegiatan(k) {
  const aksi = k.link
    ? `<a href="${k.link}" target="_blank" rel="noopener" class="text-sm font-semibold mt-3 inline-block text-navy">Lihat dokumentasi →</a>`
    : "";

  return `
    <article class="card">
      <span class="text-xs font-semibold text-accent">${k.kategori} · ${k.tanggal}</span>
      <h3 class="font-bold mt-2">${k.judul}</h3>
      <p class="text-sm mt-1 text-mute">${k.deskripsi}</p>
      ${aksi}
    </article>`;
}

function tampilkanKegiatan() {
  const hasil = KEGIATAN.filter(k => kategoriAktif === "Semua" || k.kategori === kategoriAktif);
  daftarKegiatan.innerHTML = hasil.map(kartuKegiatan).join("");
}

const semuaKategori = ["Semua", ...new Set(KEGIATAN.map(k => k.kategori))];
filterKategori.innerHTML = semuaKategori
  .map(k => `<button class="chip${k === kategoriAktif ? " aktif" : ""}" data-kat="${k}">${k}</button>`)
  .join("");

filterKategori.onclick = e => {
  const kat = e.target.dataset.kat;
  if (!kat) return;
  kategoriAktif = kat;
  [...filterKategori.children].forEach(b => b.classList.toggle("aktif", b.dataset.kat === kat));
  tampilkanKegiatan();
};

tampilkanKegiatan();
