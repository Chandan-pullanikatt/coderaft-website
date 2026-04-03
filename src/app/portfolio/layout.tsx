import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Recent Craft | Coderaft Portfolio",
  description: "Explore our latest projects including Network Masters Hub, TableTreats QR, and Tetla Motors. Premium digital craftsmanship from Calicut, Kerala.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
