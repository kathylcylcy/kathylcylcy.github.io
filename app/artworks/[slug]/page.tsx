import { artworks } from "@/constants";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.png";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArtworkBySlug(slug: string) {
  for (let i = 0; i < artworks.length; i++) {
    if (artworks[i].slug === slug) {
      return artworks[i];
    }
  }
  return null;
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const artwork = await getArtworkBySlug(slug);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-5 px-10 py-16">
      <h1 className="text-2xl font-bold uppercase">{artwork?.name}</h1>
      <h2 className="text-gray-500">{artwork?.medium}</h2>
      <h2 className="text-gray-500">{artwork?.date}</h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-5">
        {artwork?.images.map((image) => {
          return (
            <div
              key={image}
              className="relative flex aspect-[4/5] w-[80vw] items-center justify-center lg:w-[40vw]"
            >
              <Image
                src={image}
                alt={artwork.name}
                fill
                placeholder="blur"
                blurDataURL={Placeholder.src}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw"
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <p className="whitespace-pre text-wrap py-5 text-justify leading-relaxed md:w-[80vw] lg:w-[50vw]">
        {artwork?.description}
      </p>
    </section>
  );
}

export async function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}
