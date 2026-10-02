import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/risks", label: "Risques" },
  { href: "/controls", label: "Contrôles" },
  { href: "/incidents", label: "Incidents" },
  { href: "/reports", label: "Rapports" },
  { href: "/settings", label: "Paramètres" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:block">
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-brand-700">PME</div>
          <div className="text-xl font-bold">Risk Control</div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100",
                  item.href === "/dashboard" && "bg-brand-50 text-brand-800"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
