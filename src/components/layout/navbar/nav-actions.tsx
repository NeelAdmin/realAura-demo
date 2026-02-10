import { AppButton } from "@/components/ui/AppButton";
import { useDispatch } from "react-redux";
import { logout } from "@/feature/auth/authSlice";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export function NavActions({
  isAuthenticated,
  user,
  setIsOpen,
  setIsPostPopupOpen,
  setIsProfileRatingModalOpen,
}: {
  isAuthenticated: boolean;
  user: User | null;
  setIsOpen: (open: boolean) => void;
  setIsPostPopupOpen: (open: boolean) => void;
  setIsProfileRatingModalOpen: (open: boolean) => void;
}) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Optional: redirect to home page or refresh
    window.location.href = "/";
  };

  return (
    <div className="flex items-center gap-2.5">
      <AppButton
        label="Profile Rating"
        className="h-10 px-4 text-sm"
        onClick={() => (isAuthenticated ? setIsProfileRatingModalOpen(true) : setIsOpen(true))}
      />

      <AppButton
        label="Post a Property"
        chipText="Free"
        className="h-10 px-4 text-sm"
        onClick={() => (isAuthenticated ? setIsPostPopupOpen(true) : setIsOpen(true))}
      />

      {/* Only show LOGIN button when not authenticated */}
      {!isAuthenticated && (
        <button
          className="text-primary px-4 py-2 text-[14px] font-bold"
          onClick={() => setIsOpen(true)}
        >
          LOGIN
        </button>
      )}
    </div>
  );
}
