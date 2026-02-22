import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ================= RADAR ICON ================= */

const radarIcon = L.divIcon({
  className: "",
  html: `
    <div class="radar-wrapper">
      <div class="radar-pulse"></div>
      <div class="radar-dot"></div>
    </div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

/* ================= COMPONENT ================= */

export default function MapSection() {
  const systemStatus = [
    {
      title: "Status",
      value: "Active Node • Seeking Placements",
    },
    {
      title: "Current Primary Task",
      value:
        "Architecting infrastructure for an AI sports talent scouting app",
    },
    {
      title: "System Uptime",
      value: "3rd Year B.Tech • Production Mode",
    },
    {
      title: "Core Dependencies",
      value: "Linux • Bash • Git • Docker • AWS",
    },
    {
      title: "Recent Commits",
      value:
        "Prepping Data Structures, Algorithms & core CS subjects",
    },
  ];

  return (
    <section
      style={{
        padding: "140px 80px",
      }}
    >
      {/* MASTER GLASS CARD */}
      <div
        style={{
          width: "90%",
          margin: "0 auto",

          padding: "60px",
          borderRadius: "32px",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,122,24,0.18)",
          boxShadow: "0 30px 100px rgba(0,0,0,0.6)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "120px",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* ================= LEFT: SYSTEM STATUS ================= */}
          <div style={{ flex: "1", minWidth: "320px" }}>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                marginBottom: "40px",
                color: "white",
              }}
            >
              <span style={{ color: "#ff7a18" }}>System</span> Status
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
                  background: "rgba(255,122,24,0.3)",
                }}
              />

              {systemStatus.map((item, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "35px", position: "relative" }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-2px",
                      top: "8px",
                      width: "12px",
                      height: "12px",
                      background: "#ff7a18",
                      borderRadius: "50%",
                      boxShadow: "0 0 12px #ff7a18",
                    }}
                  />

                  <div style={{ paddingLeft: "20px" }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#ff7a18",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </p>

                    <p
                      style={{
                        margin: "6px 0 0 0",
                        color: "white",
                        opacity: 0.85,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT: LIVE DEPLOYMENT ================= */}
          <div style={{ flex: "1", minWidth: "320px" }}>
            <h2
              style={{
                fontSize: "40px",
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
                border: "1px solid rgba(255,122,24,0.15)",
              }}
            >
              {/* Mini Status Bar */}
              <div
                style={{
                  padding: "12px 18px",
                  fontSize: "13px",
                  display: "flex",
                  justifyContent: "space-between",
                  background: "rgba(20,20,20,0.6)",
                  color: "#ff7a18",
                  letterSpacing: "1px",
                }}
              >
                <span>REGION: ap-south-1</span>
                <span>STATUS: RUNNING</span>
              </div>

              <MapContainer
                center={[28.6139, 77.2090]}
                zoom={10}
                style={{ height: "380px", width: "100%" }}
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
      </div>
    </section>
  );
}
