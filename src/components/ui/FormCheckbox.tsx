// File: src/components/ui/FormCheckbox.tsx
import React, { useId } from 'react';

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
  register?: any;
}

export default function FormCheckbox({
  label,
  error,
  id,
  register,
  ...props
}: FormCheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const errorId = `${checkboxId}-error`;

  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={checkboxId} className="flex items-center gap-2 cursor-pointer">
        <input
          id={checkboxId}
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-5 h-5 border border-gray-400 rounded-sm"
          {...(register ?? {})}
          {...props}
        />
        <span className="r6 text-gray-500">{label}</span>
      </label>
      {error && (
        <span id={errorId} role="alert" className="r6 text-red-500 absolute -bottom-5">
          {error}
        </span>
      )}
    </div>
  );
}