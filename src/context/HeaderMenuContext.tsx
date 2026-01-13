"use client";
import React, { createContext, useContext, useState } from "react";

interface HeaderMenuContextType {
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
}

const HeaderMenuContext = createContext<HeaderMenuContextType | undefined>(undefined);

export const HeaderMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <HeaderMenuContext.Provider value={{ servicesOpen, setServicesOpen }}>
      {children}
    </HeaderMenuContext.Provider>
  );
};

export const useHeaderMenu = () => {
  const context = useContext(HeaderMenuContext);
  if (!context) throw new Error("useHeaderMenu must be used within a HeaderMenuProvider");
  return context;
};
