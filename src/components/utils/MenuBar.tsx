// src/components/utils/MenuBar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LinkBtnWhite from "@/components/ui/LinkBtnWhite/LinkBtnWhite";
import { pages } from "@/data/pages";

interface MenuBarProps {
  activePage?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ activePage }) => {
  return (
    <header className="container-large bg-secondary-500">
      <div className="relative flex items-center justify-between h-[120px]">
        {/* Esquerda */}
        <div className="flex md:flex-1 justify-start items-center gap-3">
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
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {pages.map((page) => (
            <LinkBtnWhite
              key={page.href}
              href={page.href}
              target="_self"
              text={page.label}
              className={`sb4 ${
                activePage === page.href ? "opacity-100" : "opacity-70"
              }`}
            />
          ))}
        </nav>

        {/* Direita */}
        <div className="hidden sm:flex md:flex-1 justify-end items-center gap-3">
          <Button size="md" variant="secondary" className="w-fit">
            <span>Anuncie seu galpão</span>
          </Button>
          <Button size="md" variant="inverset" className="w-fit">
            <span>Entrar na conta</span>
            <UserCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;