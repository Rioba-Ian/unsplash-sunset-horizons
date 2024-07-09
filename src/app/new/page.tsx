import FormSubmitButton from "@/components/FormSubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";
import { addImagesAction } from "./action";
import { useAuth } from "@clerk/nextjs";

export default async function Page() {
  const user = await auth();

  console.log(user);

  if (!user) {
    redirect("/sigin?redirectTo=%2Fnew");
  }

  return (
    <main>
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-center text-3xl font-medium xl:text-5xl">
          Add a new photo
        </h1>

        <form action={addImagesAction}>
          <fieldset className="flex flex-col gap-8">
            <div>
              <label htmlFor="label">Label</label>
              <Input
                type="text"
                id="label"
                name="label"
                placeholder="Enter label for image"
              />
            </div>

            <div>
              <label htmlFor="url">Photo URL</label>
              <Input
                type="url"
                id="url"
                name="url"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </fieldset>

          <div className="flex justify-end gap-4">
            <Button variant={"ghost"}>Cancel</Button>
            <FormSubmitButton className="bg-emerald-700" type="submit">
              Submit
            </FormSubmitButton>
          </div>
        </form>
      </section>
    </main>
  );
}
