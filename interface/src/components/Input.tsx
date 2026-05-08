import { useId, type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  icon?: ReactNode;
  label?: string;
  error?: string;
  hasError?: boolean;
  id?: string;
}

const Input = ({
  icon,
  fullWidth,
  label,
  error,
  hasError,
  id,
  className,
  ...rest
}: InputProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const isInvalid = error || hasError;

  return (
    <div className={`${fullWidth ? "w-full" : ""} mb-4`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-50 mb-2"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          className={`block w-full rounded-xl border ${isInvalid ? "border-red-500" : "border-gray-700"}
          bg-gray-800 px-4 py-3 text-sm text-gray-50 
          transition-all focus:outline-none focus:ring-2
          ${isInvalid ? "focus:border-red-500 focus:ring-red-500/50" : "focus:border-primary-500 focus:ring-primary-500/50"}
          ${icon ? "pl-10" : ""}
          ${className || ""}
          `}
          {...rest}
        />
      </div>
      {error && typeof error === "string" && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
