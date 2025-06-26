// sections/Testmonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Esse sistema transformou a gestão do meu armazém, muito prático e confiável!",
    },
    {
      name: "Maria Oliveira",
      text: "O suporte é excelente e o controle ficou muito mais eficiente.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Depoimentos</h2>
      <div className="space-y-10">
        {testimonials.map(({ name, text }) => (
          <blockquote key={name} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic mb-4">"{text}"</p>
            <footer className="text-right font-semibold">- {name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}