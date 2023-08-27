import React from "react";
import _Link from "next/link";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <_Link href={href}>{children}</_Link>;
}
