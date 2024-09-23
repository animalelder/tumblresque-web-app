import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="h-auto max-w-48 gap-4 overflow-clip rounded-md border-4 border-white bg-white text-black backdrop-blur-sm"
        >
          <Image
            className="overflow-clip border-2 border-white contain-paint"
            src={image.url}
            sizes="{max-width: 400px} 50vw, 400px"
            alt={image.name}
            width="400"
            height="600"
            quality={75}
          />
          <span>{image.name}</span>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          A WORK IN PROGRESS
        </h1>
        <SignedIn>
          <div className="flex flex-wrap gap-4">
            <Images />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="h-full w-full text-center text-2xl tracking-tighter drop-shadow-md">
            <span className="text-6xl capitalize">Please sign in above</span>
          </div>
        </SignedOut>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
      </div>
    </main>
  );
}
