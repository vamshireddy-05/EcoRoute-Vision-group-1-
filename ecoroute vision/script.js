document.getElementById("routeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  alert(`Finding eco route from ${start} to ${end}...`);
});

window.onload = function () {
  const map = L.map('map').setView([15.9129, 79.74], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
};
