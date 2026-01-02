import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/footer";

const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/JetBrainsMonoNL-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMonoNL-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "LandingPage-UKM-PCC",
  description: "Portal PCC",
  icons: {
    icon: "/assets/logopcc.png",
    shortcut: "/assets/logopcc.png",
    apple: "/assets/logopcc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
