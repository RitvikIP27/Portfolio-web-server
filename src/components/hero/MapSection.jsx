import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet default marker issue
const markerIcon = new L.Icon({
  iconUrl:
    "src/assets/flagmarker-removebg-preview.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapSection() {
  // Sample India locations
  const locations = [
    {
      name: "Delhi",
      position: [28.6139, 77.2090],
      description: "Capital of India.",
    },
    {
      name: "Vishakhapatnam",
      position: [83.2185, 17.6868],
      description: "One of India's biggest ship manufacturer.",
    },
    {
      name: "Hyderabad",
      position: [17.3850, 78.4867],
      description: "HeadQuarters of Meteorite labs.",
    },
  ];

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
     <h2
  style={{
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "20px",
    fontFamily: "Inter, sans-serif",
    color: "#0f172a",
    letterSpacing: "-0.5px",
  }}
>
  Explore India on Map
</h2>


      <MapContainer
        center={[45, 10]}   // center of Norway
        zoom={10}
        style={{ height: "200px", width: "100%", borderRadius: "12px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {locations.map((loc, i) => (
          <Marker key={i} position={loc.position} icon={markerIcon}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
