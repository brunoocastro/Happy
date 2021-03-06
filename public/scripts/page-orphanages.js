// Create Map
const map = L.map("mapid").setView([-30.2548147, -54.9166064, 18.25], 16);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create Icons
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, lat, lng, name }) {
  // Create Popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" > </a>`
  );

  // Create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup).openPopup();
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");

orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMarker(orphanage);
});
