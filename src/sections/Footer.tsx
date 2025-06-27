// src/sections/Footer.tsx
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import LinkBtnWhite from "@/components/ui/LinkBtnWhite/LinkBtnWhite";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  const pages = {
    aluguel: [
      { label: "Alugue um galpão", href: "/aluguel" },
      { label: "Dúvidas frequentes", href: "/faq" },
    ],
    locatarios: [
      { label: "Meus espaços", href: "/meus-espacos" },
      { label: "Solicitações pré-reserva", href: "/pre-reservas" },
    ],
    suporte: [
      { label: "Central de atendimento", href: "/atendimento" },
      { label: "Denuncie", href: "/denuncie" },
    ],
  };

  return (
    <footer className="py-40 bg-secondary-500 text-white z-10">
      {/* Logo centralizada */}
      <div className="flex justify-center w-auto h-[128px]">
        <Image
          src="/assets/Logo.svg"
          alt="Logo Basefortt"
          width={363}
          height={128}
          priority
        />
      </div>

      {/* Linha */}
      <div className="w-full h-[8px] bg-primary-100" />

      {/* Conteúdo principal */}
      <div className="container-large pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        {/* Redes sociais */}
        <div className="flex flex-1 justify-start gap-2">
          <Button size="md" variant="secondary" className="w-full sm:w-fit">
            <Facebook className="w-6 h-6" />
          </Button>
          <Button size="md" variant="secondary" className="w-full sm:w-fit">
            <Instagram className="w-6 h-6" />
          </Button>
          <Button size="md" variant="secondary" className="w-full sm:w-fit">
            <Linkedin className="w-6 h-6" />
          </Button>
        </div>

        {/* Links agrupados */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-1 flex-col w-[300px] gap-1">
            <strong className="mb-2">Aluguel</strong>
            {pages.aluguel.map((page) => (
              <LinkBtnWhite
                key={page.href}
                href={page.href}
                target="_self"
                text={page.label}
                className="opacity-80 hover:opacity-100"
              />
            ))}
          </div>

          <div className="flex flex-1 flex-col w-[300px] gap-1">
            <strong className="mb-2">Locatários</strong>
            {pages.locatarios.map((page) => (
              <LinkBtnWhite
                key={page.href}
                href={page.href}
                target="_self"
                text={page.label}
                className="opacity-80 hover:opacity-100"
              />
            ))}
          </div>

          <div className="flex flex-1 flex-col w-[300px] gap-1">
            <strong className="mb-2">Suporte</strong>
            {pages.suporte.map((page) => (
              <LinkBtnWhite
                key={page.href}
                href={page.href}
                target="_self"
                text={page.label}
                className="opacity-80 hover:opacity-100"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-end gap-3">
          <Button size="md" variant="primary" className="w-full sm:w-fit">
            <span>Anuncie seu galpão</span>
          </Button>
        </div>
      </div>

    </footer>
  );
}