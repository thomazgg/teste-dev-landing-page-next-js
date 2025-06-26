// File: src/sections/Stats.tsx
export default function Stats() {
  const stats = [
    { label: "Armazéns cadastrados", value: "+5384" },
    { label: "Check-ins", value: "+4268" },
    { label: "Armazéns ocupados", value: "%85" },
  ];

  return (
    <section className="relative container-large py-40 bg-white text-center">
      <h2 className="text-center text-secondary-500 mb-10">Nossos números</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {stats.map(({ label, value }) => (
          <div key={label} className="flex flex-col flex-1">
            <h2 className="text-primary-500">{value}</h2>
            <p className="m3 mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Linha no fundo */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-color-gradient-1" />
    </section>
  );
}