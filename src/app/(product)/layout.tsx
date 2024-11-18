import "@/styles/globals.css";
import {mulish} from "@/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} bg-white antialiased`}>
        <header>product header</header>
        {children}
        <footer>product footer</footer>
      </body>
    </html>
  );
}
