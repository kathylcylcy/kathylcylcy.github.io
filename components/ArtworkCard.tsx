"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Placeholder from "@/public/images/placeholder.png";

interface ArtworkCardProps {
  slug: string;
  name: string;
  date: string;
  src: string;
  alt: string;
}

export default function ArtworkCard({
  slug,
  name,
  date,
  src,
  alt,
}: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/artworks/${slug}`}
      className="group relative flex aspect-[4/5] w-full flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-xl font-bold uppercase text-white">
        {isHovered && name}
      </h1>
      <h2 className="text-lg text-white">{isHovered && date}</h2>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={Placeholder.src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="-z-10 object-cover group-hover:brightness-50"
      />
    </Link>
  );
}
