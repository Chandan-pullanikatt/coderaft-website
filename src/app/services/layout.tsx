import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialized Tech Solutions | Coderaft Services",
  description: "Explore our range of UI/UX, Web & Mobile Apps, Table QR Systems, and POS solutions designed for modern businesses.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
