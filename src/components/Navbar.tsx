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

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex  w-full max-w-[1440px] items-center p-4">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              src={LogoImage}
              height={48}
              width={48}
              alt="logo unsplash horizons."
              className="rounded-md mix-blend-multiply"
            />
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
            <div className="flex items-center">
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
