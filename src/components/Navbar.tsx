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

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <nav className="border-b p-6 flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl lg:text-5xl ">Horizons</h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-5">
        {isSignedIn ? (
          <>
            <Button>
              <SignOutButton />
            </Button>
            <UserButton />
          </>
        ) : (
          <div className="flex items-center">
            <Button>
              <SignInButton />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
