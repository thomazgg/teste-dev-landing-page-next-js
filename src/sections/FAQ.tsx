// sections/FAQ.tsx
export default function FAQ() {
  const faqs = [
    {
      question: "Como posso cadastrar meu armazém?",
      answer: "Basta clicar no botão 'Cadastre seu armazém' e preencher o formulário simples.",
    },
    {
      question: "O sistema tem suporte 24/7?",
      answer: "Sim, nosso suporte está disponível 24 horas por dia, 7 dias por semana.",
    },
    {
      question: "Posso acessar via celular?",
      answer: "Claro! O sistema é totalmente responsivo e funciona em qualquer dispositivo.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Perguntas frequentes</h2>
      <dl className="space-y-6">
        {faqs.map(({ question, answer }) => (
          <div key={question}>
            <dt className="font-semibold">{question}</dt>
            <dd className="mt-1 text-neutral-700">{answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}