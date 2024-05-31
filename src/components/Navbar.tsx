"use client";
import Link from "next/link";
import React from "react";
import {
  SignOutButton,
  SignInButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import LogoImage from "@/assets/Web_Photo_Editor.jpg";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex  w-full max-w-[1440px] items-center p-4">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary xl:text-5xl">
              Sunsets🌅
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-x-5">
          {isSignedIn ? (
            <>
              <Button asChild>
                <SignOutButton />
              </Button>
              <UserButton />
            </>
          ) : (
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center px-4">
                <Link href="/new">
                  <ImagePlus size={32} />
                </Link>
              </div>
              <Button asChild>
                <SignInButton />
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
