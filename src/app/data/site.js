// Single source of truth for business details, navigation, services and stats.
// Edit values here and every page/section that uses them updates together.

import turnkeyContractorImage from "#/turnkey-contractor.webp";
import paintingWorkImage from "#/painting-work.webp";
import civilWorkImage from "#/civil-work.webp";
import electricalWorkImage from "#/electrical-work.webp";
import carpenterWorkImage from "#/carpenter-work.webp";
import modularKitchenImage from "#/modular-kitchen.webp";
import fabricationWorkImage from "#/fabrication-work.webp";
import interiorDesignImage from "#/interior-design.webp";
import tilingFlooringImage from "#/tiling-flooring.webp";
import falseCeilingImage from "#/false-ceiling.webp";

export const business = {
  name: "Vikas Enterprises",
  foundedYear: 2001,
  phone: "+919321048241",
  phoneDisplay: "+91 9321048241",
  email: "vikasenterprises201@gmail.com",
  address: "Ghansoli, Navi Mumbai",
  mapsUrl: "https://maps.google.com?q=Ghansoli,+Navi+Mumbai",
  siteUrl: "https://vikas-enterprises.vercel.app",
  description:
    "Vikas Enterprises, founded in 2001, has become a trusted leader in Navi Mumbai's renovation scene. We specialize in all aspects of interior decoration, from Ghansoli and beyond.",
};

// Homepage counters. Update these as the business grows.
export const stats = {
  projects: 100,
  reviews: 30,
  happyPercent: 97,
};

// `dropdownWidth` is used by the tablet "All Pages" dropdown in the header.
export const routes = [
  { path: "/", label: "Home", dropdownWidth: 50 },
  { path: "/services", label: "Services", dropdownWidth: 70 },
  { path: "/projects", label: "Projects", dropdownWidth: 65 },
  { path: "/gallery", label: "Gallery", dropdownWidth: 60 },
  { path: "/about-us", label: "About Us", dropdownWidth: 75 },
];

export const socialLinks = [
  {
    className: "bi bi-whatsapp",
    href: `https://wa.me/${business.phone}`,
    label: "WhatsApp",
  },
  {
    className: "bi bi-facebook",
    href: "https://www.facebook.com/vikasenterprises201",
    label: "Facebook",
  },
  {
    className: "bi bi-instagram",
    href: "https://www.instagram.com/vikas_enterprises201",
    label: "Instagram",
  },
  {
    className: "bi bi-threads",
    href: "https://www.threads.net/@vikas_enterprises201",
    label: "Threads",
  },
  {
    className: "bi bi-twitter-x",
    href: "https://twitter.com/vikas_enter201",
    label: "Twitter / X",
  },
];

export const contactLinks = [
  {
    className: "bi bi-geo-alt-fill",
    href: business.mapsUrl,
    label: "Address",
    text: business.address,
  },
  {
    className: "bi bi-telephone-fill",
    href: `tel:${business.phone}`,
    label: "Phone",
    text: business.phoneDisplay,
  },
  {
    className: "bi bi-envelope-at-fill",
    href: `mailto:${business.email}`,
    label: "Email",
    text: business.email,
  },
];

export const services = [
  {
    name: "Interior Designing",
    image: interiorDesignImage,
    description:
      "Transform your space with our expert interior designing services. From concept to completion, we'll bring your vision to life.",
  },
  {
    name: "Civil Work",
    image: civilWorkImage,
    description:
      "From building foundations to structural frameworks, we ensure that every project is completed to the highest standards.",
  },
  {
    name: "Tiling & Flooring",
    image: tilingFlooringImage,
    description:
      "Enhance your space with our tiling and flooring solutions. Our experts will help you choose and install the perfect materials.",
  },
  {
    name: "Electrical Work",
    image: electricalWorkImage,
    description:
      "Ensure the safety and functionality of your electrical systems with our professional services.",
  },
  {
    name: "Fabrication Work",
    image: fabricationWorkImage,
    description:
      "Get custom metal parts or structural components with our fabrication work services, delivered on time and within budget.",
  },
  {
    name: "Painting Work",
    image: paintingWorkImage,
    description:
      "Refresh your walls or give your exterior a makeover with our professional painting services.",
  },
  {
    name: "False Ceiling",
    image: falseCeilingImage,
    description:
      "Achieve stunning architectural details with our false ceiling work services.",
  },
  {
    name: "Carpenter Work",
    image: carpenterWorkImage,
    description:
      "From furniture making to cabinetry, our skilled carpenters will bring your woodworking projects to life.",
  },
  {
    name: "Modular Kitchen",
    image: modularKitchenImage,
    description:
      "Experience the convenience and functionality of a modular kitchen tailored to suit your lifestyle.",
  },
  {
    name: "Turnkey Contractor",
    image: turnkeyContractorImage,
    description:
      "Sit back and relax while we manage every aspect of your project as your turnkey contractor.",
  },
];
