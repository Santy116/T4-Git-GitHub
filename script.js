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

  function simpanCatatan() {
    const input = document.getElementById("noteInput");
    const mood = document.getElementById("moodSelect").value;
    const catatan = input.value.trim();
  
    if (catatan) {
      const list = document.getElementById("catatanContainer");
      const item = document.createElement("li");
      item.textContent = `${mood} ${catatan}`;
      list.prepend(item);
      input.value = "";
    } else {
      alert("Tolong isi catatan terlebih dahulu 💌");
    }
  }
  function filterCatatan() {
    const filterValue = document.getElementById("filterMood").value;
    const items = document.querySelectorAll("#catatanContainer li");
  
    items.forEach((item) => {
      if (filterValue === "semua" || item.textContent.startsWith(filterValue)) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });
  }
  document.addEventListener("DOMContentLoaded", () => {

    const ucapanList = [
      "Kamu hebat! 🌟",
      "Semangat yaa, hari ini milikmu! ✨",
      "Satu langkah kecil tetap berarti 💖",
      "Tetap bersinar meski hari mendung 🌧️☀️",
      "Bangga banget sama kamu 🫶"
    ];
  
    const randomUcapan = ucapanList[Math.floor(Math.random() * ucapanList.length)];
    document.getElementById("ucapanSemangat").textContent = randomUcapan;
  });
  
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      document.body.classList.add("dark");
      document.getElementById("darkToggle").checked = true;
    }
  
  });
  
  
  