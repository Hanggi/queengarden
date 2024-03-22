/** @type {import('next').NextConfig} */
// const { i18n } = "./next-i18next.config";
const nextConfig = {
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
};

export default nextConfig;
