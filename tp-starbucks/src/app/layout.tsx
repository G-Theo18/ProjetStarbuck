import type { Metadata } from "next";
import { Geist_Mono, Lexend, Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Menu } from "@/components/Menu/menu";
import { Footer } from "@/tp-kit/components/footer";

const lexendSans = Lexend({
    variable: "--font-lexend-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat-loaded",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair-loaded",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Starbucks",
        template: "%s - Starbucks",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${lexendSans.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable} antialiased`}
            >
                <Script
                    src="https://unpkg.com/react-scan/dist/auto.global.js"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"
                />

                <Menu />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}