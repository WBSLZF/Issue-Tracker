"use client";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Avatar, Box, Button, DropdownMenu, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 justify-between border-b-2 border-b-gray-500 items-center h-14">
      <Box className="flex items-center">
        <NavLink />
      </Box>
      <Box className="pr-4">
        <AuthStatus />
      </Box>
    </nav>
  );
};

const NavLink = () => {
  const curPathName = usePathname();
  const links = [
    { href: "/", label: <IoMenu /> },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <ul className="flex space-x-6 pl-5 items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          className={classnames({
            "!text-zinc-900": curPathName === link.href,
            "nav-link": true,
          })}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="3rem"></Skeleton>;
  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href="/login">
        Sign In
      </Link>
    );
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          src={session!.user!.image!}
          fallback="?"
          size="2"
          radius="full"
          className="cursor-pointer"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Text size="2">{session!.user!.email}</Text>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/api/auth/signout" className="w-full">
            Sign Out
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
export default NavBar;
