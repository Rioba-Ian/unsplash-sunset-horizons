import { db } from "@/db/db";
import { images, users } from "@/db/schema";
import { CreateUser } from "@/types";
import { asc } from "drizzle-orm";

export const getImagesData = async () => {
  const data = await db.select().from(images).orderBy(asc(images.createdAt));

  return data;
};

export const addUser = async (user: CreateUser) => {
  await db
    .insert(users)
    .values({
      clerkId: user.clerkId,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
    })
    .returning({ clerkClientId: users.clerkId });
};
