import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Build Together | Contact Coderaft",
  description: "Get in touch with Calicut's elite tech consultancy. Start building your next web app, POS system, or custom digital solution today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
