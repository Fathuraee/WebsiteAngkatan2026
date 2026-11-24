
const NAV = [
  { label: "Beranda",  href: "index.html",    halaman: "beranda"  },
  { label: "Materi",   href: "materi.html",   halaman: "materi"   },
  { label: "Kegiatan", href: "kegiatan.html", halaman: "kegiatan" },
  { label: "Struktur", href: "struktur.html", halaman: "struktur" },
  { label: "Recruitment",   href: "https://docs.google.com/forms/d/e/1FAIpQLSfle0mIhOqHvdMBCdf5nGhLQl5J9gQ-C8gqy7X2GldScg41tw/viewform?usp=header",   halaman: "recruitment"   }
];

function pasangLayout() {
  const halamanIni = document.body.dataset.halaman;

  const menu = NAV.map(n => {
    const aktif = n.halaman && n.halaman === halamanIni;
    return `<a href="${n.href}" class="${aktif ? "text-navy font-semibold" : ""}">${n.label}</a>`;
  }).join("");

  document.getElementById("navbar").innerHTML = `
    <header>
      <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <a href="index.html" class="flex items-center gap-2 hd font-extrabold tracking-widest text-navy">
          <img src="img/logo-emblem.jpg" alt="" class="logo-tile h-9 w-9 p-1 object-contain">
          ORCAVALA
        </a>
        <nav class="flex gap-4 text-sm overflow-x-auto text-mute">${menu}</nav>
        <button id="theme" class="chip" aria-label="Ganti tema">◐</button>
      </div>
    </header>`;

  document.getElementById("footer").innerHTML = `
    <footer class="max-w-6xl mx-auto px-4 py-10 text-center text-sm text-mute">
      <p class="hd font-bold tracking-widest text-navy">ORCAVALA</p>
      <p class="mt-1">Origin of ’26 Telecom: Advanced Vision and Linked Antennas</p>
      <p class="mt-3">© 2026 Angkatan 2026 · Sistem Telekomunikasi</p>
    </footer>`;

  // Tombol tema terang / gelap
  const root = document.documentElement;
  document.getElementById("theme").onclick = () => {
    const sedangGelap = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = sedangGelap ? "light" : "dark";
  };
}

pasangLayout();
