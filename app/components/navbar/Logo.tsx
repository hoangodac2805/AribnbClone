"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ILogoProps {}

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};

export default Logo;
