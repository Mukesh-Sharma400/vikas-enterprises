/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Keep old links working after renaming /aboutus to /about-us
  async redirects() {
    return [{ source: "/aboutus", destination: "/about-us", permanent: true }];
  },
};

module.exports = nextConfig;
