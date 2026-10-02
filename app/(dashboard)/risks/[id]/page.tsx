"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface Risk {
  id: string;
  title: string;
  description: string;
  category: string;
  probability: string;
  impact: string;
  level: string;
  treatment: string;
  owner: string;
  status: string;
  createdAt: string;
}

export default function RiskDetailPage({ params }: { params: { id: string } }) {
  const [risk, setRisk] = useState<Risk | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRisk = async () => {
      try {
        const res = await fetch(`/api/risks/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setRisk(data);
        }
      } catch (error) {
        console.error("Error fetching risk:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRisk();
  }, [params.id]);

  if (loading) return <div className="text-center py-8">Chargement...</div>;
  if (!risk) return <div className="text-center py-8">Risque non trouvé</div>;

  const levelColors: Record<string, "destructive" | "warning" | "secondary" | "default"> = {
    CRITICAL: "destructive",
    HIGH: "warning",
    MEDIUM: "secondary",
    LOW: "default",
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => router.back()}
            className="text-sm text-brand-600 hover:text-brand-700 mb-2"
          >
            ← Retour
          </button>
          <h1 className="text-3xl font-bold text-slate-900">{risk.title}</h1>
        </div>
        <Badge variant={levelColors[risk.level] || "default"}>{risk.level}</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Détails</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <div>
            <p className="text-sm text-slate-500">Description</p>
            <p className="mt-1">{risk.description || "Aucune description"}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p className="text-xs text-slate-500 uppercase">Catégorie</p>
              <p className="mt-1 font-medium">{risk.category}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Propriétaire</p>
              <p className="mt-1 font-medium">{risk.owner}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Probabilité</p>
              <p className="mt-1 font-medium">{risk.probability}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Impact</p>
              <p className="mt-1 font-medium">{risk.impact}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs text-slate-500 uppercase">Traitement</p>
              <p className="mt-1 font-medium">{risk.treatment}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Statut</p>
              <p className="mt-1 font-medium">{risk.status}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Créé le</p>
              <p className="mt-1 font-medium">{new Date(risk.createdAt).toLocaleDateString("fr-FR")}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
