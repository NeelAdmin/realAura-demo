import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  fullWidth = false,
  icon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wide";

  const variants = {
    primary:
      "bg-gradient-to-r from-secondary-start to-secondary-end text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && icon}
    </button>
  );
}
