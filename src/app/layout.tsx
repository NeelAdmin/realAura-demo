import "./globals.css"

export const metadata = {
  title: "RealAura",
  description: "Real estate platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
