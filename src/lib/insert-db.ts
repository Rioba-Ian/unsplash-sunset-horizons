import { db } from "@/db/db";
import { images } from "@/db/schema";

export const insertImage = async (
  title: string,
  description: string,
  image_url: string,
  userId: number,
) => {
  await db
    .insert(images)
    .values({
      image_url,
      description,
      title,
      userId,
    })
    .returning();
};
