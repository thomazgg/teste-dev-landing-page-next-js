// File: src/sections/Advantages.tsx
import { PieChart, ChartLine, Wifi, Check, Lock } from "lucide-react";

const advantages = [
  {
    icon: PieChart,
    title: "Diminua a vacância física",
    description:
      "Destaque como o marketplace leva mais interessados ao seu armazém",
  },
  {
    icon: ChartLine,
    title: "Rentabilize seu espaço",
    description:
      "Explique como é possível gerar receita extra a partir de áreas ociosas.",
  },
  {
    icon: Wifi,
    title: "Maior alcance e visibilidade",
    description:
      "Divulgação online, presença em redes sociais e alcance de um público segmentado que realmente precisa de armazém.",
  },
  {
    icon: Check,
    title: "Processo simplificado de pré-reserva",
    description:
      "O sistema cuida da parte burocrática inicial, permitindo que o proprietário negocie os detalhes com o cliente.",
  },
  {
    icon: Lock,
    title: "Suporte e segurança",
    description:
      "Menção a suporte em todas as etapas, desde o cadastro até a eventual negociação.",
  },
];

export default function Advantages() {
  return (
    <section className="container-large py-40 bg-gray-100">
      <h2 className="text-center text-secondary-500 mb-10">Vantagens</h2>
      <div className="flex flex-wrap gap-10">
        {advantages.map(({ icon: Icon, title, description }, i) => (
          <div key={i} className="flex flex-col flex-1 w-full sm:min-w-[420px] p-8 bg-white rounded-2xl">
            <Icon className="w-8 h-8 text-primary-500" />
            <p className="sb4 text-primary-500 mt-2">{title}</p>
            <p className="r4 text-gray-800 mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}