import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webworksstudio.com"),
  title: {
    default: "Webworks Studio — Engineered For What's Next",
    template: "%s | Webworks Studio",
  },
  description:
    "Webworks Studio is an independent technology and development studio designing and building premium digital experiences, websites and web applications.",
  keywords: [
    "web development studio",
    "digital experiences",
    "web applications",
    "UI design",
    "Next.js",
    "TypeScript",
    "premium websites",
    "agency partnership",
  ],
  authors: [{ name: "Webworks Studio" }],
  creator: "Webworks Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webworksstudio.com",
    siteName: "Webworks Studio",
    title: "Webworks Studio — Engineered For What's Next",
    description:
      "Independent technology and development studio. We design and build digital experiences, websites and web applications that are engineered for what's next.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webworks Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webworks Studio — Engineered For What's Next",
    description:
      "Independent technology and development studio. We design and build digital experiences, websites and web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-obsidian text-off-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
