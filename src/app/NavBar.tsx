"use client";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const curPathName = usePathname();
  const links = [
    { href: "/", label: <IoMenu /> },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  const { status, data: session } = useSession();

  return (
    <nav className="flex space-x-6 justify-between border-b-2 border-b-gray-500 items-center h-14">
      <Box className="flex items-center">
        <ul className="flex space-x-6 pl-5 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              className={classnames({
                "text-zinc-900": curPathName === link.href,
                "text-zinc-500": curPathName !== link.href,
                "hover:text-zinc-900 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </Box>
      <Box className="pr-4">
        {status === "authenticated" && (
          <Link
            href="/api/auth/signout"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Sign Out
          </Link>
        )}
        {status === "unauthenticated" && (
          <Link
            href="/api/auth/signin"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Sign In
          </Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
