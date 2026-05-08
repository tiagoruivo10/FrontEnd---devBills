import { ChevronDown } from "lucide-react";
import { useId, type ReactNode, type SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hasError?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
  options: SelectOption[];
}

const Select = ({
  label,
  options,
  icon,
  error,
  hasError,
  fullWidth = true,
  className = "",
  id,
  ...rest
}: SelectProps) => {
  const selectId = useId();

  const isInvalid = error || hasError;

  return (
    <div className={`${fullWidth ? "w-full" : ""} mb-4`}>
      {label && (
        <label
          htmlFor={selectId}
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

        <select
          id={selectId}
          {...rest}
          className={`block w-full bg-gray-800 py-3 pl-10 pr-4 rounded-xl text-gray-50 text-sm border transition-all outline-none appearance-none
          ${isInvalid ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50" : "border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50"} 
          ${className}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-50" />
        </div>
      </div>

      {error && typeof error === "string" && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;
