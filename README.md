# 🗺️ Real-Time Location Tracker with Nobita Icon

This is a real-time location tracking web app built using **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**. It displays your live location on an interactive map with a **custom Nobita icon**.

---

## 🚀 Features

- 🔴 Live location tracking using browser geolocation
- 📍 Custom Nobita icon as a location marker
- 🗺️ Interactive map powered by OpenStreetMap via Leaflet
- 🔌 Real-time updates using Socket.IO
- ✅ Auto-center map to your location on load

---


---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js
- **Map Tile Provider:** OpenStreetMap

---

## 📦 Installation

### 1. Clone the repository

git clone https://github.com/your-username/TrackNobi.git


### 2. Install dependencies


npm install


### 3. Add the Nobita image

Place a PNG of Nobita in `public/images/` named exactly:


public/images/nobita.png



### 4. Run the server


node app.js


Server will run at:


http://localhost:3500


---

## 🌍 How it Works

* On visiting the site, your browser requests your geolocation.
* Your coordinates are sent via Socket.IO to the server.
* Server emits your coordinates back (only to you).
* Leaflet centers the map to your location and places a **Nobita icon** there.

---

## 📸 Screenshot

<img width="1440" height="813" alt="Screenshot 2025-07-28 at 12 42 55 AM" src="https://github.com/user-attachments/assets/6f08bf01-c488-4240-b1b2-41f4176cb12d" />


---

## 📎 Dependencies

* express
* socket.io
* ejs
* leaflet.js

---

## 💡 Future Enhancements

* Show all users' locations (multi-user tracking)
* Add user popups with names
* Display movement trails
* Share location with a unique link

---


## 📜 License

This project is licensed under the [MIT License](LICENSE).



