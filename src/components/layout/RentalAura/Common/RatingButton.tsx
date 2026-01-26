const RatingButton = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => {
  const colors: Record<string, string> = {
    GOLD: "border-yellow-400 text-yellow-400 bg-yellow-50",
    SILVER: "border-[#000000] text-[#6A7D91] bg-gray-50",
    BRONZE: "border-[#917042] text-[#917042] bg-[#F5E7D6]",
  };

  const selectedClasses = selected
    ? colors[label] || "border-yellow-400 text-yellow-400 bg-yellow-50"
    : "border-gray-300 text-gray-600 hover:border-gray-400";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 min-w-[80px] text-sm
        md:px-6 md:py-3 md:min-w-[120px] md:text-md
        mr-2 rounded-lg border-2 font-bold transition-all uppercase
        ${selectedClasses}
      `}
    >
      {label}
    </button>
  );
};

export { RatingButton };
