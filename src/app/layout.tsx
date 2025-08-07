import type { Metadata } from "next";
import LayoutRenderer from "../components/layout-renderer/LayoutRenderer";

export const metadata: Metadata = {
  title: "CDS",
  description: "CDS About us",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutRenderer>{children}</LayoutRenderer>
}
