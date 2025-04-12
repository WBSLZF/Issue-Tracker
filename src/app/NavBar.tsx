"use client";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import classnames from "classnames";
const NavBar = () => {
  const curPathName = usePathname();
  const links = [
    { href: "/", label: <IoMenu /> },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-6">
      <ul className="flex space-x-6 pl-5 top-2 h-14 border-b-2 border-b-gray-500 w-full items-center">
        {links.map((link) => (
          <Link
            className={classnames({
              "text-zinc-900": curPathName === link.href,
              "text-zinc-500": curPathName !== link.href,
              "hover:text-zinc-900 transition-colors": true,
            })}
            href={link.href}
            key={link.href}
            legacyBehavior
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
