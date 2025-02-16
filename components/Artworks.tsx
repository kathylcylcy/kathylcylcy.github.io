import { artworks } from "@/constants";
import ArtworkCard from "./ArtworkCard";

export default function Artworks() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-16 py-10">
      <div className="flex w-full flex-wrap items-center justify-between gap-5 md:w-[80%] lg:w-[95%]">
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
      </div>
    </section>
  );
}
