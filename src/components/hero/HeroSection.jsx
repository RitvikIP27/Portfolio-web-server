import "./hero.css";
import LeftContent from "./LeftContent";
import RightVisual from "./RightVisual";
import Stat from "./Stat";
import StatsBar from "./Statsbar.jsx"

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-main">
          <LeftContent />
          <RightVisual />
        </div>

        <StatsBar />

      </div>

      {/* floating orbit stats */}
      <Stat label="99.9%" text="Uptime" className="stat-uptime" />
      <Stat label="100%" text="Secure" className="stat-secure" />
      <Stat label="50+" text="Projects" className="stat-projects" />

    </section>
  );
}
