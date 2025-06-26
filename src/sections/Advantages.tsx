import { PieChart, ChartLine, Wifi, Check, Lock } from "lucide-react";

const advantages = [
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Diminua a vacância física",
    description: "Destaque como o marketplace leva mais interessados ao seu armazém",
  },
  {
    icon: <ChartLine className="w-6 h-6" />,
    title: "Rentabilize seu espaço",
    description: "Explique como é possível gerar receita extra a partir de áreas ociosas.",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Maior alcance e visibilidade",
    description: "Divulgação online, presença em redes sociais e alcance de um público segmentado que realmente precisa de armazém.",
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Processo simplificado de pré-reserva",
    description: "O sistema cuida da parte burocrática inicial, permitindo que o proprietário negocie os detalhes com o cliente.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Suporte e segurança",
    description: "Menção a suporte em todas as etapas, desde o cadastro até a eventual negociação.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Vantagens</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {advantages.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            {icon}
            <h3 className="mt-4 mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}