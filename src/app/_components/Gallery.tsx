import React, { use } from "react";
import { getImagesData, getUserData } from "../actions";
import Image, { ImageLoaderProps } from "next/image";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/get-base64";
import { auth } from "@clerk/nextjs/server";

export default async function Gallery() {
  const imagesData = await getImagesData();
  const user = await auth();

  const userInDb = await getUserData(user.userId || "");

  console.log(userInDb);

  if (imagesData.length === 0) {
    <section>
      <h1>No images found.</h1>
    </section>;
  }

  const photosWithBlur = await addBlurredDataUrls(imagesData);

  return (
    <section
      className="my-3 grid grid-cols-gallery  gap-4 xl:grid-cols-gallery-md"
      style={{
        gridAutoFlow: "rows",
        gridAutoRows: "1fr",
      }}
    >
      {photosWithBlur.map((image) => (
        <ImgContainer
          id={image.id}
          image_url={image.image_url}
          title={image.title || ""}
          key={image.id}
          blurredDataUrl={image.blurredDataUrl}
          height={image.height}
          width={image.width}
          displayDeleteButton={Boolean(
            userInDb?.Image.find(({ id }) => id === image.id),
          )}
        />
      ))}
    </section>
  );
}
