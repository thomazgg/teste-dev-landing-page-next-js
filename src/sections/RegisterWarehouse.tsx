// File: src/sections/RegisterWarehouse.tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import WarehouseForm from "@/components/form/WarehouseForm";

export default function RegisterWarehouse() {
  return (
    <section className="relative bg-secondary-500">
      {/* Conteúdo sobreposto */}
      <div className="container-large relative flex flex-col lg:flex-row gap-12 py-40 z-10">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-white">Cadastre seu armazém</h2>
          <p className="m4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Coluna Direita: Formulário */}
        <div className="bg-white p-8 rounded-2xl w-full">
          <WarehouseForm />
        </div>
      </div>

      {/* Container */}
      <div className="container-large relative z-10">
        <div className="flex flex-col md:flex-row bg-primary-500 gap-10 p-8 md:p-20 rounded-2xl w-full bg-[url('/assets/register.svg')] bg-no-repeat bg-right-top">
          {/* Coluna Esquerda: Texto */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-secondary-500">Cadastre-se agora e diminua sua vacância física</h1>
            <p className="m3 md:m1 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Coluna Direita: Botão */}
          <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
            <Button size="lg" variant="secondary" className="w-full md:w-fit">
              <span>Anunciar Meu Armazém</span>
            </Button>
            <Button size="lg" variant="gray" className="w-full md:w-fit">
              <span> Saiba mais</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Imagem no canto inferior esquerdo */}
      <div className="absolute top-[420px] left-0 w-full h-full z-0">
        <Image
          src="/images/register-image.png"
          alt="Armazém"
          height={674}
          width={1920}
          objectFit="cover"
        />
      </div>
    </section>
  );
}