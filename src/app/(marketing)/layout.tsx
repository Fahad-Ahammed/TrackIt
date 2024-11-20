import type { Metadata } from "next";
import {mulish} from "@/fonts"
import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TrackIt",
  description: "Streamline your workflow with our modern todo app. Manage projects, track tasks, and boost productivity with real-time updates.",
  icons: [
    {
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} bg-white antialiased`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
