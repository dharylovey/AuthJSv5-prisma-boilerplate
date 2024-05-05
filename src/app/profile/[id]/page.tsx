import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { resolve } from "path";
import { cache } from "react";

interface UserProps {
  params: { id: string };
}

const getUser = cache(async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: { name: true, image: true, createdAt: true, updatedAt: true },
  });
});

export async function generateStaticParams() {
  const users = await prisma.user.findMany();
  return users.map((user) => ({ id: user.id }));
}

export async function generateMetadata({ params }: UserProps) {
  const user = await getUser(params.id);
  if (!user) return notFound();
  return {
    title: user.name,
  };
}

export default async function page({ params: { id } }: UserProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const user = await getUser(id);

  if (!user) return notFound();
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-between p-24">
      {user.image && (
        <>
          <Image
            src={user.image}
            alt={user.name || "User profile picture"}
            width={200}
            height={200}
            priority
            className="rounded-full mb-4"
          />
          <h1>{user.name}</h1>
          <p>Created at: {new Date(user.createdAt).toString()}</p>
          <p>Updated at: {new Date(user.updatedAt).toString()}</p>
        </>
      )}
    </div>
  );
}
