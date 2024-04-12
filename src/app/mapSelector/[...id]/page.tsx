import  Link from "next/link";
import Image from "next/image";
import ImageComponent from "@/app/components/mappic";

export default function Map({params}: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <Link href='/mapSelector'>Back</Link>
    <h1>Map:{params.id}</h1>
    <ImageComponent/>
    </main>
  );
}
