import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const radarIcon = L.divIcon({
  className: "",
  html: `
    <div class="radar-wrapper">
      <div class="radar-pulse"></div>
      <div class="radar-dot"></div>
    </div>
  `,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});





export default function MapSection() {
  const locations = [
    {
      name: "📍 My Location — Delhi",
      position: [28.6139, 77.2090],
      description: "Currently building scalable systems 🚀",
    },
  ];
 


return (
 <section
  style={{
    marginTop: "200px",
    padding: "0 100px",
    background: `
      radial-gradient(
        circle at 30% 30%,
        rgba(255, 119, 0, 0.08),
        transparent 40%
      ),
      radial-gradient(
        circle at 70% 60%,
        rgba(255, 119, 0, 0.05),
        transparent 50%
      ),
      #0a0a0a
    `,
  }}
>

  <div
    style={{
      display: "flex",
      gap: "100px",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexWrap: "wrap",
    }}
  >
      {/* ================= LEFT: CLOUD JOURNEY ================= */}
      <div style={{ flex: "1", minWidth: "320px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "40px",
            color: "white",
          }}
        >
          <span style={{ color: "#4805ff" }}>Cloud</span> Journey
        </h2>

        <div style={{ position: "relative", paddingLeft: "30px" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "10px",
              top: "0",
              bottom: "0",
              width: "2px",
              background: "rgba(255,119,0,0.3)",
            }}
          />

          {/* Timeline Items */}
          {[
            "Cleared AWS Solutions Architect Associate",
            "Dockerized Django Production Deployment",
            "Automated Infra using Terraform + Ansible",
            "Built CI/CD style deployment workflows",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "30px",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2px",
                  top: "6px",
                  width: "12px",
                  height: "12px",
                  background: "#ff7a18",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px #ff7a18",
                }}
              />

              <p
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  color: "white",
                  opacity: 0.8,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT: LIVE DEPLOYMENT ================= */}
      <div style={{ flex: "1", minWidth: "320px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "40px",
            color: "white",
          }}
        >
          <span style={{ color: "#ff7a18" }}>Current</span> Deployment
        </h2>

        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            background: "#0b0b0b",
            border: "1px solid rgba(255,119,0,0.15)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
            padding: "20px",
          }}
        >
          <MapContainer
            center={[28.6139, 77.2090]}
            zoom={10}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            <Marker position={[28.6139, 77.2090]} icon={radarIcon}>
              <Popup>
                <strong>📍 Currently Deployed — Delhi</strong>
                <br />
                Running cloud-native systems 🚀
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  </section>
);


}
