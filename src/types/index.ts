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
