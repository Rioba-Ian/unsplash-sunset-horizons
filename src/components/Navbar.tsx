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

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <nav className="border-b h-8 flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl lg:text-5xl ">Horizons</h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-5">
        {isSignedIn ? (
          <>
            <SignOutButton />
            <UserButton />
          </>
        ) : (
          <div className="flex items-center">
            <SignInButton />
          </div>
        )}
      </div>
    </nav>
  );
}
