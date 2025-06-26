// File: src/sections/HowItWorks.tsx
import { CheckSquare, MessageSquare, CheckCircle, Award } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckSquare,
      title: "Crie sua conta",
      description: "Informações básicas (nome, e-mail, telefone, dados da empresa)",
    },
    {
      icon: MessageSquare,
      title: "Descreva seu armazém",
      description: "Insira localização, características, capacidade e valor por posição-palete/movimento.",
    },
    {
      icon: CheckCircle,
      title: "Receba pré-reservas",
      description: "Os clientes enviam solicitações conforme períodos e especificações do armazém desejado.",
    },
    {
      icon: Award,
      title: "Negocie e feche contrato",
      description: "Proprietário e cliente entram em contato para definir detalhes (contrato, valores adicionais etc.).",
    },
  ];

  return (
    <section className="container-large py-40">
      <h2 className="text-secondary-500 mb-20">Como funciona?</h2>

      <div className="relative flex flex-col md:flex-row justify-between text-center">

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center px-5 mb-20 lg:mb-0 flex-1 relative z-10"
            >
              <div className="absolute top-[68px] left-0 right-0 block h-0.5 bg-primary-500 z-0" />
              <Icon className="w-10 h-10 text-secondary-500 mb-5" />
              <div className="w-5 h-5 bg-primary-500 rounded-full mb-5" />
              <h3 className="sb3 mb-2 text-secondary-500">{step.title}</h3>
              <p className="r4 text-gray-800">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <Button size="md" variant="primary" className="w-full md:w-fit mt-4">
          <span>Cadastre seu armazém</span>
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}