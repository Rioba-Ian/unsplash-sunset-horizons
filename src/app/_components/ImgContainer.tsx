/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import customLoader from "@/lib/imageloader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { deleteImageByUser } from "../actions";
import { LoaderCircle } from "lucide-react";

type ImgContainerProps = {
  id: string;
  image_url: string;
  title: string;
  blurredDataUrl?: string;
  height?: number;
  width?: number;
  displayDeleteButton?: boolean;
};

export default function ImgContainer({
  id,
  image_url,
  title,
  blurredDataUrl,
  width = 1,
  height = 1,
  displayDeleteButton,
}: ImgContainerProps) {
  const widthHeightRatio = height / width;
  const galleryHeight = Math.ceil(360 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative w-[360px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={image_url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image_url}
            alt={title}
            width={360}
            height={galleryHeight}
            sizes="360px"
            placeholder="blur"
            blurDataURL={blurredDataUrl}
            className="group-hover:opacity-75"
          />
          <p className="invisible absolute inset-2  text-lg text-white group-hover:visible">
            {title}
          </p>
        </div>
      </Link>
      {displayDeleteButton && (
        <Dialog onOpenChange={setOpen} open={open}>
          <DialogTrigger>
            <Button
              variant={"ghost"}
              className="border-1 invisible absolute right-2 top-2 rounded-2xl border-slate-200 text-red-500 group-hover:visible"
            >
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Photo</DialogTitle>
              <DialogDescription className="my-4 flex flex-col gap-4">
                Are you sure you want to delete this photo?
              </DialogDescription>

              <DialogFooter>
                <div className="ml-auto mt-4 flex min-w-16 gap-2 self-end">
                  <Button
                    variant={"destructive"}
                    onClick={async () => {
                      setIsDeleting(true);
                      await deleteImageByUser(id);
                      setOpen(false);
                      setIsDeleting(false);
                    }}
                  >
                    {isDeleting ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      "Yes, Delete"
                    )}
                  </Button>
                  <DialogClose asChild>
                    <Button className="" variant={"secondary"}>
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
