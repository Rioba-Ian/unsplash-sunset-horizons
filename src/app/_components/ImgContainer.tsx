/* eslint-disable @next/next/no-img-element */
"use client";
// import customLoader from "@/lib/imageloader";
import Image from "next/image";
import React from "react";

type ImgContainerProps = {
  image_url: string;
  title: string;
  blurredDataUrl?: string;
  height?: number;
  width?: number;
};

export default function ImgContainer({
  image_url,
  title,
  blurredDataUrl,
  width = 1,
  height = 1,
}: ImgContainerProps) {
  const widthHeightRatio = height / width;

  const galleryHeight = Math.ceil(250 * widthHeightRatio);

  const photoSpans = Math.ceil(galleryHeight / 12) + 1;

  return (
    <div
      className="group relative w-[300px] justify-self-center overflow-hidden rounded-xl bg-gray-200"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Image
        src={image_url}
        fill={true}
        alt={title}
        loading="lazy"
        // loader={customLoader}
        placeholder="blur"
        blurDataURL={blurredDataUrl}
        sizes="300px"
        // sizes="(min-width: 2020px) 278px, (min-width: 1640px) calc(6.94vw + 139px), (min-width: 1300px) 20vw, (min-width: 980px) 26.67vw, (min-width: 660px) 40vw, (min-width: 380px) calc(80vw - 16px), calc(36.67vw + 140px)"
        className="object-cover group-hover:opacity-75"
      />
    </div>
  );
}
