import { forwardRef, InputHTMLAttributes } from "react";
import { SectionIdentityLabel } from "../layout/RentalAura/Common/TitleField";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "boxed" | "underline";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = "boxed",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseInput = `
      w-full text-sm text-gray-900
      placeholder:text-gray-400
      focus:outline-none
      disabled:cursor-not-allowed
    `;

    const variants = {
      boxed: `
        px-3 py-3
        bg-white
        border border-gray-200
        rounded-lg
        focus:ring-2 focus:ring-yellow-500
        focus:border-transparent
      `,
      underline: `
        px-0 py-2
        bg-transparent
        border-0
        border-b border-gray-300
        rounded-none
        focus:border-black
      `,
    };

    return (
      <div className={`w-full ${className}`}>
        {/* ✅ LABEL (render once, variant-aware) */}
        {label && (
          <SectionIdentityLabel
            label={label}
            className={
              variant === "underline"
                ? "mb-1 block text-xs font-medium text-gray-500"
                : "mb-2 block text-sm font-medium uppercase tracking-wide text-gray-700"
            }
          />
        )}

        <input
          ref={ref}
          className={`
            ${baseInput}
            ${variants[variant]}
            ${error ? "border-red-500 focus:ring-red-500" : ""}
          `}
          {...props}
        />

        {error && (
          <p className="mt-1 text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
