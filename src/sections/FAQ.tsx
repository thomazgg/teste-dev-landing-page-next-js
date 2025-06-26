// File: src/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { Plus, Minus, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "Há algum custo para anunciar?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "Como é feita a pré-reserva?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "Como recebo o pagamento?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "É seguro alugar para qualquer tipo de mercadoria?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "Preciso de um contrato físico?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Abre o primeiro por padrão

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="container-large py-40 bg-gray-100 bg-[url('/assets/faq.svg')] bg-no-repeat bg-left-bottom">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Coluna Esquerda */}
        <div>
          <h2 className="text-secondary-500">Perguntas frequentes</h2>
          <p className="r4 text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Button size="md" variant="outline" className="w-full sm:w-fit mt-4">
            <span>Fale com o suporte</span>
            <HeartHandshake className="w-5 h-5" />
          </Button>
        </div>

        {/* Coluna Direita - Accordion */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-primary-500 pb-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="sb4 text-secondary-500">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-secondary-500" />
                ) : (
                  <Plus className="w-6 h-6 text-secondary-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="r4 text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}