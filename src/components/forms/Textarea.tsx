import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-md font-medium text-gray-600 mb-2 uppercase tracking-wide">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-lg text-gray-900
            focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white
            disabled:bg-gray-100 disabled:cursor-not-allowed
            placeholder:text-gray-400 resize-none 
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

Textarea.displayName = "Textarea";
