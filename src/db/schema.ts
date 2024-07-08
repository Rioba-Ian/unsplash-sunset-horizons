import { InferModelFromColumns, relations, sql } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  clerkId: text("clerkId").notNull().unique(),
  avatar_url: text("avatar_url"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const images = pgTable("images", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  image_url: text("image_url").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => new Date()),
});

export const imagesRelations = relations(images, ({ one }) => ({
  user: one(users, { fields: [images.userId], references: [users.id] }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  images: many(images),
}));

export const insertImagesSchema = createInsertSchema(images);

export const selectImagesSchema = createSelectSchema(images);
