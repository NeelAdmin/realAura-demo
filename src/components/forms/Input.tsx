import { forwardRef, InputHTMLAttributes } from "react";
import { SectionIdentityLabel } from "../layout/RentalAura/Common/TitleField";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <SectionIdentityLabel
            label={label}
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide"
          />
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg text-md text-gray-900
            focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white
            disabled:bg-gray-100 disabled:cursor-not-allowed
            placeholder:text-gray-400 placeholder:text-lg
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
