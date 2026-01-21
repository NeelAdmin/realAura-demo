import * as React from "react"
import { cn } from "@/lib/cn"

export type AppButtonProps = {
  label: string
  chipText?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
}

export function AppButton({
  label,
  chipText,
  onClick,
  disabled = false,
  className,
  type = "button",
}: AppButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center",
        "h-14 px-4",
        "rounded-[5px]",
        "bg-gradient-to-r from-secondary-start to-secondary-end",
        "text-white text-lg font-semibold",
        "transition-all duration-200",
        "hover:scale-[1.02]",
        "active:scale-[0.98]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {chipText && (
        <span
          className={cn(
            "absolute -top-2 right-4",
            "rounded-sm px-3",
            "bg-white text-secondary-start",
            "border border-secondary-start",
            "text-xs font-semibold"
          )}
        >
          {chipText}
        </span>
      )}

      {label}
    </button>
  )
}
