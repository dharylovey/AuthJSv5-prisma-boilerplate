'use client'
import { GearIcon } from "@radix-ui/react-icons";
import { GoSignOut } from "react-icons/go";
import { User } from "next-auth";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgProfile } from "react-icons/cg";
import { FaUserLock } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="flex-none rounded-full">
          <Avatar>
            <AvatarImage src={user.image || "/avatart.png"} alt="@shadcn" />
            <AvatarFallback className="bg-gray-400">DA</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <button className="w-full items-center" onClick={() => setOpen(false)}>
              <Link href="/" className="flex">
                <IoHomeOutline className="mr-2 h-4 w-4" />
                <span>Home</span>
              </Link>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button className="w-full items-center" onClick={() => setOpen(false)}>
              <Link href="/profile" className="flex">
                <CgProfile className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </button>
          </DropdownMenuItem>

          {user.role === "admin" && (
            <DropdownMenuItem asChild>
              <button className="w-full items-center" onClick={() => setOpen(false)}>
                <Link href="/admin" className="flex">
                  <FaUserLock className="mr-2 h-4 w-4" />
                  <span>Admin</span>
                </Link>
              </button>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button className="w-full items-center" onClick={() => setOpen(false)}>
            <Link href="/settings" className="flex ">
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button className="flex w-full items-center cursor-pointer" onClick={() => signOut({ callbackUrl: "/" })}>
            <GoSignOut className="mr-2 h-4 w-4" /> Sign Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
