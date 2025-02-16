import { artworks } from "@/constants";
import ArtworkCard from "./ArtworkCard";

export default function Artworks() {
  return (
    <section className="grid w-full grid-cols-1 content-start gap-5 px-16 py-10 md:grid-cols-2 lg:grid-cols-3">
      {artworks.map(({ slug, name, date, images }) => {
        return (
          <ArtworkCard
            key={slug}
            slug={slug}
            name={name}
            date={date}
            src={images[0]}
            alt={name}
          />
        );
      })}
    </section>
  );
}
