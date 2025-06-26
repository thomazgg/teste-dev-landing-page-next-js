// sections/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    "Cadastre seu armazém em poucos minutos",
    "Organize e monitore os produtos facilmente",
    "Receba notificações e relatórios em tempo real",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Como funciona?</h2>
      <ol className="list-decimal list-inside space-y-6 text-lg max-w-xl mx-auto">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>
  );
}