// "use client";

// import { useSelector } from "react-redux";
// import {
//   selectCurrentUser,
//   selectIsAuthenticated,
//   selectIsLoading,
// } from "@/feature/auth/authSlice";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "./components/sidebar/Sidebar";
// import DashboardNavbar from "@/components/layout/navbar/DashboardNavbar";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const user = useSelector(selectCurrentUser);
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     if (!isLoading && (!isAuthenticated || !user)) {
//       router.replace("/");
//     }
//   }, [isLoading, isAuthenticated, user, router]);

//   if (isLoading) {
//     return <div className="flex h-screen items-center justify-center">Loading dashboard...</div>;
//   }

//   if (!isAuthenticated || !user) return null;

//  return (
//   <div className="min-h-screen bg-gray-50">
//     <div className="flex h-screen overflow-hidden"> {/* Added h-screen and overflow-hidden to contain the layout */}
//       {/* Sidebar - Desktop */}
//       <div className="hidden md:block fixed h-full z-10"> {/* Made sidebar fixed */}
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto md:ml-[240px]"> {/* Added margin to account for fixed sidebar */}
//         <div className="min-h-screen"> {/* Wrapper for content */}
//           {children}
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }


"use client";

import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectIsLoading,
} from "@/feature/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardNavbar from "@/components/layout/navbar/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      router.replace("/");
    }
  }, [isLoading, isAuthenticated, user, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  if (!isAuthenticated || !user) return null;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      {/* 🔹 Navbar (Full Width) */}
      <div className="flex-shrink-0">
        <DashboardNavbar />
      </div>

      {/* 🔹 Body Section */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <div className="hidden md:block w-[240px] border-r bg-white">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
