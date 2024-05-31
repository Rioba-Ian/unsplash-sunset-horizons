"use client";
import React from "react";
import Image, { ImageLoaderProps } from "next/image";

const customLoader = ({ src }: ImageLoaderProps) => {
  // Your custom logic to generate the optimized image URL
  // This could involve using a proxy or other optimization techniques
  // "use server";
  return `/api/image-proxy?src=${encodeURIComponent(src)}`;
};

interface CustomImageProps {
  src: string;
  alt: string;
}

export default function CustomLoadedImage({ src, alt }: CustomImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      loader={customLoader}
      fill={true}
      sizes="(min-width: 1920px) 350px, (min-width: 1460px) calc(15.45vw + 56px), (min-width: 1100px) 26.47vw, (min-width: 740px) 40vw, (min-width: 400px) calc(80vw - 16px), calc(10vw + 250px)"
      className="object-cover group-hover:opacity-75"
    />
  );
}
