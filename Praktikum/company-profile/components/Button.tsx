import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode; 
  href: string; 
  variant?: "primary" | "outline"; 
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link href={href} className={`btn btn-${variant}`}  prefetch={false}>
      {children}
    </Link>
  );
}
