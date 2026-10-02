export function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <p className="text-sm text-slate-500">Système de contrôle interne</p>
        <h2 className="text-xl font-bold text-slate-900">Burkina Faso</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
          Admin
        </div>
      </div>
    </header>
  );
}
