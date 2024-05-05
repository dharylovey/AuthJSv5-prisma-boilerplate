import { Metadata } from "next";
import SettingsPage from "../../components/SettingsPage";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Settings",
}

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const session = await  getSession();
  const user = session?.user;

  if(!user) {
    redirect('/api/auth/signin?callbackUrl=/settings');
  }

  return <SettingsPage user={user} />
}
