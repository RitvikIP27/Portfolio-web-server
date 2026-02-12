export default function Stat({ label, text, className }) {
  return (
    <div className={`stat ${className}`}>
      <strong>{label}</strong>
      <span>{text}</span>
    </div>
  );
}
