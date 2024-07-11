/* eslint-disable @next/next/no-img-element */
"use client";
// import customLoader from "@/lib/imageloader";
import Image from "next/image";
import Link from "next/link";
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

  const galleryHeight = Math.ceil(360 * widthHeightRatio);

  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="relative w-[360px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={image_url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="group overflow-hidden rounded-xl">
          <Image
            src={image_url}
            alt={title}
            width={360}
            height={galleryHeight}
            sizes="360px"
            placeholder="blur"
            blurDataURL={blurredDataUrl}
            className="group-hover:opacity-75"
          />
          <p className="invisible absolute inset-2  text-lg text-white group-hover:visible">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
