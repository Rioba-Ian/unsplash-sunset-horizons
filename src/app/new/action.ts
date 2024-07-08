"use server";

import { insertImage } from "@/lib/insert-db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addImagesAction(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    redirect("/sigin?redirectTo=%2Fnew");
  }

  const photoLabel = formData.get("label") as string;
  const photoUrl = formData.get("url") as string;

  console.log(photoLabel, photoUrl);

  const imageCreated = await insertImage(
    "",
    photoLabel,
    photoUrl,
    Number(user.id),
  );

  console.log(imageCreated);

  revalidatePath("/");
  redirect("/");
}
