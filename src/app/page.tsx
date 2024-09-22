import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/TKr2OQqheP7s7zUbdvyoM1CUKw85JNiGflqLzW6aYkn9HtFD",
  "https://utfs.io/f/TKr2OQqheP7sHxnUdlKZNfyUSlLE8YewXKJCizvoT6AWPtb4",
  "https://utfs.io/f/TKr2OQqheP7sB1t44383uRa0JHf6ypCNqOWl9Mmi2DjgEzob",
  "https://utfs.io/f/TKr2OQqheP7s1puv17GTRl6LF5Ynvyqm9baVPB0jf7NHtCrA",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Work in progress
        </h1>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="h-auto max-w-52 object-contain">
              <Image src={image.url} alt="test" width="434" height="834" />
              <span>{image.name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
      </div>
    </main>
  );
}
