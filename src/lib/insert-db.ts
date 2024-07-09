import { db } from "@/db/db";
import { images, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const insertImage = async (
  title: string,
  description: string,
  image_url: string,
  clerkId: string,
) => {
  const getUserIdFromClerkId = await db.query.users.findFirst({
    where: eq(users.clerkId, clerkId),
  });

  console.log(getUserIdFromClerkId);

  if (!getUserIdFromClerkId) {
    throw new Error("User not found");
  }
  await db
    .insert(images)
    .values({
      image_url,
      description,
      title,
      userId: getUserIdFromClerkId?.id,
    })
    .returning();
};
