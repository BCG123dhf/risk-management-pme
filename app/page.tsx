import Link from "next/link";

const modules = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Risques", href: "/risks" },
  { label: "Contrôles", href: "/controls" },
  { label: "Incidents", href: "/incidents" },
  { label: "Rapports", href: "/reports" },
  { label: "Paramètres", href: "/settings" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="max-w-5xl rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            PME / PMI • Burkina Faso
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Système de contrôle interne et gestion des risques
          </h1>
        </div>

        <p className="max-w-3xl text-lg text-slate-600">
          Une solution de pilotage pour suivre les risques, les contrôles, les incidents,
          les actions correctives et les rapports de direction.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-500 hover:bg-brand-50"
            >
              <div className="text-lg font-semibold text-slate-900">{module.label}</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-brand-700 px-5 py-3 text-white font-semibold hover:bg-brand-800"
          >
            Accéder au tableau de bord
          </Link>
          <Link
            href="/risks"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Voir les risques
          </Link>
        </div>
      </div>
    </main>
  );
}
