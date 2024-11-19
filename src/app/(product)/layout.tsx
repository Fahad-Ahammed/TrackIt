import "@/styles/globals.css";
import { mulish } from "@/fonts";
import SideBar from "@/components/SideBar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto flex max-w-[1660px] ${mulish.className} bg-white antialiased`}
      >
        {/* Wrap the dashboard pages to provide session context */}
        <SessionProvider>
          <SideBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
