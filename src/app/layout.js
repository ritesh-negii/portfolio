import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata = {
  title: "Ritesh Negi | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web and AI applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}

