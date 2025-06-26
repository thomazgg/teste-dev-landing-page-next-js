// File: src/sections/RegisterWarehouse.tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
        <div className="bg-white text-black p-8 rounded-2xl w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="sb4 text-secondary-500">Nome completo</label>
              <input type="text" placeholder="Nome Sobrenome" className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label className="sb4 text-secondary-500">E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label className="sb4 text-secondary-500">Telefone</label>
              <input type="tel" placeholder="+55 (00) 00000-0000" className="p-2 rounded border" />
            </div>

            <div className="flex flex-col">
              <label className="sb4 text-secondary-500">Tamanho do armazém</label>
              <input type="text" placeholder="500 a 1.000 m²" className="p-2 rounded border" />
            </div>

            <div className="col-span-2 flex flex-col">
              <label className="sb4 text-secondary-500">Localização do armazém</label>
              <input type="text" placeholder="Endereço" className="p-2 rounded border" />
            </div>

            <div className="col-span-2 flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" required />
              <span>
                Aceito os Termos de Condições e Política de Privacidade. Suas informações são confidenciais.
              </span>
            </div>

            <div className="flex justify-end col-span-2">
              <Button size="md" variant="primary" className="w-full sm:w-fit mt-4">
                <span>Receber mais informações</span>
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Container */}
      <div className="container-large relative z-10">
        <div className="flex flex-row bg-primary-500 p-20 rounded-2xl w-full bg-[url('/assets/register.svg')] bg-no-repeat bg-right-top">
          {/* Coluna Esquerda: Texto */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-secondary-500">Cadastre-se agora e diminua sua vacância física</h1>
            <p className="m1 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Coluna Direita: Botão */}
          <div className="flex flex-row gap-4 w-full items-center justify-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-fit">
              <span>Anunciar Meu Armazém</span>
            </Button>
            <Button size="lg" variant="gray" className="w-full sm:w-fit">
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