type SectionLabelProps = {
  label: string;
  className?: string;
};

function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`text-sm md:text-[20px] font-bold text-gray-700 ${className}`}
    >
      {label}
    </span>
  );
}
function SectionIdentityLabel({ label, className = "" }: SectionLabelProps) {
  return <span className={` ${className}`}>{label}</span>;
}

export { SectionLabel, SectionIdentityLabel };
