"use client";

import Image from "next/image";
import React from "react";

interface IAvatarProps {
  src?: string | null
}

const Avatar: React.FC<IAvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
