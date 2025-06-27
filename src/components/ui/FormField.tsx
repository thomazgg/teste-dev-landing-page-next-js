// File: src/components/ui/FormField.tsx
import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string; // opcional, para o input e label
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1 relative">
        <label htmlFor={inputId} className="sb4 text-secondary-500">
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'p-2 rounded border',
            error ? 'border-red-500' : 'border-gray-300',
            className
          )}
          {...props}
        />
        {error && (
          <span
            id={errorId}
            role="alert"
            className="r6 text-red-500 mt-1"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
export default FormField;