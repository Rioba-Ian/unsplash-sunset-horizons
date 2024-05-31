import { selectImagesSchema } from "@/db/schema";
import { z } from "zod";

export interface User {
  id: number;
  name: string;
  email: string;
  clerkId: string;
  avatar_url?: string;
  createdAt: Date;
}

export interface CreateUser {
  name: string;
  email: string;
  clerkId: string;
  avatar_url?: string;
}

export type TImages = z.infer<typeof selectImagesSchema>;

export interface ImagesWithBlurred extends TImages {
  blurredDataUrl?: string;
  width?: number;
  height?: number;
}
