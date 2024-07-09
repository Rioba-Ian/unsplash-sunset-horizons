"use server";

import { db } from "@/db/db";
import { images, users } from "@/db/schema";
import { insertImage } from "@/lib/insert-db";
import prisma from "@/lib/prisma";
import { useAuth } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addImagesAction(formData: FormData) {
  const user = await auth();

  if (!user.userId) {
    redirect("/sigin?redirectTo=%2Fnew");
  }

  const photoLabel = formData.get("label") as string;
  const photoUrl = formData.get("url") as string;

  console.log(photoLabel, photoUrl, user);

  const getUserIdFromClerkId = await prisma.user.findFirst({
    where: {
      clerkId: user.userId,
    },
  });

  console.log(getUserIdFromClerkId);

  if (!getUserIdFromClerkId) {
    throw new Error("User not found");
  }

  await prisma.image.create({
    data: {
      image_url: photoUrl,
      description: photoLabel,
      title: photoLabel,
      userId: getUserIdFromClerkId.id,
    },
  });

  //   console.log(imageCreated);

  revalidatePath("/");
  redirect("/");
}
