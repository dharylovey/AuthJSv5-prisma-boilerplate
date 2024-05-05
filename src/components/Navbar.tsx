'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserInfo from "@/components/UserInfo";
import { signIn, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <header className="sticky top-0 z-40 max-w-7xl bg-background px-3 mx-auto">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b-2">
        <Link href="/" className="text-lg font-bold">
          Auth v5 BoilerPlate
        </Link>
        {user && <UserInfo user={user} />}
        {!user && session.status !== 'loading' && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return (
      <Button variant="default" onClick={() => signIn()}>Sign In</Button>
  );
}
