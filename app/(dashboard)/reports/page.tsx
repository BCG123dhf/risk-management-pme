import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reports = [
  {
    title: "Rapport de risques",
    description: "Vue consolidée des risques par catégorie et niveau.",
  },
  {
    title: "Rapport des contrôles",
    description: "Suivi de l’efficacité des contrôles par service.",
  },
  {
    title: "Rapport d’incidents",
    description: "Historique des incidents, gravité et clôture.",
  },
  {
    title: "Rapport de direction",
    description: "Synthèse pour les décisions stratégiques.",
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Decision
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Rapports</h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
            PDF
          </button>
          <button className="rounded-xl bg-brand-700 px-4 py-2 text-white font-medium hover:bg-brand-800">
            Excel
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.title}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{report.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
