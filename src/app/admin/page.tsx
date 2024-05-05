import getSession from "@/lib/getSession"
import { Metadata } from "next"
import {redirect} from 'next/navigation'

export const metadata: Metadata = {
  title: 'Admin'
}


export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const session = await getSession();
  const user = session?.user;

  if(!user) {
    redirect('/api/auth/signin?callbackUrl=/admin')
  }

  if(user.role !== 'admin') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl">{`You don't have permission to view this page`}</h1>
      </main>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Welcome to the admin dashboard</h1>
    </div>
  )
}
