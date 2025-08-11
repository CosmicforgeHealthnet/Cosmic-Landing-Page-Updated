/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

// These two lines help __dirname work in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["@layout"] = path.resolve(__dirname, "src/layout");
    return config;
  },
};

export default nextConfig;
