// src/components/utils/MenuBar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LinkBtnWhite from "@/components/ui/LinkBtnWhite/LinkBtnWhite";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const MenuBar: React.FC = () => {
  return (
    <header className="container-large flex flex-col justify-center w-full h-[120px] bg-secondary-500">
      <div className="relative flex items-center justify-between lg:justify-center">
        {/* Esquerda */}
        <div className="flex flex-1 justify-start items-center gap-3">
          <Link href="/" className="block w-full h-[48px] relative">
            <Image
              src="/assets/Logo.svg"
              alt="Logo Basefortt"
              width={136}
              height={48}
              priority
            />
          </Link>
        </div>

        {/* Centro */}
        <div className="flex flex-1 justify-center items-center gap-10">
          <Link href="/">
            <LinkBtnWhite text="Home" className="sb4" />
          </Link>
          <Link href="/sobre">
            <LinkBtnWhite text="Sobre" className="sb4" />
          </Link>
          <Link href="/servicos">
            <LinkBtnWhite text="Serviços" className="sb4" />
          </Link>
          <Link href="/contato" target="_blank">
            <LinkBtnWhite text="Contato" className="sb4" />
          </Link>
        </div>

        {/* Direita */}
        <div className="flex flex-1 justify-end items-center gap-3">
          <Button size="md" variant="primary" className="w-full md:w-fit">
            <span>Anuncie seu galpão</span>
          </Button>
          <Button size="md" variant="inverset" className="w-full md:w-fit">
            <span>Entrar na conta</span>
            <UserCircle className="w-6 h-6" />
          </Button>
        </div>

      </div>
    </header>
  );
};

export default MenuBar;