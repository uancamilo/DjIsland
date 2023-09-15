// import './globals.css'
import { Roboto } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Dj Islnd | The Real DJ",
  description: "the real dj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
