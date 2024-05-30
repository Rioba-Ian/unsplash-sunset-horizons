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
  width: number;
  height: number;
}

export default function CustomLoadedImage({
  src,
  width,
  height,
  alt,
}: CustomImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      loader={customLoader}
    />
  );
}
