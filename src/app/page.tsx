import { signIn } from "@/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const user = await prisma.user.findMany({})
  
  return (
    <main className="flex min-h-[40vh] flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <h1 className="text-base md:text-4xl text-center font-semibold mb-5">Next JS Auth v5 Prisma and Postgresql Boilerplate</h1>
      <ul className="">
        {user.map((user) => (
          <li key={user.id}>
            <Link href={`/profile/${user.id}`} className="hover:underline">
              {user.name || `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
