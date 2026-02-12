// "use client";

// import Sidebar from "./Sidebar";

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function SidebarDrawer({ isOpen, onClose }: Props) {
//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />}

//       {/* Drawer */}
//       <div
//         className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <Sidebar />
//       </div>
//     </>
//   );
// }

"use client";

import Sidebar from "./Sidebar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};

export default function SidebarDrawer({ isOpen, onClose, isMobile }: Props) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />}

      <div
        className={`fixed right-0 z-50 w-80 transform bg-white transition-transform duration-300 ${isMobile ? "top-4 right-[-30px] bottom-4 my-5 rounded-2xl shadow-2xl" : "top-0 h-full"} ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Sidebar isMobile={isMobile} onClose={onClose} />
      </div>
    </>
  );
}
