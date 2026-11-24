/* =====================================================
   STRUKTUR – organigram
   Dipakai di struktur.html. Data ada di data.js (ORGANIGRAM).
   ===================================================== */

// Inisial nama untuk avatar bulat, mis. "Nama Lengkap" → "NL"
const inisial = nama => nama.split(" ").slice(0, 2).map(k => k[0]).join("").toUpperCase();

function kartuOrang(p) {
  return `
    <div class="card org-card">
      <div class="avatar">${inisial(p.nama)}</div>
      <p class="text-xs font-semibold text-accent">${p.jabatan}</p>
      <p class="font-bold">${p.nama}</p>
      <p class="text-sm text-mute">Kelas ${p.kelas}</p>
    </div>`;
}

// Satu baris tingkat = satu <div class="org-level">
document.getElementById("organigram").innerHTML = ORGANIGRAM
  .map(tingkat => `<div class="org-level">${tingkat.map(kartuOrang).join("")}</div>`)
  .join("");
