import { ImageLoaderProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  // Your custom logic to generate the optimized image URL
  // This could involve using a proxy or other optimization techniques
  // "use server";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""; // Set to your production base URL
  return `${baseUrl}/api/image-proxy?src=${encodeURIComponent(src)}`;
};

export default customLoader;
