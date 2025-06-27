// File: src/components/ui/FormSelect.tsx
import React, { useId } from 'react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  id?: string;
  register?: any;
}

export default function FormSelect({
  label,
  error,
  options,
  register,
  id,
  ...props
}: FormSelectProps) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const errorId = `${selectId}-error`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={selectId} className="sb4 text-secondary-500">
        {label}
      </label>
      <select
        id={selectId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...(register ?? {})}
        {...props}
        className={`p-2 rounded border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <span id={errorId} role="alert" className="r6 text-red-500 text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
}