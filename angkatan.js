/* =====================================================
   ANGKATAN – statistik di Beranda
   Data ada di data.js (STATISTIK).
   ===================================================== */

document.getElementById("statistik").innerHTML = STATISTIK.map(s => `
  <div class="card">
    <div class="hd text-3xl font-extrabold text-navy">${s.angka}</div>
    <p class="text-sm mt-1 text-mute">${s.label}</p>
  </div>`).join("");
