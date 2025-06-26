// sections/Stats.tsx
export default function Stats() {
  const stats = [
    { label: "Armazéns cadastrados", value: 120 },
    { label: "Produtos gerenciados", value: 4500 },
    { label: "Usuários ativos", value: 890 },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Nossos números</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {stats.map(({ label, value }) => (
          <div key={label} className="min-w-[150px]">
            <p className="text-4xl font-extrabold text-blue-600">{value}</p>
            <p className="mt-2 text-lg font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}