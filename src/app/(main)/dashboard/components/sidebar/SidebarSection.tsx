import SidebarItem from "./SidebarItem";
import { SidebarSectionType } from "./sidebar.config";

type Props = {
  section: SidebarSectionType;
  role: string;
  notifications?: Record<string, number>;
};

export default function SidebarSection({ section, role, notifications }: Props) {
  const filteredItems = section.items.filter((item) => item.roles.includes(role));

  if (!filteredItems.length) return null;

  return (
    <div className="rounded-2xl bg-white py-3">
      <p className="mb-2 px-2 text-xs font-semibold text-black uppercase">{section.title}</p>

      <div className="space-y-1">
        {filteredItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
            notificationCount={
              item.notificationKey ? notifications?.[item.notificationKey] : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
