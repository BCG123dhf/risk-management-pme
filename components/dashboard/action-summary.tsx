export function ActionSummary() {
  const actions = [
    { label: "Renforcer les accès", status: "En cours" },
    { label: "Mise à jour des procédures", status: "Urgent" },
    { label: "Suivi des fournisseurs", status: "À valider" },
  ];

  return (
    <ul className="space-y-3">
      {actions.map((action) => (
        <li key={action.label} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
          <span className="text-sm text-slate-700">{action.label}</span>
          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
            {action.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
