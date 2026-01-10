"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

// Full backup of previous header implementation. Use this to restore if needed.

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

export function HeaderBackup() {
  return (
    <div style={{display: 'none'}}>This is a backup of the header component.</div>
  );
}
