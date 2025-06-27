// File: src/components/form/WarehouseForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Message } from '@/components/ui/Message';
import FormField from '@/components/ui/FormField';
import FormSelect from '@/components/ui/FormSelect';
import FormCheckbox from '@/components/ui/FormCheckbox';

const warehouseSchema = z.object({
  name: z.string().min(3, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().regex(/^\+55 \(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  size: z.string().min(1, 'Tamanho obrigatório'),
  location: z.string().min(1, 'Localização obrigatória'),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'Você deve aceitar os termos.' }),
  }),
});

type WarehouseData = z.infer<typeof warehouseSchema>;

export default function WarehouseForm() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WarehouseData>({
    resolver: zodResolver(warehouseSchema),
  });

  const onSubmit = (data: WarehouseData) => {
    console.log('Dados enviados:', data);
    setMessageContent('Cadastro enviado com sucesso!');
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
    reset();
  };

  return (
    <>
      <Message show={showMessage} message={messageContent} />

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <FormField
            id="name"
            label="Nome completo"
            placeholder="Digite seu nome completo"
            {...register('name')}
            error={errors.name?.message}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <FormField
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            {...register('email')}
            error={errors.email?.message}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <FormField
            id="phone"
            label="Telefone"
            type="tel"
            placeholder="+55 (00) 00000-0000"
            {...register('phone')}
            error={errors.phone?.message}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <FormSelect
            id="size"
            label="Tamanho do armazém"
            options={[
              { value: '-500', label: 'Até 500 m²' },
              { value: '500-1000', label: '500 a 1.000 m²' },
              { value: '1000-2000', label: '1.000 a 2.000 m²' },
              { value: '2000+', label: 'Mais de 2.000 m²' },
            ]}
            {...register('size')}
            error={errors.size?.message}
          />
        </div>

        <div className="col-span-2">
          <FormField
            id="location"
            label="Localização do armazém"
            placeholder="Endereço"
            {...register('location')}
            error={errors.location?.message}
          />
        </div>

        <div className="col-span-2 flex items-center gap-2 text-xs text-gray-600">
          <FormCheckbox
            id="terms"
            label="Aceito os Termos de Condições e Política de Privacidade."
            {...register('terms')}
            error={errors.terms?.message}
          />
        </div>

        <div className="flex justify-end col-span-2">
          <Button type="submit" size="md" variant="primary" className="w-full sm:w-auto mt-4">
            Receber mais informações
          </Button>
        </div>
      </form>
    </>
  );
}