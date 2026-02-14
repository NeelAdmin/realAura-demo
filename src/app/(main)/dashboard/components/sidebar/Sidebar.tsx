// "use client";

// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "@/feature/auth/authSlice";
// import { SIDEBAR_CONFIG } from "./sidebar.config";
// import SidebarSection from "./SidebarSection";

// type Props = {
//   notifications?: Record<string, number>;
// };

// const Sidebar = ({ notifications }: Props) => {
//   const user = useSelector(selectCurrentUser);

//   if (!user) return null;

//   return (
//     <aside className="h-screen w-72 overflow-y-auto bg-white py-4 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
//       {SIDEBAR_CONFIG.map((section) => (
//         <SidebarSection
//           key={section.title}
//           section={section}
//           role={user.role}
//           notifications={notifications}
//         />
//       ))}
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/feature/auth/authSlice";
import { SIDEBAR_CONFIG } from "./sidebar.config";
import SidebarSection from "./SidebarSection";
import { X } from "lucide-react";

type Props = {
  notifications?: Record<string, number>;
  isMobile?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ notifications, isMobile, onClose }: Props) => {
  const user = useSelector(selectCurrentUser);

  if (!user) return null;

  return (
    <aside
      className={`relative w-60 overflow-y-auto bg-white py-4 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] ${isMobile ? "h-full" : "h-screen"} `}
    >
      {/* Close button only for mobile */}
      {isMobile && (
        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-gray-100">
          <X size={18} />
        </button>
      )}

      {/* Add padding top on mobile so content doesn’t clash with close button */}
      <div>
        {SIDEBAR_CONFIG.map((section) => (
          <SidebarSection
            key={section.title}
            section={section}
            role={user.role}
            notifications={notifications}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
