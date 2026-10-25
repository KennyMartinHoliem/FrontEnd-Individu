"use client";

import Link from "next/link"; 
import { usePathname } from "next/navigation"; 
import { useState } from "react"; 

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname(); 
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link href="/" className="navbar-brand" prefetch={false}>
          PT Maju Bersama
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)} 
          aria-label="Buka atau tutup menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"} 
        </button>
        <nav className={open ? "navbar-links open" : "navbar-links"}>
          {links.map((link) => (
            <Link
              key={link.href} 
              href={link.href}
              prefetch={false}
              className={isActive(link.href) ? "nav-link active" : "nav-link"}
              onClick={() => setOpen(false)} 
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
