import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
     <h1>EFTGuessr</h1>
     <Link href='mapSelector'>Play</Link>
    </main>
  );
}
