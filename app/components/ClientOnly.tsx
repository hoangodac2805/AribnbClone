"use client";
import React, { useEffect, useState } from "react";

interface IClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<IClientOnlyProps> = ({ children }) => {
  const [hasMounted, sertHasMouted] = useState<boolean>(false);

  useEffect(() => {
    sertHasMouted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
