"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "ForgotPassword", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="p-4">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`mr-4 ${
              isActive ? "font-bold text-green-500" : "text-black"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      <div className="mt-4">{children}</div>
    </div>
  );
}
