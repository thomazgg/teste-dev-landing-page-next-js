// src/components/form/FormField.tsx
import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, required = false, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="sb4 text-secondary-500">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={ref}
          required={required}
          className={cn(
            'p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;