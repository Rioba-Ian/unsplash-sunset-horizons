import CustomLoadedImage from "@/components/CustomLoadedImage";
import { getImagesData } from "./actions";

export default async function Home() {
  const imagesData = await getImagesData();
  return (
    <main className="">
      <section className="">
        <h1>Sunsets and Sunrises....</h1>
        {imagesData.map((imageItem) => (
          <div className="image-container" key={imageItem.id}>
            <CustomLoadedImage
              src={imageItem.image_url}
              height={300}
              width={250}
              alt={imageItem.title}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
