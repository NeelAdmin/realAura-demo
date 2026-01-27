import { Footer } from "@/components/common/Footer";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { SearchBar } from "@/components/layout/serch-bar/search-bar";

export const metadata = {
  title: "RealAura",
  description: "Real estate platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
