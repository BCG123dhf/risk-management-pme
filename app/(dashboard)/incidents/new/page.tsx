"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const severities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

export default function NewIncidentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "MEDIUM",
    occurredAt: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/incidents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          occurredAt: new Date(formData.occurredAt).toISOString(),
        }),
      });

      if (res.ok) {
        router.push("/incidents");
      } else {
        alert("Erreur lors de la création de l'incident");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Signaler un incident</h1>
        <p className="mt-2 text-slate-600">Ajouter un nouvel incident ou une non-conformité</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Formulaire de signalement</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Titre de l'incident
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Ex: Erreur de saisie sur facture"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Circonstances et détails de l'incident..."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Gravité
                </label>
                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {severities.map((sev) => (
                    <option key={sev} value={sev}>
                      {sev}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Date d'occurrence
                </label>
                <input
                  type="date"
                  name="occurredAt"
                  value={formData.occurredAt}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-brand-700 px-6 py-2 text-white font-medium hover:bg-brand-800 disabled:opacity-50"
              >
                {loading ? "Création..." : "Signaler l'incident"}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-xl border border-slate-300 bg-white px-6 py-2 text-slate-700 font-medium hover:bg-slate-50"
              >
                Annuler
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
