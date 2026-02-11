import { Footer } from "@/components/common/Footer";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { ReduxProvider } from "@/lib/providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "RealAura",
  description: "Real estate platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <ReduxProvider>
          <Navbar />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "8px",
                padding: "12px 16px",
                fontSize: "14px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
              },
            }}
          />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
