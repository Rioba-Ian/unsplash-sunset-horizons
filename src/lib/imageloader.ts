import { ImageLoaderProps } from "next/image";

export const customLoader = ({ src }: ImageLoaderProps) => {
  // Your custom logic to generate the optimized image URL
  // This could involve using a proxy or other optimization techniques
  // "use server";
  return `/api/image-proxy?src=${encodeURIComponent(src)}`;
};
