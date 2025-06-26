// src/components/form/WarehouseForm.tsx
'use client';

import FormField from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';

export default function WarehouseForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <FormField
          label="Nome completo"
          placeholder="Digite seu nome completo"
          type="text"
          required
        />
      </div>

      <div className="col-span-2 md:col-span-1">
        <FormField
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          required
        />
      </div>

      <div className="col-span-2 md:col-span-1">
        <FormField
          label="Telefone"
          placeholder="+55 (00) 00000-0000"
          type="tel"
          required
        />
      </div>

      <div className="col-span-2 md:col-span-1">
        <FormField
          label="Tamanho do armazém"
          placeholder="500 a 1.000 m²"
          type="text"
          required
        />
      </div>

      <div className="col-span-2">
        <FormField
          label="Localização do armazém"
          placeholder="Endereço"
          type="text"
          required
        />
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
  );
}