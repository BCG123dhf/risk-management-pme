export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Paramètres</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Catégories de risque</h2>
          <p className="mt-2 text-slate-600">Finance, Opérationnel, Cyber, RH, Conformité.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Utilisateurs et rôles</h2>
          <p className="mt-2 text-slate-600">Admin, Direction, Gestionnaire risques, Auditeur.</p>
        </div>
      </div>
    </div>
  );
}
