export function IncidentTrend() {
  const data = [
    { label: "Jan", value: 1 },
    { label: "Fév", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Avr", value: 2 },
    { label: "Mai", value: 5 },
    { label: "Juin", value: 3 },
  ];

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="w-10 text-sm text-slate-500">{item.label}</span>
          <div className="h-2 flex-1 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-yellow-500"
              style={{ width: `${(item.value / 5) * 100}%` }}
            />
          </div>
          <span className="text-sm text-slate-700">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
