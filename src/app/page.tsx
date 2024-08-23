import Image from "next/image";
import { HatenaBlog } from "./ui/HatenaBlog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HatenaBlog />
    </main>
  );
}
