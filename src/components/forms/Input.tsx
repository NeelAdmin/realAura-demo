import { forwardRef } from "react";
import { SectionIdentityLabel } from "../layout/RentalAura/Common/TitleField";

/* ===================== TYPES ===================== */

type Variant = "boxed" | "underline";
type FieldType = "input" | "select" | "textarea" | "radio" | "checkbox";

interface BaseProps {
  label?: string;
  error?: string;
  variant?: Variant;
  as?: FieldType;
  className?: string;
}

/**
 * Unified props for all field types
 */
type Props =
  BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/* ===================== COMPONENT ===================== */

export const Input = forwardRef<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  Props
>(
  (
    {
      label,
      error,
      variant = "boxed",
      as = "input", // ✅ default is normal text input
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    /* ---------- BASE STYLES ---------- */

    const baseControl = `
      w-full
      text-sm
      text-gray-900
      placeholder:text-gray-400
      focus:outline-none
      disabled:cursor-not-allowed
    `;

    const variants: Record<Variant, string> = {
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

    const labelClass =
      variant === "underline"
        ? "mb-1 block text-xs font-medium text-gray-500"
        : "mb-2 block text-sm font-medium uppercase tracking-wide text-gray-700";

    const controlClass = `
      ${baseControl}
      ${variants[variant]}
      ${error ? "border-red-500 focus:ring-red-500" : ""}
    `;

    /* ---------- FIELD RENDER ---------- */

    const renderField = () => {
      switch (as) {
        case "select":
          return (
            <select
              ref={ref as React.Ref<HTMLSelectElement>}
              className={controlClass}
              {...props}
            >
              {children}
            </select>
          );

        case "textarea":
          return (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={controlClass}
              {...props}
            />
          );

        case "radio":
          return (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                ref={ref as React.Ref<HTMLInputElement>}
                type="radio"
                className="h-4 w-4 accent-yellow-500"
                {...props}
              />

              {children && (
                <span className="text-sm text-gray-700">
                  {children}
                </span>
              )}
            </label>
          );




        case "checkbox":
          return (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                ref={ref as React.Ref<HTMLInputElement>}
                type="checkbox"
                className="h-4 w-4 accent-red-500"
                {...props}
              />
              {children && (
                <span className="text-sm text-gray-700">
                  {children}
                </span>
              )}
            </label>
          );


        default:
          return (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={controlClass}
              {...props}
            />
          );
      }
    };

    /* ---------- JSX ---------- */

    return (
      <div className={`w-full ${className}`}>
        {/* Label */}
        {label && (
          <SectionIdentityLabel
            label={label}
            className={labelClass}
          />
        )}

        {/* Field */}
        {renderField()}

        {/* Error */}
        {error && (
          <p className="mt-1 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
