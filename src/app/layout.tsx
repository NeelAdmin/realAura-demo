import { Footer } from "@/components/common/Footer";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { ReduxProvider } from "@/lib/providers";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "RealAura",
  description: "Real estate platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <ReduxProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
