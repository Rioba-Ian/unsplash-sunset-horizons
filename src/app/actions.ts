import { db } from "@/db/db";
import { images, users } from "@/db/schema";
import prisma from "@/lib/prisma";
import { CreateUser } from "@/types";

export const getImagesData = async () => {
  const data = await prisma.image.findMany();

  return data;
};

export const addUser = async (user: CreateUser) => {
  await prisma.user.create({
    data: {
      clerkId: user.clerkId,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
    },
  });
};
