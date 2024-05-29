import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <SignUp path="/sign-up" />
    </main>
  );
}
