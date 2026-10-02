import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const incidents = [
  {
    id: "1",
    title: "Erreur de saisie sur facture",
    severity: "HIGH",
    date: "2026-09-21",
    status: "OPEN",
  },
  {
    id: "2",
    title: "Accès non autorisé à un dossier partagé",
    severity: "CRITICAL",
    date: "2026-09-18",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Retard de transmission du stock",
    severity: "MEDIUM",
    date: "2026-09-15",
    status: "CLOSED",
  },
];

const severityColors: Record<string, "destructive" | "warning" | "secondary" | "default"> = {
  CRITICAL: "destructive",
  HIGH: "warning",
  MEDIUM: "secondary",
  LOW: "default",
};

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Événements
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Incidents</h1>
        </div>
        <button className="rounded-xl bg-brand-700 px-4 py-2 text-white font-medium hover:bg-brand-800">
          Signaler un incident
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historique des incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="flex items-center justify-between border-b py-3 last:border-b-0">
                <div>
                  <div className="font-medium text-slate-900">{incident.title}</div>
                  <div className="text-sm text-slate-500">{incident.date}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={severityColors[incident.severity] || "default"}>{incident.severity}</Badge>
                  <span className="text-sm text-slate-600">{incident.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
