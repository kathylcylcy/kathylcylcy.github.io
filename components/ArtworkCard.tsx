"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      className="group relative flex h-[100vw] w-[80vw] flex-col items-center justify-center md:h-[40vw] md:w-[32vw] lg:h-[35vw] lg:w-[28vw]"
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
        unoptimized
        className="-z-10 object-cover group-hover:brightness-50"
      />
    </Link>
  );
}
