import React from "react";
import { getImagesData } from "../actions";
import Image, { ImageLoaderProps } from "next/image";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/get-base64";

export default async function Gallery() {
  const imagesData = await getImagesData();

  if (imagesData.length === 0) {
    <section>
      <h1>No images found.</h1>
    </section>;
  }

  const photosWithBlur = await addBlurredDataUrls(imagesData);

  return (
    <section className="md:grid-cols-gallery-md my-3  grid auto-rows-[16px] grid-cols-gallery">
      {photosWithBlur.map((image) => (
        <ImgContainer
          image_url={image.image_url}
          title={image.title || ""}
          key={image.id}
          blurredDataUrl={image.blurredDataUrl}
          height={image.height}
          width={image.width}
        />
      ))}
    </section>
  );
}
