export default function LeftContent() {
  return (
    <div className="left">
      <h1>
        Yo, it's <span className="accent">Ritvik</span>
      </h1>

      <p>
        I architect scalable cloud solutions, automate deployments,
        and build resilient infrastructure for modern applications.
      </p>

      <div className="buttons">
        <button className="primary">VMy Works</button>
        <button className="secondary">Download CV</button>
      </div>

      <div className="skills">
        {["AWS","Kubernetes","Jenkins CI","Docker","Terraform","ArgoCD","Github Actions"].map(s => (
          <div className="skill" key={s}>{s}</div>
        ))}
      </div>
    </div>
  );
}
