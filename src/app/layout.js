import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";
import { business } from "@/app/data/site";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = business.siteUrl;
const siteTitle = business.name;
const siteDescription = business.description;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    "interior design",
    "interior designer Navi Mumbai",
    "renovation",
    "modular kitchen",
    "false ceiling",
    "turnkey contractor",
    "Ghansoli",
    "home decor",
  ],
  authors: [{ name: "Mukesh Sharma", url: "https://mukesh-sharma.vercel.app" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
    images: [
      {
        url: "/assets/hero-background.webp",
        width: 1920,
        height: 1080,
        type: "image/webp",
        alt: "Vikas Enterprises interior design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/hero-background.webp"],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
