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

export type TImages = {
  id: string;
  title: string | null;
  description: string | null;
  image_url: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface ImagesWithBlurred extends TImages {
  blurredDataUrl?: string;
  width?: number;
  height?: number;
}
