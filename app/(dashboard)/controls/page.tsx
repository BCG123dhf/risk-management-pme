import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const controls = [
  {
    id: "1",
    title: "Vérification des paiements fournisseurs",
    frequency: "Hebdomadaire",
    owner: "Comptable",
    effectiveness: 90,
    status: "ACTIF",
  },
  {
    id: "2",
    title: "Audit des accès utilisateurs",
    frequency: "Mensuelle",
    owner: "IT",
    effectiveness: 76,
    status: "ACTIF",
  },
  {
    id: "3",
    title: "Contrôle des stocks physiques",
    frequency: "Quotidienne",
    owner: "Logistique",
    effectiveness: 88,
    status: "ACTIF",
  },
];

export default function ControlsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Assurance
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Contrôles internes</h1>
        </div>
        <button className="rounded-xl bg-brand-700 px-4 py-2 text-white font-medium hover:bg-brand-800">
          Créer un contrôle
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {controls.map((control) => (
          <Card key={control.id}>
            <CardHeader>
              <CardTitle>{control.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>Fréquence : {control.frequency}</p>
              <p>Responsable : {control.owner}</p>
              <p>Efficacité : {control.effectiveness}%</p>
              <p>Statut : {control.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
