import React from "react";
import Image from "next/image";

type PhotoCardProps = {
  src: string;
};

export default function PhotoCard({ src }: PhotoCardProps) {
  return (
    <>
      <Image
        src={src}
        alt={src}
        className="w-full h-[450px] md:h-[300px] object-cover shadow-2xs rounded-lg"
        width={500}
        height={300}
      />
    </>
  );
}
