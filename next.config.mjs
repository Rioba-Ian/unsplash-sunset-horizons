/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    path: "", // you can set a base path if needed
    loaderFile: "./src/app/_components/ImgContainer.tsx", // path to your custom loader file
  },
};

export default nextConfig;
