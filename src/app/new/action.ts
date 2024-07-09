"use server";

import { db } from "@/db/db";
import { images, users } from "@/db/schema";
import { insertImage } from "@/lib/insert-db";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addImagesAction(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sigin?redirectTo=%2Fnew");
  }

  const photoLabel = formData.get("label") as string;
  const photoUrl = formData.get("url") as string;

  console.log(photoLabel, photoUrl, user.id);

  console.log(await db.query.users.findMany(), "hawa users>>>>>");

  const getUserIdFromClerkId = await db.query.users.findFirst({
    where: eq(users.clerkId, user.id),
  });

  console.log(getUserIdFromClerkId);

  if (!getUserIdFromClerkId) {
    throw new Error("User not found");
  }

  await db
    .insert(images)
    .values({
      image_url: photoUrl,
      description: photoLabel,
      title: photoLabel,
      userId: getUserIdFromClerkId?.id,
    })
    .returning();

  //   console.log(imageCreated);

  revalidatePath("/");
  redirect("/");
}
