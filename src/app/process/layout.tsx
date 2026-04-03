import { Metadata } from "next";

export const metadata: Metadata = {
  title: "An Engineering Masterclass | Our Process at Coderaft",
  description: "From Discovery to Post-Launch Support. See how our agile engineering process delivers robust, scalable apps on time.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
