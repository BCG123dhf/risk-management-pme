import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const risks = [
  {
    id: "1",
    title: "Fuite de données sensibles",
    category: "Cyber / Sécurité",
    level: "CRITICAL",
    owner: "IT Manager",
    treatment: "REDUCE",
    status: "OPEN",
  },
  {
    id: "2",
    title: "Retard de paiement fournisseur",
    category: "Finance",
    level: "HIGH",
    owner: "Comptable",
    treatment: "REDUCE",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Défaillance du suivi de stock",
    category: "Opérationnel",
    level: "MEDIUM",
    owner: "Logistique",
    treatment: "ACCEPT",
    status: "MONITORING",
  },
];

const levelColors: Record<string, "destructive" | "warning" | "secondary" | "default"> = {
  CRITICAL: "destructive",
  HIGH: "warning",
  MEDIUM: "secondary",
  LOW: "default",
};

export default function RisksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Gouvernance
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Gestion des risques</h1>
        </div>
        <button className="rounded-xl bg-brand-700 px-4 py-2 text-white font-medium hover:bg-brand-800">
          Ajouter un risque
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des risques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b text-sm text-slate-600">
                  <th className="pb-3 pr-4">Libellé</th>
                  <th className="pb-3 pr-4">Catégorie</th>
                  <th className="pb-3 pr-4">Niveau</th>
                  <th className="pb-3 pr-4">Propriétaire</th>
                  <th className="pb-3 pr-4">Traitement</th>
                  <th className="pb-3">Statut</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk) => (
                  <tr key={risk.id} className="border-b last:border-b-0">
                    <td className="py-4 pr-4 font-medium text-slate-900">{risk.title}</td>
                    <td className="py-4 pr-4">{risk.category}</td>
                    <td className="py-4 pr-4">
                      <Badge variant={levelColors[risk.level] || "default"}>{risk.level}</Badge>
                    </td>
                    <td className="py-4 pr-4">{risk.owner}</td>
                    <td className="py-4 pr-4">{risk.treatment}</td>
                    <td className="py-4">{risk.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
