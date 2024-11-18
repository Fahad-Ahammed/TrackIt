import "@/styles/globals.css";
import { mulish } from "@/fonts";
import SideBar from "@/components/SideBar";
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
        <SideBar />
        {children}
      </body>
    </html>
  );
}
