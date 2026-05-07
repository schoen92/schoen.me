import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold text-slate-900">Social Listen In</Link>
        <nav className="flex gap-4 text-sm text-slate-700">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600">{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
