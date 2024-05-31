import { ImagesWithBlurred, TImages } from "@/types";
import { getPlaiceholder } from "plaiceholder";
import sizeFromStream from "probe-image-size";

async function getBase64(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    console.error(e);
  }
}

export default async function addBlurredDataUrls(
  images: ImagesWithBlurred[],
): Promise<ImagesWithBlurred[]> {
  // const base64Promises = images.map((image) => getBase64(image.image_url));

  // const base64Res = await Promise.all(base64Promises);

  // const photosWithBlur: ImagesWithBlurred[] = images.map((image, i) => {
  //   image.blurredDataUrl = base64Res[i];
  //   return image;
  // });

  // return photosWithBlur;

  const imagePromises = images.map(async (image) => {
    const [base64, dimensions] = await Promise.all([
      getBase64(image.image_url),
      getMetaData(image.image_url),
    ]);

    image.blurredDataUrl = base64;

    image.width = dimensions.width;
    image.height = dimensions.height;

    return image;
  });

  const photosWithBlur = await Promise.all(imagePromises);

  return photosWithBlur;
}

export const getMetaData = async (
  url: string,
): Promise<{ width: number; height: number }> => {
  const { width, height } = await sizeFromStream(url);

  return { width, height };
};
