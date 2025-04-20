document.addEventListener("DOMContentLoaded", () => {
    const tanggal = new Date();
    const format = tanggal.toLocaleDateString("id-ID", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById("tanggalHariIni").textContent = `📅 ${format}`;
  });