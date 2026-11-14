# Vikas Enterprises

Website for **Vikas Enterprises**, an interior design and renovation firm serving Navi Mumbai since 2001.

**Live site:** [vikas-enterprises.vercel.app](https://vikas-enterprises.vercel.app)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) with React 18
- [styled-components](https://styled-components.com/) and Bootstrap 5 / Bootstrap Icons
- [EmailJS](https://www.emailjs.com/) for the contact form
- AOS (scroll animations), react-slick (services carousel), react-countup
- Deployed on [Vercel](https://vercel.com/) with Vercel Analytics

## Getting Started

**Requirements:** Node.js 24.x (see `engines` in `package.json`).

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the development server                 |
| `npm run build`        | Create a production build (also runs ESLint) |
| `npm start`            | Serve the production build                   |
| `npm run lint`         | Run ESLint                                   |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Check formatting without changing files      |

## Environment Variables

The contact form sends email through EmailJS. Set these in `.env.local` locally and in **Vercel → Project → Settings → Environment Variables** for deployments:

| Variable                          | Description         |
| --------------------------------- | ------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS service ID  |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS public key  |

These values are visible in the browser by design. Restrict the allowed domains in the EmailJS dashboard to prevent misuse.

## Project Structure

```
public/assets/          Images (WebP)
src/app/
├── (root)/             Pages: home, services, projects, gallery, about-us
├── components/         Header, footer, menu, contact popup, toast, ...
├── sections/           Home page sections (hero, counters, about, services, gallery)
├── data/site.js        Business details, navigation, services and stats
├── colors.js           Colour and shadow tokens (theme.colors / theme.shadows)
├── layout.js           Root layout and site-wide SEO metadata
├── sitemap.js          Generates /sitemap.xml
└── robots.js           Generates /robots.txt
```

### Updating content

Most content lives in **`src/app/data/site.js`**: phone, email, address, social links, navigation, the list of services, and the homepage counters (projects, reviews, happy rate). Edit it there and every page that uses it updates.

## Credits

Designed and developed by [Mukesh Sharma](https://mukesh-sharma.vercel.app).
