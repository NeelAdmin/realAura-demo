import * as React from "react"
import { cn } from "@/lib/cn"

export type AppButtonProps = {
  label: string
  chipText?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
  variant?:
  | "gradient"
  | "outline-gradient"
  | "pill-yellow"
  | "pill-pink"
  | "pill-blue"
  | "pill-green"
}

export function AppButton({
  label,
  chipText,
  onClick,
  disabled = false,
  className,
  type = "button",
  variant = "gradient",
}: AppButtonProps) {
  const isOutlineGradient = variant === "outline-gradient"
  const isPill = variant.startsWith("pill")

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // ===== DEFAULT SIZE (existing buttons) =====
        !isPill && [
          "h-14 px-4 text-lg font-semibold",
          "rounded-[5px]",
          "hover:scale-[1.02]",
          "active:scale-[0.98]",
        ],

        // ===== PILL SIZE (RESPONSIVE) =====
        isPill && [
          // Mobile (smallest)
          "h-6 px-2.5 text-[10px]",

          // Small devices
          "sm:h-7 sm:px-2 sm:text-xs",

          // Tablets
          "md:h-8 md:px-3 md:text-sm",

          // Desktop
          "lg:h-8 lg:px-4 lg:text-sm",

          "font-medium rounded-[8px]",
        ],


        // ===== VARIANTS =====
        variant === "gradient" && [
          "bg-gradient-to-r from-secondary-start to-secondary-end",
          "text-white",
        ],

        variant === "outline-gradient" && [
          "bg-white",
          "border border-border",
        ],

        variant === "pill-yellow" && [
          "bg-yellow-100 text-yellow-900 border border-yellow-300",
        ],

        variant === "pill-pink" && [
          "bg-pink-100 text-pink-900 border border-pink-300",
        ],

        variant === "pill-blue" && [
          "bg-blue-100 text-blue-900 border border-blue-300",
        ],

        variant === "pill-green" && [
          "bg-green-100 text-green-900 border border-green-300",
        ],

        className
      )}
    >
      {/* Chip (unchanged behavior) */}
      {chipText && !isPill && (
        <span
          className="
            absolute -top-2 right-4
            rounded-sm px-3
            bg-white text-secondary-start
            border border-secondary-start
            text-xs font-semibold
          "
        >
          {chipText}
        </span>
      )}

      {/* Label */}
      {isOutlineGradient ? (
        <span className="bg-linear-to-r from-secondary-start to-secondary-end bg-clip-text text-transparent">
          {label}
        </span>
      ) : (
        label
      )}
    </button>
  )
}
