import { artworks } from "@/constants";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getArtworkBySlug(slug: string) {
  for (let i = 0; i < artworks.length; i++) {
    if (artworks[i].slug === slug) {
      return artworks[i];
    }
  }
  return null;
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const artwork = getArtworkBySlug(slug);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 px-10 py-16">
      <h1 className="text-2xl font-bold uppercase">{artwork?.name}</h1>
      <h2 className="text-gray-500">{artwork?.medium}</h2>
      <h2 className="text-gray-500">{artwork?.date}</h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {artwork &&
          artwork.images.map((image) => {
            return (
              <div className="relative flex h-[100vw] w-[80vw] items-center justify-center md:h-[50vw] md:w-[40vw]">
                <Image
                  key={artwork.slug}
                  src={image}
                  alt={artwork.name}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            );
          })}
      </div>
      <p className="whitespace-pre text-wrap py-5 leading-relaxed md:w-[80vw] lg:w-[50vw]">
        {artwork && artwork.description}
      </p>
    </section>
  );
}

export async function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}
