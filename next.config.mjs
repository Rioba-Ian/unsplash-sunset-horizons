/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageloader.ts", // path to your custom loader file
  },
};

export default nextConfig;
