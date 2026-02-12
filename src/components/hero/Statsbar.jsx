export default function StatsBar() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Deployments" },
    { value: "10+", label: "Certifications" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <h3>{s.value}</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
