import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KPIGrid } from "@/components/dashboard/kpi-grid";
import { RiskChart } from "@/components/dashboard/risk-chart";
import { IncidentTrend } from "@/components/dashboard/incident-trend";
import { ActionSummary } from "@/components/dashboard/action-summary";

const stats = [
  { label: "Risques totaux", value: "28", change: "+4%" },
  { label: "Risques critiques", value: "6", change: "-2%" },
  { label: "Contrôles actifs", value: "42", change: "+8%" },
  { label: "Actions en retard", value: "7", change: "-1%" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Pilotage
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Tableau de bord</h1>
        </div>
      </div>

      <KPIGrid items={stats} />

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Évolution des risques</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <RiskChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions urgentes</CardTitle>
          </CardHeader>
          <CardContent>
            <ActionSummary />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Incidents récents</CardTitle>
          </CardHeader>
          <CardContent>
            <IncidentTrend />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Indicateurs de conformité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Contrôles efficaces</span>
              <strong className="text-brand-700">78%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Incidents clôturés</span>
              <strong className="text-brand-700">82%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Actions en cours</span>
              <strong className="text-brand-700">9</strong>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
