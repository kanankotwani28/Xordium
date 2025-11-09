export default function Section({ children, className = "" }) {
  return (
    <section className={`w-full h-screen ${className}`}>{children}</section>
  );
}
