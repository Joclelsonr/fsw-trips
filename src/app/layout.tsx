import { AuthProvider } from "@/providers/auth";
import { Poppins } from "next/font/google";

import Header from "../components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import Toast from "@/providers/toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "FSW Trips",
  description: "Sistema de reservas de viagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <AuthProvider>
          <Toast>
            <Header />
            {children}
            <Footer />
          </Toast>
        </AuthProvider>
      </body>
    </html>
  );
}
