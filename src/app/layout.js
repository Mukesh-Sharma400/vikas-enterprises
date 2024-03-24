import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Vikas Enterprises",
  description:
    "Vikas Enterprises, founded in 2001, has become a trusted leader in Navi Mumbai's renovation scene. We specialize in all aspects of interior decoration, from Ghansoli to beyond.",
  keywords:
    "interior design, creative spaces, home decor, aesthetic designs, innovative interiors",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://",
  type: "website",
  ogTitle: "Vikas Enterprises",
  ogDescription:
    "Vikas Enterprises, founded in 2001, has become a trusted leader in Navi Mumbai's renovation scene. We specialize in all aspects of interior decoration, from Ghansoli to beyond.",
  ogImage: "./icon.png",
  twitterTitle: "Vikas Enterprises",
  twitterDescription:
    "Vikas Enterprises, founded in 2001, has become a trusted leader in Navi Mumbai's renovation scene. We specialize in all aspects of interior decoration, from Ghansoli to beyond.",
  twitterImage: "./icon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
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
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
