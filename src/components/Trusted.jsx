export default function Trusted() {
  const logos = [
    "Acme Corp",
    "Echo Valley",
    "Quantum",
    "PULSE",
    "Outside",
    "APEX",
    "Celestial",
    "2TWICE",
  ];
  return (
    <div className="mt-10">
      <p className="text-center text-sm text-gray-400">
        Trusted by the world's most innovative teams
      </p>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-8 gap-4 items-center opacity-80 text-xs text-gray-200">
        {logos.map((l) => (
          <div
            key={l}
            className="py-3 px-2 border border-white/5 rounded-md text-center"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
