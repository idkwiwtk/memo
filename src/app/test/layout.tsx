import Header from "@/src/components/organisms/Header";
import React from "react";

export default function TestPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <h1>hello test page layout</h1>
      {children}
    </section>
  );
}
