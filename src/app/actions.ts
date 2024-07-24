import { db } from "@/db/db";
import { images, users } from "@/db/schema";
import prisma from "@/lib/prisma";
import { CreateUser } from "@/types";
import { auth } from "@clerk/nextjs/server";

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

export const getUserData = async (clerkId: string) => {
  if (!clerkId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      Image: {
        select: {
          id: true,
          image_url: true,
        },
      },
    },
  });

  return user;
};
