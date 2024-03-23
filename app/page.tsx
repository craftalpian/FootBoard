import type { Metadata } from "next";

import Dashboard from "./_pages/dashboard";

export const metadata: Metadata = {
  title: "FootBoard ⚽️",
  description: "Sebuah dashboard untuk keperluan football",
};

export default function Example() {
  return <Dashboard />;
}
