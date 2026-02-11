"use client";

import Sidebar from "./SideBar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SidebarDrawer({ isOpen, onClose }: Props) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Sidebar />
      </div>
    </>
  );
}
