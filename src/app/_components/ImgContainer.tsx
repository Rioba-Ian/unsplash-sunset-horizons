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

  const galleryHeight = Math.ceil(280 * widthHeightRatio);

  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  console.log(galleryHeight);

  return (
    <div
      className="w-[280px] justify-self-center"
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
            width={280}
            height={galleryHeight}
            sizes="280px"
            placeholder="blur"
            blurDataURL={blurredDataUrl}
            className="group-hover:opacity-75"
          />
        </div>
      </Link>
    </div>
  );
}

/*

<div
      className="group relative w-[250px] justify-self-center overflow-hidden rounded-xl bg-gray-200"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Image
        src={image_url}
        alt={title}
        loading="lazy"
        width={250}
        height={galleryHeight}
        placeholder="blur"
        blurDataURL={blurredDataUrl}
        sizes="250px"
        className="object-cover group-hover:opacity-75"
      />
    </div>
*/
