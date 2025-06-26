// sections/Hero.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex bg-background w-full h-[950px]">
      {/* Texto */}
      <div className="w-1/2 h-full flex flex-col justify-center p-32">
        <h1 className="text-secondary-500">
          Anuncie seu armazém e diminua sua vacância física
        </h1>
        <p className="r1 mt-1">
          Conecte-se com milhares de empresas que buscam espaço de armazenagem
          e aumente a rentabilidade do seu imóvel.
        </p>
        <Button size="md" variant="primary" className="w-full md:w-fit mt-4">
          <span>Cadastre seu armazém</span>
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Imagem */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/hero-image.png"
          alt="Armazém"
          fill
          className="object-cover"
        />
      </div>
    </section>

  );
}