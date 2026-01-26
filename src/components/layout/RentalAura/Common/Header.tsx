import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

type CommonHeaderProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  onBack?: () => void;
  iconBgClass?: string;
};

export default function CommonHeader({
  title,
  description,
  icon,
  onBack,
  iconBgClass,
}: CommonHeaderProps) {
  return (
    <div className="mb-8">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 transition-colors"
        >
          <span className="flex items-center">
            <ArrowLeft />
          </span>
          <span className="text-[18px] font-medium">Back</span>
        </button>
      )}

      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgClass ?? ""}`}
          >
            {icon}
          </div>
        )}

        <h2 className="rental-heading-primary">{title}</h2>
      </div>

      {description && (
        <p className="text-lg text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
}
