ALTER TABLE "images" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "images" DROP COLUMN IF EXISTS "text";