const socket = io(); // initialize socket.io

const map = L.map("map").setView([0, 0], 16); // Initialize map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Location Tracker",
}).addTo(map);

const markers = {};

// Create custom Nobita icon
const nobitaIcon = L.icon({
  iconUrl: '/images/image.png', // path to your icon
  iconSize: [40, 40], // size of the icon
  iconAnchor: [30, 40], // point of the icon which will correspond to marker's location
});

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
      map.setView([latitude, longitude]); // Move map to your current location
    },
    (error) => {
      console.log("Error getting location: ", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    const marker = L.marker([latitude, longitude], { icon: nobitaIcon }).addTo(map);
    markers[id] = marker;
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
